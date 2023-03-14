import React, { useState } from "react";
import {FaBars, FaEthereum} from 'react-icons/fa';
import { Nav, NavbarContainer ,  MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink} from './NavbarElements';
import { Main, DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem } from "./NavbarElements";
import { NavLogo } from './NavbarElements';
import { animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle}) => {

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

  const options = ["Mangoes" , "Apples" , "Oranges"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              MRS
            </NavLogo>
            <MobileIcon onClick={toggle}> 
                <FaBars /> 
            </MobileIcon>
            <NavMenu>
                {/* <NavItem>
                    <NavLinks to='about'>About</NavLinks>
                </NavItem> */}
                <NavItem>
                    <NavLinks to="/" onClick={connectbutton}>Connect WALLET</NavLinks>
                </NavItem>
            </NavMenu>
            {/* <br></br>
            <NavBtn>
                <NavBtnLink to="/signupDoc">Register as Doctor</NavBtnLink>
            </NavBtn>
            <br></br>
            <NavBtn>
                <NavBtnLink to="/signup">Register as patient</NavBtnLink>
            </NavBtn>
            <li>
            <NavBtn>
                <NavBtnLink to="/signup">Register as Insurance</NavBtnLink>
            </NavBtn>
            <br></br>
            <NavBtn>
                <NavBtnLink to="/signup">Register as Laboratory</NavBtnLink>
            </NavBtn>
            <br></br>
            <NavBtn>
                <NavBtnLink to="/signup">Register as Medical</NavBtnLink>
            </NavBtn>
            <br></br>
            <NavBtn>
                <NavBtnLink to="/signup">Register as Researchers</NavBtnLink>
            </NavBtn>
            </li> */}
             
      
             <DropDownContainer>
        <DropDownHeader onClick={toggling}>Register as... </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem>
                <NavBtn>
                  <NavBtnLink to="/signupDoc">Doctor</NavBtnLink>
                </NavBtn>
              </ListItem>
              
              <ListItem>
                <NavBtn>
                  <NavBtnLink to="/signup">Patient</NavBtnLink>
                </NavBtn>
              </ListItem>
              
              <ListItem>
                <NavBtn>
                  <NavBtnLink to="/signupPharma">Pharmacy</NavBtnLink>
                </NavBtn>
              </ListItem>

              <ListItem>
                <NavBtn>
                  <NavBtnLink to="/signupLab">Laboratory</NavBtnLink>
                </NavBtn>
              </ListItem>

              <ListItem>
                <NavBtn>
                  <NavBtnLink to="/signupRes">Researchers</NavBtnLink>
                </NavBtn>
              </ListItem>

              <ListItem>
                <NavBtn>
                  <NavBtnLink to="/signupIn">Insurance</NavBtnLink>
                </NavBtn>
              </ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
   
        </NavbarContainer>
      </Nav>
        
    </>
  );
};

export default Navbar;