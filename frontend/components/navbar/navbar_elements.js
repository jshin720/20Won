import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaClone } from 'react-icons/fa'


export const Nav = styled.nav`
  
`

export const NavLink = styled(Link)`
`

export const Bars = styled(FaClone)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  
`

export const NavBtnLink = styled(Link)`
  

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`
