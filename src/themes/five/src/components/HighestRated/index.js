import React, { useEffect } from 'react'
import { useLanguage, useOrder, BusinessList as BusinessListController } from 'ordering-components-external'
import { BusinessController } from '../BusinessController'
import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../NotFoundSource'
import {
  HighestRatedContainer,
  ErrorMessage,
  BusinessList,
  Title,
  Description,
  BusinessListWrapper
} from './styles'
import { AutoScroll } from '../AutoScroll'

const HighestRatedUI = (props) => {
  const {
    businessesList,
    handleBusinessClick,
    isCustomLayout,
    handleClickAddress,
    setHasHighRatedBusiness,
    isCustomerMode,
    favoriteIds,
    setFavoriteIds
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()

  const isBusinessWithReviews = businessesList?.businesses?.every((business) => business?.reviews?.total === 0)

  useEffect(() => {
    if (!businessesList.loading) {
      setHasHighRatedBusiness(!isBusinessWithReviews)
    }
  }, [businessesList?.businesses])

  useEffect(() => {
    if (!businessesList?.businesses?.length) return
    const ids = [...(favoriteIds ?? [])]
    businessesList.businesses.forEach(business => {
      if (business?.favorite) {
        ids.push(business.id)
      }
    })
    setFavoriteIds && setFavoriteIds([...new Set(ids)])
  }, [businessesList?.businesses?.length])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HighestRatedContainer>
        <Title>{t('HIGHEST_RATED', 'Highest rated')}</Title>
        <Description>{t('TOP_RATINGS_AND_GREAT_SERVICE', 'Top ratings and great service')}</Description>
        <BusinessListWrapper>
          <BusinessList>
            {
              !businessesList.loading && (businessesList.businesses.length === 0 || isBusinessWithReviews) && (
                <NotFoundSource
                  content={t('NOT_FOUND_BUSINESSES_HIGHEST_RATED', 'No highest rated businesses found, please change filters or change address.')}
                >
                  <Button
                    outline
                    color='primary'
                    onClick={() => handleClickAddress()}
                  >
                    {t('CHANGE_ADDRESS', 'Select other Address')}
                  </Button>
                </NotFoundSource>
              )
            }
            <AutoScroll scrollId='highestRated'>
              {
                !businessesList?.loading && businessesList?.businesses?.map((business) => (
                  business?.reviews?.total > 0 && (
                    <BusinessController
                      key={business.id}
                      className='card'
                      business={business}
                      isBusinessOpen={business.open}
                      handleCustomClick={handleBusinessClick}
                      orderType={orderState?.options?.type}
                      isCustomLayout={isCustomLayout}
                      isCustomerMode={isCustomerMode}
                      favoriteIds={favoriteIds}
                      setFavoriteIds={setFavoriteIds}
                    />
                  )
                ))
              }
            </AutoScroll>
            {businessesList.loading && (
              [...Array(8).keys()].map(i => (
                <BusinessController
                  key={i}
                  className='card'
                  business={{}}
                  isSkeleton
                  orderType={orderState?.options?.type}
                />
              ))
            )}
            {businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && (
              businessesList.error.map((e, i) => (
                <ErrorMessage key={i}>{t('ERROR', 'ERROR')}: [{e?.message || e}]</ErrorMessage>
              ))
            )}
          </BusinessList>
        </BusinessListWrapper>
      </HighestRatedContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const HighestRated = (props) => {
  const highestRatedProps = {
    ...props,
    UIComponent: HighestRatedUI,
    initialOrderByValue: 'rating'
  }
  return <BusinessListController {...highestRatedProps} />
}
