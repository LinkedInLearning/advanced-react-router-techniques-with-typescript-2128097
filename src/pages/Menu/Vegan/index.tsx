import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Vegan = () => {
  const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  const veganRecipes = ["Vegan Tacos", "Quinoa Salad", "Tofu Stir Fry"];

  return (
    <Container>
      <Title>Vegan Recipes</Title>
      <RecipeList>
        {veganRecipes.map((recipe) => (
          <RecipeItem key={recipe}>
            <NavLink to={`/vegan/${slugify(recipe)}`}>
              {recipe}
            </NavLink>
          </RecipeItem>
        ))}
      </RecipeList>
    </Container>
  );
};

export default Vegan;

// Styled Components
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`;

const RecipeList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const RecipeItem = styled.li`
  margin: 8px 0;

  .active {
    font-weight: bold;
    color: green;
  }
`;
