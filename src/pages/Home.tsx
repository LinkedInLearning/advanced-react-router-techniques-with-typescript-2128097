import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {LoadingSpinner} from "../components/LoadingSpinner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 160px); /* Account for header and footer height */
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
`;

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1-second loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
      <Container>
        {loading ? <LoadingSpinner size={60} /> : <Title>Welcome to the Advanced React Router Course</Title>}
      </Container>
  );
};

export default Home;
