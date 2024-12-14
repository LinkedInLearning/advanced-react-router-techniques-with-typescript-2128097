// Vegan.tsx
import React from "react";
import styled from "styled-components";
// import CategoryLinks from "./components/CategoryLinks";

const Vegan = () => {
  const veganRecipes = ["Vegan Tacos", "Quinoa Salad", "Tofu Stir Fry"];

  return (
    <Container>
      <Title>Vegan Recipes</Title>
      {/* <CategoryLinks category="vegan" recipes={veganRecipes} /> */}
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
