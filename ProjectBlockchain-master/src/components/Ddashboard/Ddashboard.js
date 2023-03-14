import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer ,  MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink} from './DdashboardElements';
import { NavLogo } from './DdashboardElements';
import { SidebarContainer, Icon, CloseIcon,  SidebarMenu, SidebarLink, SidebarRoute} from './DdashboardElements';
import { SidebarWrapper } from './DdashboardElements';
import { SideBtnWrap } from './DdashboardElements';
import { animateScroll as scroll} from 'react-scroll';
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'; 
import {FaTimes} from 'react-icons/fa'
import Dsidebar from '../Ddashboard/Dsidebar'



const Navbar = ({toggle}) => {

  const toggleHome = () => {
     scroll.scrollToTop()
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              MRS
            </NavLogo> 
            <NavBtn>
                <NavBtnLink to="/">Log out</NavBtnLink>
            </NavBtn>         
        </NavbarContainer>
      </Nav> 
      <SidebarContainer>
        <Dsidebar />
      </SidebarContainer>
               
    
    </>
  );
};

export default Navbar;

