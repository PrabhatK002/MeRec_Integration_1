import React from 'react'
import {FaBars, FaEthereum} from 'react-icons/fa';
import { SidebarContainer, Icon, CloseIcon,  SidebarMenu, SidebarLink, SideBtnWrap ,  SidebarRoute} from './SidebarElements';
import { SidebarWrapper } from './SidebarElements';
import { animateScroll as scroll} from 'react-scroll';
const Sidebar = ({isOpen , toggle}) => {
  const toggleHome = () => {
    scroll.scrollToTop()
 }

 const connectbutton = () => {
   window.ethereum.request({method:'eth_requestAccounts'})
.then(res=>{
       // Return the address of the wallet
       console.log(res) 
 })
}

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            {/* <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink> */}
            <SidebarLink to="/" onClick={connectbutton}>
              Connect WALLET
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signupDoc">
              Register as a Doctor
            </SidebarRoute>
          </SideBtnWrap>
            
          <SideBtnWrap>
            <SidebarRoute to="/signup">
              Register as a Patient
            </SidebarRoute>
          </SideBtnWrap>
          
          <SideBtnWrap>
            <SidebarRoute to="/signup">
              Register as a Pharmacy
            </SidebarRoute>
          </SideBtnWrap>
          
          <SideBtnWrap>
            <SidebarRoute to="/signup">
              Register as a Laboratory
            </SidebarRoute>
          </SideBtnWrap>
          
          <SideBtnWrap>
            <SidebarRoute to="/signup">
              Register as a Researchers
            </SidebarRoute>
          </SideBtnWrap>
          
          <SideBtnWrap>
            <SidebarRoute to="/signup">
              Register as a Insurance
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;