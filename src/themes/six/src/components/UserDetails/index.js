import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Container, Header, SideForm, UserData } from './styles'

import {
  UserFormDetails as UserFormController,
  useLanguage,
  useSession
} from 'ordering-components-external'

import { UserFormDetailsUI } from '../UserFormDetails'
import { Button } from '../../../../../styles/Buttons'

const UserDetailsUI = (props) => {
  const {
    isEdit,
    formState,
    cleanFormState,
    toggleIsEdit,
    validationFields,
    isUserDetailsEdit,
    isCustomerMode,
    userState
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const userData = userState.result?.result || props.userData || formState.result?.result || user

  useEffect(() => {
    if (isUserDetailsEdit) {
      !isEdit && toggleIsEdit()
    }
  }, [isUserDetailsEdit])

  const toggleEditState = () => {
    toggleIsEdit()
    cleanFormState({ changes: {} })
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {(validationFields.loading || formState.loading || userState.loading) && (
        <UserData>
          <Skeleton width={250} height={25} />
          <Skeleton width={180} height={25} />
          <Skeleton width={210} height={25} />
        </UserData>
      )}

      {!(validationFields.loading || formState.loading || userState.loading) && (
        <Container>
          <Header className='user-form'>
            <h2>{t('CUSTOMER_DETAILS', 'Customer Details')}</h2>
            {!isEdit && <Button outline color='primary' className='edit' onClick={() => toggleIsEdit()}>{t('EDIT', 'Edit')}</Button>}
          </Header>
          {!isEdit ? (
            <UserData>
              {(userData?.name || userData?.middle_name || userData?.lastname || userData?.second_lastname) && (
                <p>
                  <strong>{t('NAME', 'Name')}:</strong> {userData?.name} {userData?.middle_name} {userData?.lastname} {userData?.second_lastname}
                </p>
              )}
              {userData?.email && (
                <p><strong>{t('EMAIL', 'Email')}:</strong> {userData?.email}</p>
              )}
              {(userData?.cellphone || user?.cellphone) && (
                <p>
                  <strong>{t('CELLPHONE', 'Cellphone')}:</strong>
                  {(userData?.country_phone_code) && `+${(userData?.country_phone_code)} `}{(userData?.cellphone)}
                </p>
              )}
              {(userData?.phone || user?.phone) && (
                <p>
                  <strong>{t('PHONE', 'Phone')}:</strong>
                  {(userData?.cellphone)}
                </p>
              )}
            </UserData>
          ) : (
            <SideForm>
              <UserFormDetailsUI
                {...props}
                userData={userData}
                onCancel={toggleEditState}
                isCustomerMode={isCustomerMode}
              />
            </SideForm>
          )}
        </Container>
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const UserDetails = (props) => {
  const userDetailsProps = {
    ...props,
    UIComponent: UserDetailsUI
  }

  return <UserFormController {...userDetailsProps} />
}
