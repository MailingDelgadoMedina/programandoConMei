import React, { useState, Fragment } from "react";

import styled from "styled-components";

import { FaBars } from "react-icons/fa";

import "../App.css";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Fragment>
      <Nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <NavContainer>
          <NavLogo href="#">GeeksForGeeks</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks href="#">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Events</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Sign In</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </Fragment>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* Fix your navbar by using below two lines of code */
  position: sticky;
  top: 0;
  /* Fix your navbar by using above two lines of code */
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled.a`
  color: green;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 960px) {
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled.a`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
