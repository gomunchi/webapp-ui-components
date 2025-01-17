import React from 'react'
import { useTheme } from 'styled-components'
import { Button } from '../../styles/Buttons'

import { useLanguage } from 'ordering-components-external'

import {
  Container,
  HeaderSection,
  Title,
  LogoImage,
  BodySection,
  DescriptionContainer,
  Description,
  ProjectInfoContainer,
  FooterSection,
  ActionGroup,
  ContactSection
} from './styles'

export const SignUpApproval = (props) => {
  const theme = useTheme()
  const [, t] = useLanguage()
  const { content: { project, dashboardUrl, dashboardLoginUrl, approvalType, businessType, contactEmail }, onAccept, onCancel } = props
  const showDomain = false

  const logoImgUrl = businessType === 2
    ? approvalType === 'automatic' ? theme.images?.general?.CongratulationApproval : theme.images?.general?.CongratulationNoApproval
    : approvalType === 'automatic' ? theme.images?.general?.driverCongratulationApproval : theme.images?.general?.driverCongratulationNoApproval
  const userType = businessType === 2 ? 'business' : 'driver'

  return (
    <Container>
      <HeaderSection>
        {showDomain && <Title>Domain or Brand</Title>}
        <LogoImage
          approvalType={approvalType === 'automatic'}
          src={logoImgUrl}
        />
      </HeaderSection>
      {approvalType === 'automatic' ? (
        <BodySection>
          {userType === 'business' ? (
            <DescriptionContainer>
              <Description>{t('GET_IN_OUR_DASHBOARD_USING_OWNER_ACCOUNT', 'Get in our Dashboard using the business owner account you just created.')}</Description>
              <Description><span className='bigger'>{t('VERY_IMPORTANT', 'Very important')}</span> {t('USE_PROJECT_TO', 'use the project')} (<span className='italic'>{project}</span>) {t('TO_SETUP_YOUR_STORE', ', to get inside and set up your store.')}</Description>
            </DescriptionContainer>
          ) : (
            <DescriptionContainer>
              <Description>{t('GET_IN_OUR_DASHBOARD_USING_DRIVER_OWNER_ACCOUNT', 'Get in our Dashboard using the driver owner account you just created.')}</Description>
              <Description><span className='bigger'>{t('VERY_IMPORTANT', 'Very important')}</span> {t('USE_PROJECT_TO', 'use the project')} (<span className='italic'>{project}</span>) {t('TO_GET_DRIVER_APP', ', to get inside the driver app')}</Description>
            </DescriptionContainer>
          )}
          <ProjectInfoContainer>
            <tbody>
              <tr>
                <td className='bigger td-text-right'>{t('PROJECT', 'Project')}: </td>
                <td className='td-text-left'>({project})</td>
              </tr>
              <tr>
                <td className='bigger td-text-right'>{t('DASHBOARD_WEBPAGE', 'Dashboard webpage')}: </td>
                <td className='td-text-left'><a className='green-text' href={t('SIGNUP_DASHBOARD_LOGIN_URL', dashboardLoginUrl)} target='_blank' rel='noopener noreferrer'>{t('SIGNUP_DASHBOARD_URL', dashboardUrl)}</a></td>
              </tr>
            </tbody>
          </ProjectInfoContainer>
        </BodySection>
      ) : (
        <BodySection>
          {userType === 'business' ? (
            <DescriptionContainer>
              <Description><span className='bigger'>{t('YOUR_STORE_UNDER_APPROVAL', 'Your store is under approval')}</span></Description>
              <Description>{t('BUSINESS_SIGNUP_MESSAGE', 'We will contact you as soon as possible')}</Description>
              <Description>{t('FEEL_FREE_CONTACT_US', 'feel free to contact us at ')} <a className='green-text' href={`mailto:${t('SIGNUP_DRIVER_EMAIL', contactEmail)}`}>{t('SIGNUP_DRIVER_EMAIL', contactEmail)}</a></Description>
            </DescriptionContainer>
          ) : (
            <DescriptionContainer>
              <Description><span className='bigger'>{t('REQUEST_TO_START_UNDER_APPROVAL', 'Your request to start as a driver is under approval.')}</span></Description>
              <Description>{t('BUSINESS_SIGNUP_MESSAGE', 'We will contact you as soon as possible')}</Description>
              <Description>{t('FEEL_FREE_CONTACT_US', 'feel free to contact us at ')} <a className='green-text' href={`mailto:${t('SIGNUP_DRIVER_EMAIL', contactEmail)}`}>{t('SIGNUP_DRIVER_EMAIL', contactEmail)}</a></Description>
            </DescriptionContainer>
          )}
        </BodySection>
      )}
      <FooterSection>
        <ActionGroup>
          <Button
            outline
            color='primary'
            type='button'
            onClick={() => onCancel()}
          >
            {t('CANCEL', 'Cancel')}
          </Button>
          <Button
            color='primary'
            type='button'
            onClick={() => onAccept()}
          >
            {t('ACCEPT', 'Accept')}
          </Button>
        </ActionGroup>
        {(approvalType === 'automatic' && userType === 'business') && (
          <ContactSection>{t('CONTACT_US_QUESTIONS', 'If you have some questions do no hestitate to contact us at ')} <a className='green-text' href={`mailto:${t('SIGNUP_DRIVER_EMAIL', contactEmail)}`}>{t('SIGNUP_DRIVER_EMAIL', contactEmail)}</a></ContactSection>
        )}
      </FooterSection>
    </Container>
  )
}

export default SignUpApproval
