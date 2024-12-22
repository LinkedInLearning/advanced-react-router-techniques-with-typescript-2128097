import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 160px); /* Account for header and footer height */
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    if (location.state?.from) {
      navigate(location.state.from); // Navigate back to the previous path
    } else {
      navigate("/"); // Default to homepage if no previous path
    }
  };

  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <button onClick={handleGoBack}>Go Back</button>
    </Container>
  );
};

export default NotFound;
