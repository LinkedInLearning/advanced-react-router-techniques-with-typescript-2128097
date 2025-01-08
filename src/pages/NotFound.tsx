import React from "react";
import { useNavigate } from "react-router-dom";
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

  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <button onClick={() =>navigate("/")}>Go Back</button>
    </Container>
  );
};

export default NotFound;
