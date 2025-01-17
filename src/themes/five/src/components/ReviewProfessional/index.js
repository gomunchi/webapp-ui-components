import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLanguage, useUtils, ReviewDriver } from 'ordering-components-external'
import MdClose from '@meronex/icons/md/MdClose'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import { Alert } from '../Confirm'
import { TextArea } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'

import {
  ReviewProfessionalContainer,
  Comments,
  ActionBtnWrapper,
  DriverPhoto,
  WrapperDriverPhoto,
  ReviewsProgressWrapper,
  ReviewsProgressContent,
  ReviewsProgressBar,
  ReviewsMarkPoint,
  LogoAndReviewWrapper,
  CommentsList,
  DriverInfoBlock,
  CommentButton
} from './styles'
import { reviewCommentList } from '../../../../../utils'

const ReviewProfessionalUI = (props) => {
  const {
    dirverReviews,
    order,
    formState,
    setDriverReviews,
    closeReviewProfessional,
    setIsProfessionalReviewed,
    handleSendDriverReview
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const { handleSubmit, errors } = useForm()
  const [comments, setComments] = useState([])
  const [extraComment, setExtraComment] = useState('')
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })

  const commentsList = reviewCommentList('professional')

  const qualificationList = [
    { key: 1, text: t('TERRIBLE', 'Terrible'), middleNode: false, left: 0, right: 'initial' },
    { key: 2, text: t('BAD', 'Bad'), middleNode: true, left: '25%', right: '75%' },
    { key: 3, text: t('OKAY', 'Okay'), middleNode: true, left: '50%', right: '50%' },
    { key: 4, text: t('GOOD', 'Good'), middleNode: true, left: '75%', right: '25%' },
    { key: 5, text: t('GREAT', 'Great'), middleNode: false, left: 'initial', right: 0 }
  ]

  const handleChangeReviews = (index) => {
    if (index) setDriverReviews({ ...dirverReviews, qualification: index, comment: '' })
    setComments([])
  }

  const onSubmit = values => {
    if (dirverReviews?.qualification === 0) {
      setAlertState({
        open: true,
        content: [`${t('REVIEW_QUALIFICATION_REQUIRED', 'Review qualification is required')}`]
      })
      return
    }
    setAlertState({ ...alertState, success: true })
    handleSendDriverReview()
  }

  const handleChangeComment = (commentItem) => {
    const found = comments.find((comment) => comment?.key === commentItem.key)
    if (found) {
      const _comments = comments.filter((comment) => comment?.key !== commentItem.key)
      setComments(_comments)
    } else {
      setComments([...comments, commentItem])
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const isSelectedComment = (commentKey) => {
    const found = comments.find((comment) => comment?.key === commentKey)
    return found
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        success: false,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }
    if (!formState.loading && !formState.result?.error && alertState.success) {
      setIsProfessionalReviewed && setIsProfessionalReviewed(true)
      closeReviewProfessional && closeReviewProfessional()
    }
  }, [formState])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        success: false,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    let _comments = ''
    if (comments.length > 0) {
      comments.map(comment => (_comments += comment.content + '. '))
    }
    const _comment = _comments + extraComment
    setDriverReviews({ ...dirverReviews, comment: _comment })
  }, [comments, extraComment])

  return (
    <>
      <LogoAndReviewWrapper>
        <WrapperDriverPhoto>
          {(order?.products[0]?.calendar_event?.professional?.photo) ? (
            <DriverPhoto bgimage={optimizeImage(order?.products[0]?.calendar_event?.professional?.photo, 'h_200,c_limit')} />
          ) : <FaUserAlt />}
        </WrapperDriverPhoto>
        {
          order?.products[0]?.calendar_event?.professional?.name && (
            <DriverInfoBlock>{order?.products[0]?.calendar_event?.professional?.name}</DriverInfoBlock>
          )
        }
        <ReviewsProgressWrapper>
          <p>{t('HOW_WAS_YOUR_SERVICE', 'How was your service?')}</p>
          <ReviewsProgressContent>
            <ReviewsProgressBar style={{ width: `${(dirverReviews?.qualification === 0 ? 0 : (dirverReviews?.qualification - 1) / 4) * 100}%` }} />
            {
              qualificationList?.map(qualification => (
                <ReviewsMarkPoint
                  key={qualification?.key}
                  style={{
                    left: theme.rtl ? (qualification?.middleNode ? 'initial' : qualification?.right) : qualification?.left,
                    right: theme?.rtl ? qualification?.left : (qualification?.middleNode ? 'initial' : qualification?.right)
                  }}
                  active={dirverReviews?.qualification === qualification?.key}
                  pass={dirverReviews?.qualification >= qualification?.key}
                  className={qualification?.middleNode ? 'mark-point' : ''}
                  onClick={() => handleChangeReviews(qualification?.key)}
                >
                  <span>{qualification?.text}<span /></span>
                </ReviewsMarkPoint>
              ))
            }
          </ReviewsProgressContent>
        </ReviewsProgressWrapper>
        <CommentsList>
          <p>{commentsList[dirverReviews?.qualification || 1]?.title}</p>
          {
            commentsList[dirverReviews?.qualification || 1]?.list?.map((commentItem, i) => (
              <CommentButton
                key={i}
                active={isSelectedComment(commentItem.key)}
                onClick={() => handleChangeComment(commentItem)}
                initialIcon
              >
                {commentItem.content}
                {
                  isSelectedComment(commentItem.key) && <MdClose />
                }
              </CommentButton>
            ))
          }
        </CommentsList>
      </LogoAndReviewWrapper>
      <ReviewProfessionalContainer onSubmit={handleSubmit(onSubmit)}>
        <Comments>
          <p>{t('DO_YOU_WANT_TO_ADD_SOMETHING', 'Do you want to add something?')}</p>
          <TextArea
            name='comment'
            value={extraComment}
            onChange={(e) => setExtraComment(e.target.value)}
            autoComplete='off'
          />
        </Comments>
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
        <ActionBtnWrapper>
          <Button
            color={!formState.loading ? 'primary' : 'secondary'}
            type='submit'
            disabled={formState.loading}
            className='review-sent'
          >
            {!formState.loading ? (
              t('SEND_REVIEW', 'Send review')
            ) : t('LOADING', 'Loading')}
          </Button>
        </ActionBtnWrapper>
        <Alert
          title={t('DRIVER_REVIEW', 'Driver Review')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </ReviewProfessionalContainer>
    </>
  )
}

export const ReviewProfessional = (props) => {
  const reviewDriverProps = {
    ...props,
    UIComponent: ReviewProfessionalUI,
    isToast: true
  }

  return <ReviewDriver {...reviewDriverProps} />
}
