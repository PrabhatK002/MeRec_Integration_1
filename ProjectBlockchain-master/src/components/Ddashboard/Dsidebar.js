import React from "react";

import styled, { css } from "styled-components";
import { SidebarMenu, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute } from "../Ddashboard/DdashboardElements";
const Dsidebar = () => {
    return (
        <>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink to="/Docdetail" >
              Doctor's Details
            </SidebarLink>
            <br></br>
            <SidebarLink to="/accessRec" >
              Access Record
            </SidebarLink>
            <br></br>
            <SidebarLink to="/Uploadrec" >
              Upload Record 
            </SidebarLink>
            </SidebarMenu>                     
        </SidebarWrapper>
        </>
    );
};

export default Dsidebar;