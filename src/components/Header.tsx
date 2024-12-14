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

const Header: React.FC = () => {

  return (
    <HeaderWrapper>
      <Logo>Advanced React Router</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
