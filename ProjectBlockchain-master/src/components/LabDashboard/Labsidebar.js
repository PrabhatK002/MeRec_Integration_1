import React from "react";

import styled, { css } from "styled-components";
import { SidebarMenu, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute } from "../LabDashboard/LabdashboardElement";
const Labsidebar = () => {
    return (
        <>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink to="/Labdetail" >
              Laboratory Details
            </SidebarLink>
            <br></br>
            <SidebarLink to="/LabaccessRec" >
              Access Record
            </SidebarLink>
            <br></br>
            <SidebarLink to="/LabUploadrec" >
              Upload Record 
            </SidebarLink>
            </SidebarMenu>                     
        </SidebarWrapper>
        </>
    );
};

export default Labsidebar;