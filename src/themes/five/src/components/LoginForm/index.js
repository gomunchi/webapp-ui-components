import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import parsePhoneNumber from 'libphonenumber-js'
import OtpInput from 'react-otp-input'
import Skeleton from 'react-loading-skeleton'
import {
  LoginForm as LoginFormController,
  useLanguage,
  useConfig,
  useSession,
  useToast, ToastType,
  ReCaptcha,
  useApi,
  useOptimizationLoad
} from 'ordering-components-external'
import { Alert } from '../Confirm'
import { SpinnerLoader } from '../../../../../components/SpinnerLoader'
import { InputPhoneNumber } from '../InputPhoneNumber'
import {
  LoginContainer,
  FormSide,
  FormInput,
  RedirectLink,
  SocialButtons,
  LoginWith,
  SkeletonSocialWrapper,
  TogglePassword,
  OtpWrapper,
  CountdownTimer,
  ReCaptchaWrapper,
  InputBeforeIcon,
  InputWrapper,
  LoginDivider,
  DividerLine,
  Title,
  ValidationText,
  LogotypeContainer,
  HeroSide,
  ResendCode
} from './styles'

import { Tabs, Tab } from '../../styles/Tabs'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { FacebookLoginButton } from '../FacebookLogin'
import { AppleLogin } from '../AppleLogin'
import { SmsLoginButton } from '../../../../../components/SmsLogin'
import { useCountdownTimer } from '../../../../../hooks/useCountdownTimer'
import { useRecaptcha } from '../../../../../hooks/useRecaptcha'

import { formatSeconds } from '../../../../../utils'
import { GoogleLoginButton } from '../GoogleLogin'
import {
  Envelope,
  Lock,
  Eye,
  EyeSlash,
  BoxArrowInRight
} from 'react-bootstrap-icons'

const LoginFormUI = (props) => {
  const {
    useLoginByEmail,
    useLoginByCellphone,
    handleChangeInput,
    handleReCaptcha,
    handleChangeTab,
    handleButtonLoginClick,
    handleSendVerifyCode,
    handleCheckPhoneCode,
    elementLinkToSignup,
    elementLinkToForgotPassword,
    formState,
    verifyPhoneState,
    checkPhoneCodeState,
    loginTab,
    isPopup,
    credentials,
    enableReCaptcha,
    useRootPoint,
    isCustomerMode,
    otpType,
    setOtpType,
    generateOtpCode,
    otpState,
    setOtpState,
    useLoginOtpEmail,
    useLoginOtpCellphone,
    handleLoginSpoonity,
    useLoginSpoonity
  } = props
  const numOtpInputs = loginTab === 'otp' ? 6 : 4
  const [ordering, { setOrdering }] = useApi()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [, { showToast }] = useToast()
  const [{ configs }] = useConfig()
  const [optimizationLoad] = useOptimizationLoad()
  const formMethods = useForm()
  const [recaptchaConfig] = useRecaptcha(enableReCaptcha)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [reCaptchaVersion, setRecaptchaVersion] = useState({ version: '', siteKey: '' })
  const [, { login }] = useSession()
  const [passwordSee, setPasswordSee] = useState(false)
  const [loginWithOtpState, setLoginWithOtpState] = useState(false)
  const [willVerifyOtpState, setWillVerifyOtpState] = useState(false)
  const [validPhoneFieldState, setValidPhoneField] = useState(false)
  const [projectName, setProjectName] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const [otpLeftTime, , resetOtpLeftTime] = useCountdownTimer(
    600, !checkPhoneCodeState?.loading && willVerifyOtpState)
  const isOtpEmail = loginTab === 'otp' && otpType === 'email'
  const isOtpCellphone = loginTab === 'otp' && otpType === 'cellphone'
  const initParams = {
    client_id: configs?.google_login_client_id?.value,
    cookiepolicy: 'single_host_origin',
    scope: 'profile'
  }

  const googleLoginEnabled = optimizationLoad?.result?.configs?.google_login_enabled?.value === '1'
  const facebookLoginEnabled = optimizationLoad?.result?.configs?.facebook_login_enabled?.value === '1'
  const appleLoginEnabled = optimizationLoad?.result?.configs?.apple_login_enabled?.value === '1'

  const spoonityTitle = configs?.spoonity_title?.value

  const hasSocialLogin = (
    (configs?.facebook_login?.value === 'true' || configs?.facebook_login?.value === '1') && configs?.facebook_id?.value) ||
    (configs?.google_login_client_id?.value && configs?.google_login_auth_domain?.value && configs?.google_login_api_key?.value && googleLoginEnabled) ||
    (configs?.apple_login_client_id?.value && appleLoginEnabled) ||
    (loginTab === 'cellphone' && (configs?.twilio_service_enabled?.value === 'true' ||
      configs?.twilio_service_enabled?.value === '1'))
  const hasSocialEnabled = googleLoginEnabled || facebookLoginEnabled || appleLoginEnabled

  const onSubmit = async () => {
    if (loginWithOtpState || loginTab === 'otp') {
      if (!validPhoneFieldState && (loginTab !== 'otp' || (otpType === 'cellphone' && loginTab === 'otp'))) {
        setAlertState({
          open: true,
          content: [t('INVALID_PHONE_NUMBER', 'Invalid phone number')]
        })

        return
      }
      if (loginTab === 'otp') {
        if (otpType === 'cellphone') {
          const { cellphone, countryPhoneCode } = parseNumber(credentials?.cellphone)
          generateOtpCode({ cellphone, countryPhoneCode })
        } else {
          generateOtpCode()
        }
      }
      setWillVerifyOtpState(true)
    } else {
      if (projectName) {
        setOrdering({ ...ordering, project: projectName })
        localStorage.setItem('project_name', projectName)
        setSubmitted(true)
        return
      }
      if (loginTab === 'spoonity') {
        handleLoginSpoonity()
        return
      }
      handleButtonLoginClick()
    }
  }

  const handleSuccessFacebook = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  const handleSuccessApple = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  const handleSuccessGoogle = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  const togglePasswordView = () => {
    setPasswordSee(!passwordSee)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    if (checkPhoneCodeState?.result?.error || verifyPhoneState?.result?.error) {
      setOtpState('')
    }
  }

  const parseNumber = (unparsedNumber) => {
    if (!unparsedNumber) return {}

    const parsedNumber = parsePhoneNumber(unparsedNumber)
    const cellphone = parsedNumber?.nationalNumber
    const countryPhoneCode = +(parsedNumber?.countryCallingCode)

    return {
      cellphone,
      countryPhoneCode
    }
  }

  const handleChangeInputEmail = (e) => {
    handleChangeInput({ target: { name: 'email', value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '') } })
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setValidPhoneField(isValid)
    handleChangeInput({ target: { name: 'cellphone', value: number } })
    formMethods.setValue('cellphone', number, '')
  }

  const handleChangeProject = (e) => {
    setSubmitted(false)
    setProjectName(e.target.value)
  }

  const handleSendOtp = () => {
    if (willVerifyOtpState) {
      const { cellphone, countryPhoneCode } = parseNumber(credentials?.cellphone)

      resetOtpLeftTime()
      if (loginTab !== 'otp') {
        handleSendVerifyCode({
          cellphone: cellphone,
          country_phone_code: countryPhoneCode
        })
      } else {
        onSubmit()
      }
    }
  }

  const handleChangeOtpType = (type) => {
    handleChangeTab('otp')
    setOtpType(type)
  }

  const preventWhiteSpaceOnKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault()
    }
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      if (formState.result?.result?.[0] === 'ERROR_AUTH_VERIFICATION_CODE') {
        if (configs?.security_recaptcha_site_key?.value) {
          setRecaptchaVersion({ version: 'v2', siteKey: configs?.security_recaptcha_site_key?.value })
          setAlertState({
            open: true,
            content: [t('TRY_AGAIN', 'Please try again')]
          })
          setSubmitted(false)
          return
        }
        setAlertState({
          open: true,
          content: [t('CONFIG_DOESNOT_RECAPTCHA_KEY', 'the config doesn\'t have recaptcha site key')]
        })
        setSubmitted(false)
        return
      }
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
      setSubmitted(false)
    }
  }, [formState])

  useEffect(() => {
    formMethods.register('cellphone', {
      required: loginTab === 'cellphone'
        ? t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required').replace('_attribute_', t('CELLPHONE', 'Cellphone'))
        : null
    })
    if (useRootPoint) {
      formMethods.register('project', {
        required: t('VALIDATION_ERROR_PROJECT_REQUIRED', 'The field project is required').replace('_attribute_', t('PROJECT', 'Project'))
      })
    }
  }, [formMethods])

  useEffect(() => {
    if (loginTab !== 'otp') {
      handleSendOtp()
    }
  }, [willVerifyOtpState])

  useEffect(() => {
    if (otpState?.length === numOtpInputs) {
      if (loginTab === 'otp') {
        handleButtonLoginClick()
      } else {
        const { cellphone, countryPhoneCode } = parseNumber(credentials?.cellphone)
        handleCheckPhoneCode({
          cellphone: cellphone,
          country_phone_code: countryPhoneCode,
          code: otpState
        })
      }
    }
  }, [otpState])

  useEffect(() => {
    if (checkPhoneCodeState?.result?.error) {
      showToast(ToastType.Error, checkPhoneCodeState?.result?.result || [t('ERROR', 'Error')])
    } else if (checkPhoneCodeState?.result?.result) {
      showToast(ToastType.Success, t('CODE_SENT', 'The code has been sent'))
      resetOtpLeftTime()
    }
  }, [checkPhoneCodeState])

  useEffect(() => {
    if (otpLeftTime === 0) {
      setAlertState({
        open: true,
        content: t('TIME_IS_UP_PLEASE_RESEND_CODE', 'Time is up. Please resend code again')
      })
    }
  }, [otpLeftTime])

  useEffect(() => {
    if (verifyPhoneState?.result?.error) {
      setAlertState({
        open: true,
        content: verifyPhoneState?.result?.result || [t('ERROR', 'Error')]
      })
    } else resetOtpLeftTime()
  }, [verifyPhoneState])

  useEffect(() => {
    formMethods.reset()
  }, [loginTab])

  useEffect(() => {
    if (ordering.project === null || !submitted || !useRootPoint) return
    handleButtonLoginClick()
  }, [ordering, submitted])

  useEffect(() => {
    if (recaptchaConfig?.siteKey) {
      setRecaptchaVersion({ version: recaptchaConfig?.version, siteKey: recaptchaConfig?.siteKey })
    }
  }, [recaptchaConfig])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <LoginContainer isPopup={isPopup}>
        {isCustomerMode && (
          <HeroSide>
            <img alt='Logotype' width='530px' height='620px' src={theme?.images?.general?.callcenterHero} loading='lazy' />
          </HeroSide>
        )}
        <FormSide isPopup={isPopup} isCustomerMode={isCustomerMode}>
          {isCustomerMode ? (
            <LogotypeContainer>
              <img alt='Logotype-callcenter' width='250px' height='105px' src={theme?.images?.logos?.logoCallcenter} loading='lazy' />
            </LogotypeContainer>
          ) : (
            <Title>{t('LOGIN', 'Login')}</Title>
          )}

          {((Number(useLoginByEmail) + Number(useLoginByCellphone) + Number(useLoginOtpEmail) + Number(useLoginOtpCellphone) + Number(useLoginSpoonity) > 1) && !loginWithOtpState && !willVerifyOtpState) && (
            <LoginWith isPopup={isPopup}>
              <Tabs variant='primary'>
                {useLoginByEmail && (
                  <Tab
                    onClick={() => handleChangeTab('email')}
                    active={loginTab === 'email'}
                    borderBottom={loginTab === 'email'}
                  >
                    {t('BY_EMAIL', 'by Email')}
                  </Tab>
                )}
                {useLoginByCellphone && (
                  <Tab
                    onClick={() => handleChangeTab('cellphone')}
                    active={loginTab === 'cellphone'}
                    borderBottom={loginTab === 'cellphone'}
                  >
                    {t('BY_PHONE', 'by Phone')}
                  </Tab>
                )}
                {useLoginOtpEmail && (
                  <Tab
                    onClick={() => handleChangeOtpType('email')}
                    active={isOtpEmail}
                    borderBottom={isOtpEmail}
                  >
                    {t('BY_OTP_EMAIL', 'by Otp Email')}
                  </Tab>
                )}
                {useLoginOtpCellphone && (
                  <Tab
                    onClick={() => handleChangeOtpType('cellphone')}
                    active={isOtpCellphone}
                    borderBottom={isOtpCellphone}
                  >
                    {t('BY_OTP_CELLPHONE', 'by Otp Cellphone')}
                  </Tab>
                )}
                {useLoginSpoonity && (
                  <Tab
                    onClick={() => handleChangeTab('spoonity')}
                    active={loginTab === 'spoonity'}
                    borderBottom={loginTab === 'spoonity'}
                  >
                    {spoonityTitle || t('BY_SPOONITY', 'by Spoonity')}
                  </Tab>
                )}
              </Tabs>
            </LoginWith>
          )}

          <FormInput
            noValidate
            isPopup={isPopup}
            autoComplete='on'
          >
            {
              props.beforeMidElements?.map((BeforeMidElements, i) => (
                <React.Fragment key={i}>
                  {BeforeMidElements}
                </React.Fragment>))
            }
            {
              props.beforeMidComponents?.map((BeforeMidComponents, i) => (
                <BeforeMidComponents key={i} {...props} />))
            }
            {useRootPoint && (
              <InputWrapper>
                <Input
                  type='text'
                  name='project'
                  aria-label='project'
                  placeholder={t('PROJECT', 'Project')}
                  ref={formMethods.register({
                    required: t(
                      'VALIDATION_ERROR_REQUIRED',
                      'Project is required'
                    ).replace('_attribute_', t('PROJECT', 'Project'))
                  })}
                  onChange={(e) => handleChangeProject(e)}
                  autoComplete='off'
                  autoCapitalize='off'
                />
                <InputBeforeIcon>
                  <BoxArrowInRight />
                </InputBeforeIcon>
              </InputWrapper>
            )}
            {(((useLoginByEmail && loginTab === 'email') || (loginTab === 'otp' && otpType === 'email') || (useLoginSpoonity && loginTab === 'spoonity')) && !willVerifyOtpState) && (
              <>
                {formMethods?.errors?.email?.type === 'required' && (
                  <ValidationText>
                    {formMethods.errors?.email?.message} *
                  </ValidationText>
                )}
                {formMethods.errors?.email?.type === 'pattern' && (
                  <ValidationText>
                    {t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))}
                  </ValidationText>
                )}
                <InputWrapper>
                  <Input
                    type='email'
                    name='email'
                    aria-label='email'
                    placeholder={t('EMAIL', 'Email')}
                    ref={formMethods.register({
                      required: loginTab === 'email' || loginTab === 'spoonity'
                        ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email'))
                        : null,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })}
                    onKeyDown={preventWhiteSpaceOnKeyDown}
                    onChange={handleChangeInputEmail}
                    autoComplete='on'
                    isError={formMethods.errors?.email}
                  />
                  <InputBeforeIcon>
                    <Envelope />
                  </InputBeforeIcon>
                </InputWrapper>
              </>
            )}
            {(((useLoginByCellphone && loginTab === 'cellphone') || (loginTab === 'otp' && otpType === 'cellphone')) && !willVerifyOtpState) && (
              <>
                {formMethods.errors?.cellphone && !credentials?.cellphone && (
                  <ValidationText>
                    {formMethods.errors?.cellphone?.message} {formMethods?.errors?.cellphone?.type === 'required' && '*'}
                  </ValidationText>
                )}
                <InputPhoneNumber
                  value={credentials?.cellphone}
                  setValue={handleChangePhoneNumber}
                  handleIsValid={() => { }}
                  isError={formMethods.errors?.cellphone && !credentials?.cellphone}
                />
              </>
            )}

            {(!verifyPhoneState?.loading && willVerifyOtpState && !checkPhoneCodeState?.loading) && (
              <>
                <CountdownTimer>
                  <span>{formatSeconds(otpLeftTime)}</span>
                </CountdownTimer>

                <OtpWrapper>
                  <OtpInput
                    value={otpState}
                    onChange={otp => setOtpState(otp)}
                    numInputs={numOtpInputs}
                    containerStyle='otp-container'
                    inputStyle='otp-input'
                    isInputNum
                    shouldAutoFocus
                  />
                </OtpWrapper>
                <ResendCode disabled={otpLeftTime > 520} onClick={handleSendOtp}>
                  {t('LANG_SEND_AGAIN', 'Send again')}?
                </ResendCode>
                <Button
                  type='button'
                  color='secundary'
                  disabled={formState.loading}
                  onClick={() => {
                    setLoginWithOtpState(false)
                    setWillVerifyOtpState(false)
                  }}
                >
                  {t('CANCEL', 'Cancel')}
                </Button>
              </>
            )}

            {(verifyPhoneState?.loading || checkPhoneCodeState?.loading) && (
              <SpinnerLoader
                style={{ height: 160 }}
              />
            )}

            {!loginWithOtpState && loginTab !== 'otp' && (
              <>
                {formMethods.errors?.password && (
                  <ValidationText>
                    {formMethods.errors?.password?.message} {formMethods?.errors?.password?.type === 'required' && '*'}
                  </ValidationText>
                )}
                <InputWrapper>
                  <Input
                    type={!passwordSee ? 'password' : 'text'}
                    name='password'
                    aria-label='password'
                    placeholder={t('PASSWORD', 'Password')}
                    ref={formMethods.register({
                      required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
                    })}
                    onChange={(e) => handleChangeInput(e)}
                    isError={formMethods.errors?.password}
                  />
                  <TogglePassword onClick={togglePasswordView}>
                    {!passwordSee ? <Eye /> : <EyeSlash />}
                  </TogglePassword>
                  <InputBeforeIcon>
                    <Lock />
                  </InputBeforeIcon>
                </InputWrapper>
              </>
            )}
            {
              props.afterMidElements?.map((MidElement, i) => (
                <React.Fragment key={i}>
                  {MidElement}
                </React.Fragment>))
            }
            {
              props.afterMidComponents?.map((MidComponent, i) => (
                <MidComponent key={i} {...props} />))
            }
            {!loginWithOtpState && loginTab !== 'otp' && elementLinkToForgotPassword && (
              <RedirectLink isPopup={isPopup}>
                <span>{t('FORGOT_YOUR_PASSWORD', 'Forgot your password?')}</span>
                {elementLinkToForgotPassword}
              </RedirectLink>
            )}
            {props.isRecaptchaEnable && enableReCaptcha && (
              <ReCaptchaWrapper>
                <ReCaptcha handleReCaptcha={handleReCaptcha} reCaptchaVersion={reCaptchaVersion} />
              </ReCaptchaWrapper>
            )}
            {(!willVerifyOtpState &&
              <Button
                color='primary'
                onClick={formMethods.handleSubmit(onSubmit)}
                disabled={formState.loading}
              >
                {formState.loading
                  ? `${t('LOADING', 'Loading')}...`
                  : loginWithOtpState || loginTab === 'otp'
                    ? t('GET_VERIFY_CODE', 'Get verify code')
                    : t('LOGIN', 'Login')}
              </Button>
            )}
            {(loginWithOtpState && !willVerifyOtpState) && (
              <Button
                type='button'
                color='secundary'
                disabled={formState.loading}
                onClick={() => {
                  setLoginWithOtpState(false)
                }}
              >
                {t('CANCEL', 'Cancel')}
              </Button>
            )}
          </FormInput>

          {(elementLinkToSignup && !loginWithOtpState && loginTab !== 'otp') && (
            <RedirectLink register isPopup={isPopup} className='new-account'>
              <span>{t('NEW_ON_PLATFORM', theme?.defaultLanguages?.NEW_ON_PLATFORM || 'New on Ordering?')}</span>
              {elementLinkToSignup}
            </RedirectLink>
          )}
          {!props.isDisableButtons && hasSocialLogin && hasSocialEnabled && (
            <LoginDivider isPopup={isPopup}>
              <DividerLine />
              <p>{t('OR', 'or')}</p>
              <DividerLine />
            </LoginDivider>
          )}
          {(!props.isDisableButtons && !loginWithOtpState) && (
            Object.keys(configs).length > 0 ? (
              <SocialButtons isPopup={isPopup}>
                {(configs?.facebook_login?.value === 'true' ||
                  configs?.facebook_login?.value === '1') &&
                  configs?.facebook_id?.value &&
                  facebookLoginEnabled &&
                  (
                    <FacebookLoginButton
                      appId={configs?.facebook_id?.value}
                      handleSuccessFacebookLogin={handleSuccessFacebook}
                    />
                  )}
                {configs?.google_login_client_id?.value && configs?.google_login_auth_domain?.value && configs?.google_login_api_key?.value && googleLoginEnabled && (
                  <GoogleLoginButton
                    initParams={initParams}
                    handleSuccessGoogleLogin={handleSuccessGoogle}
                  />
                )}
                {configs?.apple_login_client_id?.value && appleLoginEnabled &&
                  (
                    <AppleLogin
                      onSuccess={handleSuccessApple}
                      onFailure={(data) => setAlertState({
                        open: true,
                        content: data
                      })}
                    />
                  )}
                {useLoginByCellphone && loginTab === 'cellphone' &&
                  configs && Object.keys(configs).length > 0 && (configs?.twilio_service_enabled?.value === 'true' ||
                    configs?.twilio_service_enabled?.value === '1') &&
                  (
                    <SmsLoginButton
                      style={{
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: '#000000',
                        backgroundColor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 10,
                        justifyContent: 'space-around'
                      }}
                      iconStyle={{ fontSize: 16 }}
                      textStyle={{
                        margin: 0,
                        width: '50%',
                        textAlign: 'left'
                      }}
                      handleSmsLogin={() => { setLoginWithOtpState(true) }}
                    />
                  )}
              </SocialButtons>
            ) : (
              <SkeletonSocialWrapper>
                <Skeleton height={43} />
                <Skeleton height={43} />
                {useLoginByCellphone && loginTab === 'cellphone' && (
                  <Skeleton height={43} />
                )}
              </SkeletonSocialWrapper>
            )
          )}
        </FormSide>
        <Alert
          title={t('LOGIN', 'Login')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </LoginContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const LoginForm = (props) => {
  const isKioskApp = props.useKioskApp
  const loginControllerProps = {
    ...props,
    isRecaptchaEnable: !isKioskApp,
    elementLinkToForgotPassword: isKioskApp ? null : props.elementLinkToForgotPassword,
    useLoginByCellphone: isKioskApp ? null : props.useLoginByCellphone,
    elementLinkToSignup: isKioskApp ? null : props.elementLinkToSignup,
    isDisableButtons: isKioskApp ? true : props.isDisableButtons,
    UIComponent: LoginFormUI
  }
  return <LoginFormController {...loginControllerProps} />
}
