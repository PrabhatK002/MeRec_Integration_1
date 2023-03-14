import React from "react";

import styled, { css } from "styled-components";
import { SidebarMenu, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute } from "../PharmaDashboard/PharmaElements";
const Pharmasidebar = () => {
    return (
        <>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink to="/Pharmadetail" >
              Pharmacy Details
            </SidebarLink>
            <br></br>
            <SidebarLink to="/PharmaAccess" >
              Access Record
            </SidebarLink>
            <br></br>
            <SidebarLink to="/PharmaUpload" >
              Upload Record 
            </SidebarLink>
            </SidebarMenu>                     
        </SidebarWrapper>
        </>
    );
};

export default Pharmasidebar;