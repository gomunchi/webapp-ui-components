import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  UserFormDetails as UserProfileController,
  useLanguage,
  useSession,
  DragAndDrop,
  ExamineClick
} from 'ordering-components-external'

import { UserFormDetailsUI } from '../UserFormDetails'
import { AddressList } from '../AddressList'
import { Alert } from '../../../../../components/Confirm'
import { Modal } from '../../../../../components/Modal'
import { ProfileOptions } from './ProfileOptions'
import { bytesConverter } from '../../../../../utils'

import FiCamera from '@meronex/icons/fi/FiCamera'
import BiImage from '@meronex/icons/bi/BiImage'

import {
  UserProfileContainer,
  ProfileContent,
  UserImage,
  Image,
  SideForm,
  Camera,
  UserData,
  SavedPlaces,
  UploadImageIcon,
  SkeletonWrapper,
  WrapperForm,
  ChangeButton
} from './styles'
import { Container, InnerContainer } from '../MyOrders/styles'

const UserProfileFormUI = (props) => {
  const {
    userData,
    handleButtonUpdateClick,
    handlechangeImage,
    formState,
    cleanFormState,
    toggleIsEdit,
    isHiddenAddress
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [edit, setEdit] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const inputRef = useRef(null)

  const handleFiles = (files) => {
    if (files.length === 1) {
      const type = files[0].type.split('/')[0]
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        })
        return
      }
      handlechangeImage(files[0])
    }
  }

  const toggleEditState = (val) => {
    setEdit(val)
    toggleIsEdit()
    if (!val) {
      cleanFormState({ changes: {} })
    }
  }

  const handleClickImage = () => {
    inputRef.current.click()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (formState.changes?.photo) {
      const isImage = true
      handleButtonUpdateClick(null, isImage)
    }
  }, [formState.changes?.photo])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        <InnerContainer>
          {!isHiddenAddress && (
            <ProfileOptions value='account' />
          )}
          <ProfileContent>
            <UserProfileContainer mbottom={isHiddenAddress && 25}>
              <UserImage className='user-image'>
                <Image onClick={() => handleClickImage()} isImage={user?.photo || (formState?.changes?.photo && !formState.result.error)}>
                  <ExamineClick onFiles={handleFiles} childRef={(e) => { inputRef.current = e }} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
                    <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
                      {formState.changes?.photo && formState.loading
                        ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                        : ((!formState.changes?.photo || formState.result?.result === 'Network Error' || formState.result.error)
                          ? user?.photo
                            ? (<img src={user?.photo} alt='user image' width='200px' height='200px' loading='lazy' />)
                            : (
                              <UploadImageIcon>
                                <BiImage />
                                <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
                              </UploadImageIcon>
                            )
                          : formState?.changes?.photo && formState.result.error &&
                            <img src={formState?.changes?.photo} alt='user image' loading='lazy' />
                        )}
                    </DragAndDrop>
                  </ExamineClick>
                </Image>
                <Camera><FiCamera /></Camera>
              </UserImage>
              <SideForm className='user-form'>
                {formState.loading ? (
                  <UserData>
                    <Skeleton width={250} height={25} />
                    <Skeleton width={180} height={25} />
                    <Skeleton width={210} height={25} />
                    <Skeleton width={100} height={40} />
                  </UserData>
                ) : (
                  <UserData>
                    <h1>{t('PERSONAL_INFORMATION', 'Personal information')}</h1>
                    <table>
                      <tbody>
                        <tr>
                          <td>{t('NAME', 'Name')}</td>
                          <td>{userData?.name || user?.name} {userData?.lastname || user?.lastname}</td>
                        </tr>
                        <tr>
                          <td>{t('EMAIL', 'Email')}</td>
                          <td>{userData?.email || user.email}</td>
                        </tr>
                        {(userData?.cellphone || user?.cellphone) && (
                          <tr>
                            <td>{t('PHONE', 'Phone')}</td>
                            <td style={{direction: 'ltr'}}>{(userData?.country_phone_code || user?.country_phone_code) && `+${(userData?.country_phone_code || user?.country_phone_code)} `}{(userData?.cellphone || user?.cellphone)}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <ChangeButton
                      onClick={() => toggleEditState(true)}
                    >
                      {t('CHANGE', 'Change')}
                    </ChangeButton>
                  </UserData>
                )}

              </SideForm>
            </UserProfileContainer>
            {(userData?.addresses || user?.addresses) && !isHiddenAddress && (
              <SavedPlaces>
                <h1>Saved Places</h1>
                <AddressList isModal addressList={user?.addresses} />
              </SavedPlaces>
            )}
          </ProfileContent>
        </InnerContainer>
        <Modal
          open={edit}
          onClose={() => setEdit(false)}
        >
          <WrapperForm>
            <h1>{t('EDIT_INFORMATION', 'Edit information')}</h1>
            <UserFormDetailsUI
              {...props}
              onCancel={toggleEditState}
              onCloseProfile={() => setEdit(false)}
              isHiddenAddress={isHiddenAddress}
            />
          </WrapperForm>
        </Modal>
      </Container>
      <Alert
        title={t('PROFILE', 'Profile')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const UserProfileForm = (props) => {
  const UserProfileProps = {
    ...props,
    UIComponent: UserProfileFormUI
  }

  return (
    <UserProfileController {...UserProfileProps} />
  )
}
