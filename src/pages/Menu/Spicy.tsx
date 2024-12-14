import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
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

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.5;
`;

const Spicy: React.FC = () => {

  return (
    <Container>
      <Title>Spicy Recipes</Title>
      <Description>
        Turn up the heat in your kitchen! Explore bold and fiery recipes
        perfect for those who love a little spice in their life.
      </Description>
    </Container>
  );
};

export default Spicy;
