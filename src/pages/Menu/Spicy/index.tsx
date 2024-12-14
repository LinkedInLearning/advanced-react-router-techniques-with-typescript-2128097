import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.5;
  text-align: center;
`;

const RecipeList = styled.ul`
  list-style: none;
  margin-top: 2rem;
  padding: 0;
  width: 100%;
  max-width: 600px;
`;

const RecipeItem = styled.li`
  margin-bottom: 1rem;
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    display: inline-block;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
    }
  }
`;

const Spicy: React.FC = () => {

  return (
    <Container>
      <Title>Spicy Recipes</Title>
      <Description>
        Turn up the heat with these spicy recipes that will ignite your
        taste buds. From mild to blazing, find the perfect level of spice!
      </Description>
      <RecipeList>
        <RecipeItem>
          <Link to="52943">Oxtail with broad beans</Link>
        </RecipeItem>
        <RecipeItem>
          <Link to="52941">Red Peas Soup</Link>
        </RecipeItem>
        <RecipeItem>
          <Link to="52940">Brown Stew Chicken</Link>
        </RecipeItem>
      </RecipeList> 
      <Outlet />
    </Container>
  );
};

export default Spicy;
