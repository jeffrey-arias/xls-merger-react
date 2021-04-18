import React, {useState} from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FcHome, FcComboChart, FcPlanner, FcPrivacy} from 'react-icons/fc';

import 'react-pro-sidebar/dist/css/styles.css';
import '../styles/sidebarCustom.css';

export default function SideBar() {

    const [collapse=true, setCollapsed] = useState(0);
    
    return (
            <ProSidebar 
                style={{display: "inline", position:"relative", float: "left", 
                height: "100vh"}} 
                collapsed={collapse}
                width="200px"
                collapsedWidth="50px"
                onMouseEnter={() => setCollapsed(false)}
                onMouseLeave={() => setCollapsed(true)}>

                <Menu>
                    <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    <Link to="/" />
                    <SubMenu title="Admin" icon={<FcPrivacy/>}>
                        <MenuItem><FcPlanner/>&nbsp;Date Range
                        <Link to="/admin" /></MenuItem>
                        <MenuItem><FcComboChart/>&nbsp;Dashboard
                        <Link to="/dashboard" /></MenuItem>
                    </SubMenu>
                </Menu>
                <SidebarFooter>
                    
                </SidebarFooter>
            </ProSidebar>
    );
}