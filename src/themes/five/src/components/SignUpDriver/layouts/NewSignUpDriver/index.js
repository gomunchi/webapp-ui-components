import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { Alert } from '../../../Confirm'
import { InputPhoneNumber } from '../../../../../../../components/InputPhoneNumber'
import parsePhoneNumber from 'libphonenumber-js'
import { useTheme } from 'styled-components'
import { Input } from '../../../../styles/Inputs'
import { Button } from '../../../../styles/Buttons'
import { Checkbox } from '../../../../../../../styles/Checkbox'
import { sortInputFields } from '../../../../../../../utils'
import { useRecaptcha } from '../../../../../../../hooks/useRecaptcha'
import AiOutlineEye from '@meronex/icons/ai/AiOutlineEye'
import AiOutlineEyeInvisible from '@meronex/icons/ai/AiOutlineEyeInvisible'

import {
  SignupForm as SignUpController,
  useLanguage,
  useConfig,
  ReCaptcha
} from 'ordering-components-external'

import {
  SignUpDriverContainer,
  SignupDescriptionContainer,
  SignupDescriptionTitle,
  SignupDescriptionContent,
  SignUpTitle,
  FormInput,
  WrapperPassword,
  TogglePassword,
  ReCaptchaWrapper,
  TermsConditionWrapper,
  SkeletonWrapper,
  FormSide,
  PhoneNumberWrapper
} from './styles'

const notValidationFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'address_notes']

const SignUpDriverUI = (props) => {
  const {
    handleChangeInput,
    handleButtonSignupClick,
    handleReCaptcha,
    useChekoutFileds,
    validationFields,
    showField,
    isRequiredField,
    formState,
    handleSuccessSignup,
    isPopup,
    externalPhoneNumber,
    saveCustomerUser,
    fieldsNotValid,
    signupData,
    enableReCaptcha
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const formMethods = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [recaptchaConfig] = useRecaptcha(enableReCaptcha)
  const [reCaptchaVersion, setRecaptchaVersion] = useState({ version: '', siteKey: '' })
  const emailInput = useRef(null)

  const [userPhoneNumber, setUserPhoneNumber] = useState('')
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [passwordSee, setPasswordSee] = useState(false)

  const showInputPhoneNumber = (validationFields?.fields?.checkout?.cellphone?.enabled ?? false) || configs?.verification_phone_required?.value === '1'

  const togglePasswordView = () => {
    setPasswordSee(!passwordSee)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onSubmit = () => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    if (!userPhoneNumber &&
      ((validationFields?.fields?.checkout?.cellphone?.enabled &&
        validationFields?.fields?.checkout?.cellphone?.required) ||
        configs?.verification_phone_required?.value === '1')
    ) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required.')]
      })
      return
    }
    if (!isPhoneNumberValid) {
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
      })
      return
    }
    handleButtonSignupClick && handleButtonSignupClick()
    if (!formState.loading && formState.result.result && !formState.result.error) {
      handleSuccessSignup(formState.result.result)
    }
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setUserPhoneNumber(number)

    let phoneNumberParser = null
    let phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    }
    if (isValid) {
      phoneNumberParser = parsePhoneNumber(number)
    }
    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      }
    }
    handleChangeInput(phoneNumber, true)
  }

  const handleChangeInputEmail = (e) => {
    handleChangeInput({ target: { name: 'email', value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '') } })
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
    if (emailInput?.current) {
      emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
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
          return
        }
        setAlertState({
          open: true,
          content: [t('CONFIG_DOESNOT_RECAPTCHA_KEY', 'the config doesn\'t have recaptcha site key')]
        })
        return
      }

      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    } else if (!formState.loading && !formState.result?.error && formState.result?.result) {
      saveCustomerUser && saveCustomerUser(formState.result?.result)
    }
  }, [formState])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(error => error.message)
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    if (!validationFields.loading) {
      Object.values(validationFields?.fields?.checkout).map(field => !notValidationFields.includes(field.code) && (
        field.code === 'email' ? (
          formMethods.register('email', {
            required: isRequiredField(field.code)
              ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email'))
              : null,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
            }
          })
        ) : (
          formMethods.register(field.code, {
            required: isRequiredField(field.code)
              ? t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `${field.name} is required`).replace('_attribute_', t(field.name, field.code))
              : null
          })
        )
      ))
    }
  }, [formMethods])

  useEffect(() => {
    Object.keys(signupData).map(fieldName => {
      formMethods.setValue(fieldName, signupData[fieldName])
    })
  }, [signupData])

  useEffect(() => {
    if (externalPhoneNumber) {
      setUserPhoneNumber(externalPhoneNumber)
      handleChangePhoneNumber(externalPhoneNumber, true)
    }
  }, [externalPhoneNumber])

  useEffect(() => {
    if (recaptchaConfig?.siteKey) {
      setRecaptchaVersion({ version: recaptchaConfig?.version, siteKey: recaptchaConfig?.siteKey })
    }
  }, [recaptchaConfig])

  useEffect(() => {
    handleChangeInput({
      target: {
        name: 'level',
        value: 4
      }
    })
  }, [])

  return (
    <SignUpDriverContainer bgImage={theme.images?.general?.driverSignUpBG}>
      <SignupDescriptionContainer>
        <SignupDescriptionTitle>{t('JOIN_OUR_FLEET_TODAY', 'Join our fleet today')}</SignupDescriptionTitle>
        <SignupDescriptionContent>{t('REGISTER_AS_NEW_DRIVER', 'Register as a new driver and start delivering asap. After registering, you’ll download a driver app for iOS or Android, the orders will get assigned to you, and the driver will guide you through the process.')}</SignupDescriptionContent>
      </SignupDescriptionContainer>
      <FormSide>
        <SignUpTitle>{t('SIGN_UP_NOW', 'Sign up now')}</SignUpTitle>
        <FormInput
          noValidate
          isPopup={isPopup}
          onSubmit={formMethods.handleSubmit(onSubmit)}
          isSkeleton={useChekoutFileds && validationFields?.loading}
        >
          {props.beforeMidElements?.map((BeforeMidElements, i) => (
            <React.Fragment key={i}>
              {BeforeMidElements}
            </React.Fragment>))}
          {props.beforeMidComponents?.map((BeforeMidComponents, i) => (
            <BeforeMidComponents key={i} {...props} />))}
          {
            !(useChekoutFileds && validationFields?.loading) ? (
              <>
                {validationFields?.fields?.checkout &&
                  sortInputFields({ values: validationFields?.fields?.checkout }).map(field =>
                    showField && showField(field.code) && (
                      <React.Fragment key={field.id}>
                        {field.code === 'email' ? (
                          <Input
                            type={field.type}
                            name={field.code}
                            aria-label={field.code}
                            className='form'
                            placeholder={t(field.code.toUpperCase(), field.name)}
                            onChange={handleChangeInputEmail}
                            ref={(e) => {
                              emailInput.current = e
                            }}
                            required={!!field.required}
                            autoComplete='off'
                          />
                        ) : (
                          <Input
                            type={field.type}
                            name={field.code}
                            aria-label={field.code}
                            className='form'
                            placeholder={t(field.code.toUpperCase(), field.name)}
                            onChange={handleChangeInput}
                            required={field.required}
                            autoComplete='off'
                          />
                        )}
                      </React.Fragment>
                    )
                  )}
                {!!showInputPhoneNumber && (
                  <PhoneNumberWrapper className='formStyle'>
                    <InputPhoneNumber
                      value={userPhoneNumber}
                      setValue={handleChangePhoneNumber}
                      handleIsValid={setIsValidPhoneNumber}
                    />
                  </PhoneNumberWrapper>
                )}

                {(!fieldsNotValid || (fieldsNotValid && !fieldsNotValid.includes('password'))) && (
                  <WrapperPassword className='formStyle'>
                    <Input
                      type={!passwordSee ? 'password' : 'text'}
                      name='password'
                      aria-label='password'
                      className='form'
                      placeholder={t('PASSWORD', 'Password')}
                      onChange={handleChangeInput}
                      required
                      ref={formMethods.register({
                        required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'password')) : null,
                        minLength: {
                          value: 8,
                          message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                        }
                      })}
                    />
                    <TogglePassword onClick={togglePasswordView}>
                      {!passwordSee ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </TogglePassword>
                  </WrapperPassword>
                )}

                {props.afterMidElements?.map((MidElement, i) => (
                  <React.Fragment key={i}>
                    {MidElement}
                  </React.Fragment>))}
                {props.afterMidComponents?.map((MidComponent, i) => (
                  <MidComponent key={i} {...props} />))}
              </>
            ) : (
              <>
                {[...Array(5)].map((_, i) => (
                  <SkeletonWrapper key={i}>
                    <Skeleton height={43} />
                  </SkeletonWrapper>
                ))}
              </>
            )
          }
          {props.isRecaptchaEnable && enableReCaptcha && (
            <ReCaptchaWrapper>
              <ReCaptcha handleReCaptcha={handleReCaptcha} reCaptchaVersion={reCaptchaVersion} />
            </ReCaptchaWrapper>
          )}

          {configs?.terms_and_conditions?.value === 'true' && (
            <TermsConditionWrapper>
              <Checkbox
                name='acceptTerms'
                ref={formMethods.register({
                  required: t('ERROR_ACCEPT_TERMS', 'You must accept the Terms & Conditions.')
                })}
                id='acceptTerms'
              />
              <label
                htmlFor='acceptTerms'
              >
                <span>{t('TERMS_AND_CONDITIONS_TEXT', 'I’m agree with')}</span>
                <a
                  href={configs?.terms_and_conditions_url?.value}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {t('TERMS_AND_CONDITIONS', 'Terms & Conditions')}
                </a>
              </label>
            </TermsConditionWrapper>
          )}

          <Button
            color='primary'
            type='submit'
            className='formButton'
            disabled={formState.loading || validationFields?.loading}
          >
            {formState.loading ? `${t('LOADING', 'Loading')}...` : t('SUBMIT', 'Submit')}
          </Button>
        </FormInput>
      </FormSide>
      <Alert
        title={t('SIGN_UP_FOR_BUSINESS', 'Sign up for business')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </SignUpDriverContainer>
  )
}

export const SignUpDriver = (props) => {
  const signUpDriverProps = {
    ...props,
    UIComponent: SignUpDriverUI
  }
  return <SignUpController {...signUpDriverProps} />
}
