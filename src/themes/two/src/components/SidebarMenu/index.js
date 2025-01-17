import React, { useEffect, useState } from 'react'
import IosMenu from '@meronex/icons/ios/IosMenu'
import MdClose from '@meronex/icons/md/MdClose'
import AiOutlineLogin from '@meronex/icons/ai/AiOutlineLogin'
import AiOutlineUserAdd from '@meronex/icons/ai/AiOutlineUserAdd'
import FaRegAddressCard from '@meronex/icons/fa/FaRegAddressCard'
import FaRegListAlt from '@meronex/icons/fa/FaRegListAlt'
import AiOutlineHome from '@meronex/icons/ai/AiOutlineHome'
import BiStore from '@meronex/icons/bi/BiStore'
import FaUserCircle from '@meronex/icons/fa/FaUserCircle'
import BiHelpCircle from '@meronex/icons/bi/BiHelpCircle'

import { useEvent, useLanguage, useOrder } from 'ordering-components-external'

import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { LogoutButton } from '../../../../../components/LogoutButton'

import {
  Container,
  IconContent,
  SidebarContent,
  MenuClose,
  MenuLink,
  WrappContent,
  MenuLinkIcon,
  MenuLinkText,
  TextInfo,
  MenuLinkSeparator
} from './styles'

export const SidebarMenu = (props) => {
  const { auth, isHideSignup, userCustomer } = props
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [{ options }] = useOrder()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isHome = window.location.pathname === '/' || window.location.pathname === '/home'

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
    actionSidebar(false)
    setIsMenuOpen(false)
  }

  const actionSidebar = (value) => {
    setIsMenuOpen(value)
    document.getElementById('sidebar_menu').style.width = value
      ? width > 489 ? '340px' : '100vw'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 489) {
        document.getElementById('sidebar_menu').style.width = '100vh'
      } else {
        document.getElementById('sidebar_menu').style.width = '340px'
      }
    }
  }, [width])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container auth={auth}>
        <IconContent
          isHome={isHome}
          aria-label='menu'
          onClick={() => actionSidebar(true)}
        >
          <IosMenu />
        </IconContent>
        <SidebarContent
          id='sidebar_menu'
          isHome={isHome}
        >
          <MenuClose
            aria-label='close'
            onClick={() => actionSidebar(false)}
          >
            <MdClose />
          </MenuClose>

          {userCustomer && (
            <MenuLink isHome={isHome} isCustomer={userCustomer}>
              <WrappContent>
                <MenuLinkIcon
                  active={false}
                >
                  <FaUserCircle />
                </MenuLinkIcon>
                <MenuLinkText>
                  <TextInfo
                    active={false}
                  >
                    {`${userCustomer?.name} ${userCustomer?.lastname}`}
                  </TextInfo>
                </MenuLinkText>
                <MenuLinkSeparator>
                  <div>
                    <hr />
                  </div>
                </MenuLinkSeparator>
              </WrappContent>
            </MenuLink>
          )}

          <MenuLink
            onClick={() => handleGoToPage({ page: options?.address?.location ? 'search' : 'home' })}
          >
            <WrappContent>
              <MenuLinkIcon
                active={
                  window.location.pathname === '/' ||
                  window.location.pathname === '/home' ||
                  window.location.pathname === '/search'
                }
              >
                {options?.address?.location ? (
                  <BiStore />
                ) : (
                  <AiOutlineHome />
                )}
              </MenuLinkIcon>
              <MenuLinkText>
                <TextInfo
                  active={
                    window.location.pathname === '/' ||
                    window.location.pathname === '/home' ||
                    window.location.pathname === '/search'
                  }
                >
                  {options?.address?.location ? (
                    t('BUSINESSES', 'Businesses')
                  ) : (
                    t('HOME', 'Home')
                  )}
                </TextInfo>
              </MenuLinkText>
              <MenuLinkSeparator>
                <div>
                  <hr />
                </div>
              </MenuLinkSeparator>
            </WrappContent>
          </MenuLink>

          {auth && (
            <>
              <MenuLink
                onClick={() => handleGoToPage({ page: 'profile' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    active={
                      window.location.pathname === '/profile'
                    }
                  >
                    <FaRegAddressCard />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      active={
                        window.location.pathname === '/profile'
                      }
                    >
                      {t('PROFILE', 'Profile')}
                    </TextInfo>
                  </MenuLinkText>
                  <MenuLinkSeparator>
                    <div>
                      <hr />
                    </div>
                  </MenuLinkSeparator>
                </WrappContent>
              </MenuLink>

              <MenuLink
                onClick={() => handleGoToPage({ page: 'orders' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    active={
                      window.location.pathname === '/profile/orders'
                    }
                  >
                    <FaRegListAlt />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      active={
                        window.location.pathname === '/profile/orders'
                      }
                    >
                      {t('ORDERS', 'Orders')}
                    </TextInfo>
                  </MenuLinkText>
                  <MenuLinkSeparator>
                    <div>
                      <hr />
                    </div>
                  </MenuLinkSeparator>
                </WrappContent>
              </MenuLink>
              <MenuLink
                isHome={isHome}
                onClick={() => handleGoToPage({ page: 'help' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    isHome={isHome}
                    active={
                      window.location.pathname === '/help'
                    }
                  >
                    <BiHelpCircle />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      isHome={isHome}
                      active={
                        window.location.pathname === '/help'
                      }
                    >
                      {t('HELP', 'help')}
                    </TextInfo>
                  </MenuLinkText>
                  <MenuLinkSeparator>
                    <div>
                      <hr />
                    </div>
                  </MenuLinkSeparator>
                </WrappContent>
              </MenuLink>

              <LogoutButton onCustomClick={() => actionSidebar(false)} />
            </>
          )}
          {!auth && (
            <>
              <MenuLink
                onClick={() => handleGoToPage({ page: 'signin' })}
              >
                <WrappContent>
                  <MenuLinkIcon
                    active={
                      window.location.pathname === '/signin' ||
                      window.location.pathname === '/login'
                    }
                  >
                    <AiOutlineLogin />
                  </MenuLinkIcon>
                  <MenuLinkText>
                    <TextInfo
                      active={
                        window.location.pathname === '/signin' ||
                        window.location.pathname === '/login'
                      }
                    >
                      {t('SIGN_IN', 'Sign in')}
                    </TextInfo>
                  </MenuLinkText>
                  <MenuLinkSeparator>
                    <div>
                      <hr />
                    </div>
                  </MenuLinkSeparator>
                </WrappContent>
              </MenuLink>
              {!isHideSignup && (
                <MenuLink
                  onClick={() => handleGoToPage({ page: 'signup' })}
                >
                  <WrappContent>
                    <MenuLinkIcon
                      active={
                        window.location.pathname === '/signup'
                      }
                    >
                      <AiOutlineUserAdd />
                    </MenuLinkIcon>
                    <MenuLinkText>
                      <TextInfo
                        active={
                          window.location.pathname === '/signup'
                        }
                      >
                        {t('SIGNUP', 'Sign up')}
                      </TextInfo>
                    </MenuLinkText>
                    <MenuLinkSeparator>
                      <div>
                        <hr />
                      </div>
                    </MenuLinkSeparator>
                  </WrappContent>
                </MenuLink>
              )}
            </>
          )}
        </SidebarContent>
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
