import React from 'react'
import {
  FacebookLoginButton as FacebookLoginController,
  useLanguage
} from 'ordering-components-external'
import EnFacebook from '@meronex/icons/en/EnFacebook'
import { FacebookButton } from './styles'

const FacebookLoginButtonUI = (props) => {
  const [, t] = useLanguage()
  const { handleFacebookLogin } = props
  return (
    <FacebookButton
      initialIcon
      onClick={() => handleFacebookLogin()}
    >
      <EnFacebook />
      <div>{t('LOGIN_WITH_FACEBOOK', 'Login with Facebook')}</div>
    </FacebookButton>
  )
}

export const FacebookLoginButton = (props) => {
  const facebookLoginProps = {
    ...props,
    UIComponent: FacebookLoginButtonUI
  }
  return <FacebookLoginController {...facebookLoginProps} />
}
