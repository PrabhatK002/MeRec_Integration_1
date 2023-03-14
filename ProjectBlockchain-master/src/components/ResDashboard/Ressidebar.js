import React from "react";

import styled, { css } from "styled-components";
import { SidebarMenu, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute } from "../ResDashboard/ResdashboardElement";
const Ressidebar = () => {
    return (
        <>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink to="/Resdetail" >
              Researchers Details
            </SidebarLink>
            <br></br>
            <SidebarLink to="/ResaccessRec" >
              Access Record
            </SidebarLink>
            <br></br>
            <SidebarLink to="/ResUploadrec" >
              Upload Record 
            </SidebarLink>
            </SidebarMenu>                     
        </SidebarWrapper>
        </>
    );
};

export default Ressidebar;