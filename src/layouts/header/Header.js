/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SimpleBar from 'simplebar-react';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';
import { MessageSquare } from 'react-feather';
import * as Icon from 'react-feather';
import { ReactComponent as LogoWhite } from '../../assets/images/logos/logo.svg';
import MessageDD from './MessageDD';
import MegaDD from './MegaDD';
import NotificationDD from './NotificationDD';
import user1 from '../../assets/images/users/user1.jpg';

import { ToggleMiniSidebar, ToggleMobileSidebar } from '../../store/customizer/CustomizerSlice';
import ProfileDD from './ProfileDD';

const Header = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const topbarColor = useSelector((state) => state.customizer.topbarBg);
  const dispatch = useDispatch();
  const logout=()=>{
    localStorage.clear()
    setTimeout(()=>{
      window.location.reload()
    },200)
  }
  return (
    <Navbar
      color={topbarColor}
      dark={!isDarkMode}
      light={isDarkMode}
      expand="lg"
      className="topbar"
    >
      {/******************************/}
      {/**********Toggle Buttons**********/}
      {/******************************/}
      <div className="d-flex align-items-center">
        <Button
          color={topbarColor}
          className="d-none d-lg-block"
          onClick={() => dispatch(ToggleMiniSidebar())}
        >
          <i className="bi bi-list" />
        </Button>
        <NavbarBrand href="/" className="d-sm-block d-lg-none">
          <LogoWhite />
        </NavbarBrand>
        <Button
          color={topbarColor}
          className="d-sm-block d-lg-none"
          onClick={() => dispatch(ToggleMobileSidebar())}
        >
          <i className="bi bi-list" />
        </Button>
      </div>

      {/******************************/}
      {/**********Left Nav Bar**********/}
      {/******************************/}

      <Nav className="me-auto d-none d-lg-flex" navbar>
        {/* <NavItem>
          <Link to="/starter" className="nav-link">
            Starter
          </Link>
        </NavItem> */}
       
        
        <NavItem>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </NavItem>
      </Nav>
      {/******************************/}
      {/**********Notification DD**********/}
      {/******************************/}
      <div className="d-flex">
        {/******************************/}
        {/**********Mega DD**********/}
        {/******************************/}
      
          
        {/******************************/}
        {/**********Message DD**********/}
        {/******************************/}
        
        {/******************************/}
        {/**********Profile DD**********/}
        {/******************************/}
        <UncontrolledDropdown>
          <DropdownToggle color={topbarColor}>
            <img src={user1} alt="profile" className="rounded-circle" width="30" />
          </DropdownToggle>
          <DropdownMenu className="ddWidth">
            
            <div className="p-2 px-3">
              <Button color="danger" onClick={logout} size="sm">
                Logout
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </Navbar>
  );
};

export default Header;
