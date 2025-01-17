import React from 'react'
import { useOrder, useConfig, useLanguage } from 'ordering-components-external'

import { Container, Layer } from './styles'

import { MomentControl } from '../MomentControl'
import { SpinnerLoader } from '../../../../../components/SpinnerLoader'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { NavBar } from '../NavBar'

export const MomentContent = (props) => {
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const limitDays = parseInt(configs?.max_days_preorder?.value, 10)
  const [orderState] = useOrder()

  const currentDate = new Date()
  const time = limitDays > 1
    ? currentDate.getTime() + ((limitDays - 1) * 24 * 60 * 60 * 1000)
    : limitDays === 1 ? currentDate.getTime() : currentDate.getTime() + (6 * 24 * 60 * 60 * 1000)

  currentDate.setTime(time)
  currentDate.setHours(23)
  currentDate.setMinutes(59)
  const momentProps = {
    maxDate: currentDate
  }

  const { width } = useWindowSize()

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <NavBar title={t('SELECT_DELIVERY_DATE_TIME', 'Select date & time  for your delivery')} />
      <Container isLoading={orderState?.loading}>
        <MomentControl {...momentProps} />
        {orderState?.loading && (
          <Layer>
            {(window.location.pathname !== '/search' || orderState?.options?.address?.location) && (
              <SpinnerLoader
                style={{
                  top: width <= 768 ? '50%' : '40%',
                  position: width <= 768 ? 'absolute' : 'sticky',
                  height: 'auto'
                }}
              />
            )}
          </Layer>
        )}
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
