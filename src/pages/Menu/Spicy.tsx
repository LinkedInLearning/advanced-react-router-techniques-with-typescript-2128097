import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LoadingSpinner } from "../../components/LoadingSpinner";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  height: calc(100vh - 160px); /* Account for header and footer height */
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.secondary} 0%,
    ${({ theme }) => theme.colors.background} 100%
  );
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
          <Title>Spicy Recipes</Title>
          <Description>
            Turn up the heat in your kitchen! Explore bold and fiery recipes
            perfect for those who love a little spice in their life.
          </Description>
        </>
      )}
    </Container>
  );
};

export default Spicy;
