import React from 'react';

import { Nav, NavbarContainer ,  MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink} from './PdashboardElements';
import { NavLogo } from './PdashboardElements';
import { SidebarContainer, Icon, CloseIcon,  SidebarMenu, SidebarLink, SidebarRoute} from './PdashboardElements';
import { animateScroll as scroll} from 'react-scroll';
import Psidebar from './Psidebar';



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
        <Psidebar />
      </SidebarContainer>
               
    
    </>
  );
};

export default Navbar;

