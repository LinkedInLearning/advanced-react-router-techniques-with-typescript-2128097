import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LoadingSpinner } from "../components/LoadingSpinner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%; /* Let Layout handle the parent height */
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
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
  line-height: 1.6;
`;

const Dashboard: React.FC = () => {
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
          <Title>Dashboard</Title>
          <Description>
            Welcome to your dashboard! Here, you can explore your projects,
            track activities, and manage your settings efficiently.
          </Description>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
