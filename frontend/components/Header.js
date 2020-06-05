import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import '.././node_modules/nprogress/nprogress.css';
import Search from './blog/Search';
Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <Navbar color="dark" light expand="md" style={{cursor: 'pointer'}}>
      <img id ="logosize" src="/AE3.png" alt="logo"  />
        {/* <Link href="/" >
          <NavLink id="header">{APP_NAME}</NavLink>
        </Link> */}
        <NavbarToggler id="hamburger" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar >
            <React.Fragment>
              <NavItem>
                <Link href="/blogs">
                  <NavLink style={{cursor: 'pointer',fontFamily:'Montserrat',color:'white'}}>Blogs</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>
            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link href="/signin">
                    <NavLink style={{cursor: 'pointer',fontFamily:'Montserrat',color:'white'}}>Signin</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink style={{cursor: 'pointer',fontFamily:'Montserrat',color:'white'}}>Signup</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}
            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href="/user">
                  <NavLink style={{cursor: 'pointer',fontFamily:'Montserrat',color:'white'}}>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}
            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLink style={{cursor: 'pointer',fontFamily:'Montserrat',color:'white'}}>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}
            {isAuth() && (
              <NavItem>
                <NavLink style={{ cursor: 'pointer', fontFamily:'Montserrat',color:'white'}} onClick={() => signout(() => Router.replace('/signin'))}>
                  Signout
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      <Search />
    </React.Fragment>
  );
};
export default Header;