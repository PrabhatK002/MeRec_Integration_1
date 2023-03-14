import React from "react";

import styled, { css } from "styled-components";
import { SidebarMenu, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute } from "../InDashboard/IndashboardElement";
const Insidebar = () => {
    return (
        <>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink to="/Indetail" >
              Insurance Details
            </SidebarLink>
            <br></br>
            <SidebarLink to="/InaccessRec" >
              Access Record
            </SidebarLink>
            <br></br>
            <SidebarLink to="/InUploadrec" >
              Upload Record 
            </SidebarLink>
            </SidebarMenu>                     
        </SidebarWrapper>
        </>
    );
};

export default Insidebar;