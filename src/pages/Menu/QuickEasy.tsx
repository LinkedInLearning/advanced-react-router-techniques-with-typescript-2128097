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

const QuickEasy: React.FC = () => {

  return (
      <Container>
        <Title>Quick & Easy Recipes</Title>
        <Description>
          Discover a curated list of recipes that are simple, fast, and
          perfect for busy days. Enjoy delicious meals in no time!
        </Description> 
      </Container>
  );
};

export default QuickEasy;
