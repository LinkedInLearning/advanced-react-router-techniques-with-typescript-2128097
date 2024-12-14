import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LoadingSpinner } from "../../components/LoadingSpinner";

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

const Vegan: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
      <Container>
        {loading ? (
          <LoadingSpinner size={50} />
        ) : (
          <>
           <Title>Vegan Recipes</Title>
            <Description>
              Explore a world of plant-based recipes that are nutritious, delicious,
              and cruelty-free. Perfect for vegans and everyone alike.
            </Description>
          </>
        )}
      </Container>
  );
};

export default Vegan;
