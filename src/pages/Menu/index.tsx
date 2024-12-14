import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 160px); /* Adjust for header and footer height */
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const MenuNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const MenuButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: bold;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  min-width: 150px;
  max-width: 200px;
  text-align: center;
  white-space: normal;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Menu: React.FC = () => {
  return (
    <MenuWrapper>
      <Title>Explore Our Menu</Title>
      <MenuNav>
        <MenuButton to="spicy">Spicy</MenuButton>
        <MenuButton to="quick-easy">Quick & Easy</MenuButton>
        <MenuButton to="family-friendly">Family Friendly</MenuButton>
        <MenuButton to="vegan">Vegan</MenuButton>
        <MenuButton to="intercontinental">Intercontinental</MenuButton>
      </MenuNav>
      <Outlet />
    </MenuWrapper>
  );
};

export default Menu;
