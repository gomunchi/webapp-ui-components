import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.isChew && props.theme.colors.primary) || props.theme?.header?.components?.style?.backgroundColor};
  border-bottom: ${props => !props.isChew && css`1px solid #E9ECEF`};
`

export const InnerHeader = styled.div`
  display: flex;
  width: 100%;
  color: #FFF;
  justify-content: space-between;
  margin: 15px 0;
  align-items: center;
  #left-side {
    width: ${({ theme }) => theme?.header?.components?.layout?.type === 'starbucks' ? '30%' : '25%'};
    justify-content: flex-start;
  }
  #right-side {
    width: ${({ theme }) => theme?.header?.components?.layout?.type === 'starbucks' ? '30%' : '40%'};
    justify-content: flex-end;
  }
  #center-side {
    width: ${({ theme }) => theme?.header?.components?.layout?.type === 'starbucks' ? 'calc(60% - 140px)' : 'calc(60% - 30px)'};
  }
  @media (min-width: 768px) {
    #left-side {
      width: ${({ theme }) => theme?.header?.components?.layout?.type === 'starbucks' ? '30%' : 'initial'};
    }
  }
  @media (min-width: 1024px) {
    #center-side {
      width: calc(60% - 140px);
    }
  }
  @media (min-width: 1200px) {
    #center-side {
      width: calc(60% - 200px);
    }
  }
  @media (min-width: 1500px) {
    #center-side {
      width: calc(60% - 260px);
    }
  }
`

export const LogoHeader = styled.div`
  cursor: pointer;
  img {
    width: ${props => props.isChew ? '70px' : props.imgW ?? '35px'};
    height: ${props => props.isChew ? '20px' : props.imgH ?? '45px'};
    margin: 0;
    vertical-align: middle;
    margin-left: 10px;
    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}
    @media (min-width: 769px) {
      ${({ theme }) =>
      ['center', 'right']?.includes(theme?.header?.components?.logo?.components?.layout?.position) && css`
        margin-right: 30px;
      `};
      width: ${props => props.imgW ?? '150px'};
      height: ${props => props.isChew && '35px'};
    }
  }
  ${props => !props.disabledResponsive && css`
    img:nth-child(1) {
      display: none;
    }
  `}
  @media (min-width: 769px) {
    img:nth-child(1) {
      display: block;
    }
    img:nth-child(2) {
      display: none;
    }
  }
`

export const LeftHeader = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
`

export const RightHeader = styled.div`
  align-self: center;
  display: flex;
  #select-input {
    div {
      color: ${props => props.theme.colors.darkTextColor};
    }
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  #select-input {
    border-radius: 7.6px;
    #list {
      border-radius: 7.6px;
    }
    ${({ isCustomerMode }) => !isCustomerMode && css`
      margin: 0px 5px;
      height: 40px;
      svg {
        font-size: 16px;
      }
      > div:first-child {
        height: 100%;
        padding-left: 10px;
        padding-right: 10px;
        @media (min-width: 993px) {
          padding-left: 13px;
          padding-right: 13px;
        }
      }
    `}
  }
  &.left-header {
    background: #F8F9FA;
    border: none;
    box-sizing: border-box;
    border-radius: ${props => props.isChew ? '8px' : '50px'};
    margin: 0 20px;
    flex-grow: 1;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 44px;
    @media (min-width: 850px) {
      border: 1px solid #DEE2E6;
      justify-content: space-between;
    }
    @media (min-width: 1024px) {
      padding: 0 20px;
      margin-left: 45px;
    }
    @media (min-width: 1200px) {
      padding: 0 30px;
      margin-left: 50px;
    }
    @media (min-width: 1500px) {
      padding: 0 30px;
      margin: 0 75px;
    }
  }
  > *:not(:last-child) {
    margin: 0 5px;
  }
  > span {
    #select-input {
      background: transparent !important;
    }
  }
  .moment-popover {
    border-left: 1px solid #DEE2E6;
    border-right: 1px solid #DEE2E6;
    height: 100%;
    justify-content: center;
    width: 200px;
    display: none;
    @media (min-width: 1175px) {
      width: 250px;
    }
    
    @media (min-width: 1400px) {
      width: 400px;
    }
    > div:first-child {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  .address-popover {
    flex-grow: 1;
    display: none;
    > div:first-child {
      width: 100%;
    }
  }
  .order-type {
    padding: 0 10px;
    @media (min-width: 1200px) {
      padding: 0 20px;
    }
  }
  @media (min-width: 850px) {
    .moment-popover,
    .address-popover {
      display: flex;
    }
  }
`

export const MenuItem = styled.div`
  display: flex;
`

export const MenuLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  padding: 10px;
  color: #333;
  cursor: pointer;
  ${({ highlight }) => highlight && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
    border-radius: 7.6px;
    padding: 11px 15px;
    &:hover {
      background: ${props => darken(0.07, props.theme.colors.primary)};
      color: #FFF;
    }
  `}
`

export const SubMenu = styled(InnerHeader)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 20px 7px;
  box-sizing: border-box;
  margin: 0px;
  position: relative;
  @media (min-width: 850px) {
    display: none;
  }
`

export const CustomerInfo = styled.div`
  display: none;
  cursor: pointer;
  flex: 1;
  position: relative;
  @media (min-width: 450px) {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      display: flex;
      align-items: center;
      margin: 0;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #909BA9;
      }
      svg {
        color: #748194;
        margin: 0;
        font-size: 20px;
        position: absolute;
        right: 0;
      }
    }
  }
`

export const UserEdit = styled.div`
  > :first-child{
     margin-bottom: 20px;
  }
`

export const AddressMenu = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.isChew ? props.theme.colors?.backgroundPage : props.theme.colors?.headingColor};
  display: flex;
  align-items: center;
  position: relative;
  span {
    width: 85%;
    p {
      margin: 0;
      padding: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  ${({ isCustomerMode }) => isCustomerMode ? css`
    flex: 0.8;
  ` : css`
    width: 50%;
  `}
  svg {
    color: ${props => props.theme.colors?.lightGray};
    font-size: 16px;
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
  }
  @media (min-width: 765px) {
    ${({ isCustomerMode }) => !isCustomerMode && css`
      width: 80%;
    `}
  }
  @media (min-width: 820px) {
    ${({ isCustomerMode }) => !isCustomerMode && css`
      width: 50%;
    `}
  }
`

export const MomentMenu = styled.div`
  border-left: 1px solid #DEE2E6;
  border-right: 1px solid #DEE2E6;
  height: 100%;
  justify-content: center;
  width: 200px;
  display: none;
  
  @media (min-width: 850px) {
    display: flex;
  }
  @media (min-width: 1175px) {
    width: 250px;
  }
  @media (min-width: 1400px) {
    width: 400px;
  }
  > div {
    cursor: pointer;
    font-size: 14px;
    color: #909BA9;
    display: flex;
    align-items: center;
    text-align: center;
    white-space: nowrap;
    padding: 0 10px;
  }
`

export const FarAwayMessage = styled.div`
  pointer-events: none;
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 2000;
  top: 100%;
  background: ${props => props.theme.colors.warning100};
  border: 1px solid ${props => props.theme.colors.warning500};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 6px 15px;
  box-sizing: border-box;
  margin: 10px 0px 0px 0px !important;
  left: 5px;
  ${props => props.theme?.rtl && css`
    right: 5px;
    left: initial;
  `}
  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.warning500};
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-right: auto;
      margin-left: 10px;
    `}
  }
  span {
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.colors.headingColor};
  }
  @media (min-width: 400px) {
    padding: 8px 20px;
    font-size: 14px;
    line-height: 24px;
    left: 10px;
    ${props => props.theme?.rtl && css`
      right: 10px;
      left: initial;
    `}
  }
`

export const Divider = styled.div`
  border: 1px solid #DEE2E6;
  height: 100%;
`
export const AddressFormWrapper = styled.div`
  @media (min-width: 450px) {
    margin-top: 20px;
  }
`
export const InputGroup = styled.div`
  p {
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.theme.colors.darkTextColor};
    width: 100%;
    text-align: left;
    margin: 0 0 7px 0;
  }
`

export const LanguageSelectorWrapper = styled(InputGroup)`
  > div {
    border-radius: 7.6px;
    text-align: left;
    background: #F8F9FA !important;
    border-color: #F8F9FA;
    background-color: #F8F9FA !important;
    height: 44px;
    > div:first-child {
      height: 44px;
    }
    #list {
      border-radius: 7.6px;
      background: #F8F9FA !important;
      border-color: #F8F9FA;
    }
  }
  #select-input {
    margin-left: 5px;
  }
`

export const HeaderSearchMode = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  input {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 1400px){
    width: 300px;
  }
  @media (min-width: 1200px){
    width: 250px;
  }
`

export const LeftSide = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 769px){
    flex-direction: ${({ theme }) =>
    ['center', 'right']?.includes(theme?.header?.components?.logo?.components?.layout?.position) ? 'row-reverse' : 'row'};
    width: 60%;
  }
`
