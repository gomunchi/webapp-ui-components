import React from 'react'
import { useLanguage, PurchaseGiftCard as PurchaseGiftCardController } from 'ordering-components-external'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../../styles/Buttons'
import RiRadioButtonFill from '@meronex/icons/ri/RiRadioButtonFill'
import MdRadioButtonUnchecked from '@meronex/icons/md/MdRadioButtonUnchecked'
import { NotFoundSource } from '../../NotFoundSource'

import {
  Container,
  GiftCardsListContainer,
  GiftCardsWrapper,
  GiftCardItem,
  IconControl,
  ActionButtonContainer
} from './styles'

const PurchaseGiftCardUI = (props) => {
  const {
    productsListState,
    selectedProduct,
    setSelectedProduct,
    handleAccept
  } = props
  const [, t] = useLanguage()

  return (
    <Container>
      <h2>{t('PURCHASE_GIFT_CARD', 'Purchase gift card')}</h2>
      <GiftCardsListContainer>
        <p>{t('SELECT_ONE_OPTION', 'Select one option')}</p>
        <GiftCardsWrapper>
          {productsListState.loading && (
            [...Array(5).keys()].map(i => (
              <GiftCardItem key={i}>
                <Skeleton width={150} />
              </GiftCardItem>
            ))
          )}
          {productsListState.products.map(product => (
            <GiftCardItem
              key={product.id}
              onClick={() => setSelectedProduct(product)}
            >
              <IconControl>
                {selectedProduct?.id === product.id ? (
                  <RiRadioButtonFill />
                ) : (
                  <MdRadioButtonUnchecked disabled />
                )}
              </IconControl>
              <span>{product.name}</span>
            </GiftCardItem>
          ))}
          {!productsListState.loading && productsListState.products.length === 0 && (
            <NotFoundSource />
          )}
        </GiftCardsWrapper>
      </GiftCardsListContainer>
      <ActionButtonContainer>
        <Button
          type='button'
          color='primary'
          disabled={!selectedProduct}
          onClick={() => handleAccept()}
        >
          {t('ACCEPT', 'Accept')}
        </Button>
      </ActionButtonContainer>
    </Container>
  )
}

export const PurchaseGiftCard = (props) => {
  const purchaseGiftCardProps = {
    ...props,
    UIComponent: PurchaseGiftCardUI
  }
  return <PurchaseGiftCardController {...purchaseGiftCardProps} />
}
