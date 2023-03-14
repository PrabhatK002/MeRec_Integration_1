import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer ,  MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink} from './IndashboardElement';
import { NavLogo } from './IndashboardElement';
import { SidebarContainer, Icon, CloseIcon,  SidebarMenu, SidebarLink, SidebarRoute} from './IndashboardElement';
import { SidebarWrapper } from './IndashboardElement';
import { SideBtnWrap } from './IndashboardElement';
import { animateScroll as scroll} from 'react-scroll';
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'; 
import {FaTimes} from 'react-icons/fa'
import Insidebar from './Insidebar';



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
        <Insidebar />
      </SidebarContainer>
               
    
    </>
  );
};

export default Navbar;

