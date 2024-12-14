import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  position: relative;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0;
  min-width: 200px;
  z-index: 1;

  ${DropdownMenu}:hover & {
    display: block;
  }
`;

const DropdownItem = styled(Link)`
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>Advanced React</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink> 
        <DropdownMenu>
          <NavLink to="/menu">Menu</NavLink>
          <DropdownContent>
            <DropdownItem to="quick-easy">Quick & Easy</DropdownItem>
            <DropdownItem to="spicy">Spicy</DropdownItem>
            <DropdownItem to="family-friendly">Family Friendly</DropdownItem>
            <DropdownItem to="vegan">Vegan</DropdownItem>
            <DropdownItem to="intercontinental">Intercontinental</DropdownItem>
          </DropdownContent>
        </DropdownMenu>

        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
