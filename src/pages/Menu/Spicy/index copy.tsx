import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Container = styled.div`
  padding: 2rem;
  height: calc(100vh - 160px); /* Account for header and footer height */
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const RecipeList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`;

const RecipeItem = styled.li`
  margin: 0.5rem 0;
  font-size: 1.2rem;
`;

// const Spicy = () => (
//   <Container>
//     <Title>Spicy Recipes</Title>
//     <CategoryLinks categories={recipes} basePath="/menu/spicy" />
//   </Container>
// );

const Spicy = () => {
  const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

const recipes = ["Spicy Jollof", "Chicken Pepper Soup", "Spicy Curry Sauce"];

  return (
  <Container>
    <Title>Spicy Recipes</Title>
    <RecipeList>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe}>
          {/* <Link to={`/menu/spicy/${slugify(recipe)}`}>{recipe}</Link> */}
          <NavLink to={`/menu/spicy/${slugify(recipe)}`}>{recipe}</NavLink>
        </RecipeItem>
      ))}
    </RecipeList>
  </Container>
)};

export default Spicy;
