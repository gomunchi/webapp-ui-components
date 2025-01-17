import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useConfig, useUtils } from 'ordering-components-external'
import AiOutlineShoppingCart from '@meronex/icons/ai/AiOutlineShoppingCart'

import { BusinessBasicInformation } from '../BusinessBasicInformation'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductsList } from '../BusinessProductsList'
import { BusinessProductsCategories as CategoriesLayoutGroceries } from '../BusinessProductsCategories/layouts/groceries'
import { BusinessProductsList as ProductListLayoutGroceries } from '../BusinessProductsList/layouts/groceries'
import { Modal } from '../../../../../components/Modal'
import { Cart } from '../Cart'
import { NotFoundSource } from '../NotFoundSource'
import { Button } from '../../styles/Buttons'
import {
  Title,
  WrappLayout,
  WrapContent,
  BusinessCategoryProductWrapper,
  BusinessCategoriesContainer,
  BusinessCartContent,
  EmptyCart,
  EmptyBtnWrapper
} from './styles'

const layoutOne = 'groceries'

export const RenderProductsLayout = (props) => {
  const {
    errors,
    isError,
    isLoading,
    business,
    categoryId,
    searchValue,
    sortByValue,
    currentCart,
    businessState,
    categoryState,
    categorySelected,
    openCategories,
    openBusinessInformation,
    isCartOnProductsList,
    handleChangeSortBy,
    errorQuantityProducts,
    handler,
    onClickCategory,
    featuredProducts,
    onProductClick,
    handleSearchRedirect,
    handleChangeSearch,
    setOpenBusinessInformation,
    handleCartOpen,
    productToIdLoading
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parsePrice }] = useUtils()
  const [isCartModal, setisCartModal] = useState(false)

  const isUseParentCategory = configs?.use_parent_category?.value === 'true' || configs?.use_parent_category?.value === '1'

  const frontLayout = business?.front_layout
  const businessLayout = {
    layoutOne: frontLayout === layoutOne && isUseParentCategory
  }

  const BusinessLayout = (props) => {
    const components = {
      categories: businessLayout.layoutOne
        ? CategoriesLayoutGroceries
        : BusinessProductsCategories,
      products_list: businessLayout.layoutOne
        ? ProductListLayoutGroceries
        : BusinessProductsList
    }

    const ComponentToRender = props?.component && components[props?.component]

    return (
      props?.component && (
        <ComponentToRender {...props} />
      )
    )
  }

  return (
    <>
      {!isLoading && business?.id && (
        <WrappLayout
          isLayoutOne={businessLayout.layoutOne}
          isCartOnProductsList={isCartOnProductsList}
        >
          {!businessLayout.layoutOne && (
            <>
              <div className='bp-list'>
                <BusinessBasicInformation
                  businessState={businessState}
                  categoryState={categoryState}
                  searchValue={searchValue}
                  sortByValue={sortByValue}
                  handleChangeSearch={handleChangeSearch}
                  handleChangeSortBy={handleChangeSortBy}
                  errorQuantityProducts={errorQuantityProducts}
                  setOpenBusinessInformation={setOpenBusinessInformation}
                  openBusinessInformation={openBusinessInformation}
                />
                {!errorQuantityProducts ? (
                  <WrapContent>
                    <BusinessCategoriesContainer>
                      {!(business?.categories?.length === 0 && !categoryId) && (
                        <BusinessProductsCategories
                          categories={[{ id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') }, { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') }, ...business?.categories.sort((a, b) => a.rank - b.rank)]}
                          categorySelected={categorySelected}
                          onClickCategory={onClickCategory}
                          featured={featuredProducts}
                          openBusinessInformation={openBusinessInformation}
                        />
                      )}
                    </BusinessCategoriesContainer>
                    <BusinessCategoryProductWrapper>
                      <BusinessProductsList
                        categories={[
                          { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                          { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                          ...business?.categories.sort((a, b) => a.rank - b.rank)
                        ]}
                        category={categorySelected}
                        categoryState={categoryState}
                        businessId={business.id}
                        errors={errors}
                        onProductClick={onProductClick}
                        handleSearchRedirect={handleSearchRedirect}
                        featured={featuredProducts}
                        searchValue={searchValue}
                        isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
                        handleClearSearch={handleChangeSearch}
                        errorQuantityProducts={errorQuantityProducts}
                        currentCart={currentCart}
                        productToIdLoading={productToIdLoading}
                      />
                    </BusinessCategoryProductWrapper>
                  </WrapContent>
                ) : (
                  <NotFoundSource
                    content={t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time')}
                    btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
                    onClickButton={() => handleSearchRedirect()}
                  />
                )}
              </div>
              {isCartOnProductsList && currentCart?.products?.length > 0 && (
                <Cart
                  isForceOpenCart
                  cart={currentCart}
                  isCartPending={currentCart?.status === 2}
                  isProducts={currentCart.products.length}
                  isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
                  handleCartOpen={(val) => handleCartOpen(val)}
                />
              )}
            </>
          )}

          {businessLayout.layoutOne && (
            <>
              <BusinessBasicInformation
                businessState={businessState}
                categoryState={categoryState}
                searchValue={searchValue}
                sortByValue={sortByValue}
                handleChangeSearch={handleChangeSearch}
                handleChangeSortBy={handleChangeSortBy}
                errorQuantityProducts={errorQuantityProducts}
                setOpenBusinessInformation={setOpenBusinessInformation}
                openBusinessInformation={openBusinessInformation}
              />
              {!errorQuantityProducts ? (
                <>
                  <WrapContent>
                    <BusinessCategoriesContainer>
                      {!(business?.categories?.length === 0 && !categoryId) && (
                        <BusinessLayout
                          component='categories'
                          categories={[
                            { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                            { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                            ...business?.categories.sort((a, b) => a.rank - b.rank)
                          ]}
                          categorySelected={categorySelected}
                          onClickCategory={onClickCategory}
                          featured={featuredProducts}
                          openBusinessInformation={openBusinessInformation}
                          openCategories={openCategories}
                          business={business}
                        />
                      )}
                    </BusinessCategoriesContainer>
                    <BusinessCategoryProductWrapper>
                      <BusinessLayout
                        component='products_list'
                        categories={[
                          { id: null, name: t('ALL', theme?.defaultLanguages?.ALL || 'All') },
                          { id: 'featured', name: t('FEATURED', theme?.defaultLanguages?.FEATURED || 'Featured') },
                          ...business?.categories.sort((a, b) => a.rank - b.rank)
                        ]}
                        category={categorySelected}
                        onClickCategory={onClickCategory}
                        categoriesState={props.categoriesState}
                        categoryState={categoryState}
                        businessId={business?.id}
                        errors={errors}
                        onProductClick={onProductClick}
                        handleSearchRedirect={handleSearchRedirect}
                        featured={featuredProducts}
                        searchValue={searchValue}
                        isCartOnProductsList={isCartOnProductsList && currentCart?.products?.length > 0}
                        handleClearSearch={handleChangeSearch}
                        errorQuantityProducts={errorQuantityProducts}
                        business={business}
                        currentCart={currentCart}
                      />
                    </BusinessCategoryProductWrapper>
                  </WrapContent>
                </>
              ) : (
                <NotFoundSource
                  content={t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time')}
                  btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
                  onClickButton={() => handleSearchRedirect()}
                />
              )}
            </>
          )}
        </WrappLayout>
      )}

      {isLoading && !isError && (
        <>
          <BusinessBasicInformation
            isSkeleton
            handler={handler}
            businessState={{ business: {}, loading: true }}
            openBusinessInformation={openBusinessInformation}
          />
          <WrapContent>
            <BusinessCategoriesContainer>
              <BusinessProductsCategories
                isSkeleton
                categories={[]}
                openBusinessInformation={openBusinessInformation}
              />
            </BusinessCategoriesContainer>
            <BusinessCategoryProductWrapper>
              <BusinessProductsList
                categories={[]}
                category={categorySelected}
                categoryState={categoryState}
                isBusinessLoading={isLoading}
                errorQuantityProducts={errorQuantityProducts}
                productToIdLoading={productToIdLoading}
              />
            </BusinessCategoryProductWrapper>
          </WrapContent>
        </>
      )}
      <Modal
        width='40%'
        open={isCartModal}
        onClose={() => setisCartModal(false)}
        padding='0'
      >
        <BusinessCartContent isModal>
          <Title style={{ textAlign: 'center', marginTop: '5px' }}>{t('YOUR_CART', 'Your cart')}</Title>
          {currentCart?.products?.length > 0 ? (
            <>
              <Cart
                isStore
                isCustomMode
                isForceOpenCart
                cart={currentCart}
                isCartPending={currentCart?.status === 2}
                isProducts={currentCart.products.length}
                isCartOnProductsList={isCartOnProductsList}
                handleCartOpen={handleCartOpen}
              />
            </>
          ) : (
            <EmptyCart>
              <div className='empty-content'>
                <AiOutlineShoppingCart />
                <p>{t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart')}</p>
              </div>
              <EmptyBtnWrapper>
                <span>{parsePrice(0)}</span>
                <Button>{t('EMPTY_CART', 'Empty cart')}</Button>
              </EmptyBtnWrapper>
            </EmptyCart>
          )}
        </BusinessCartContent>
      </Modal>
    </>
  )
}
