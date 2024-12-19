import React from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f9f9f9; /* Optional background for better visibility */
`;

const StyledHeading = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CustomFallbackUI = ({ error, resetErrorBoundary }: FallbackProps) => (
  <CenteredContainer>
    <StyledHeading>Oops! Something went wrong.</StyledHeading>
    <StyledParagraph>{error.message}</StyledParagraph>
    <StyledButton onClick={resetErrorBoundary}>Retry</StyledButton>
  </CenteredContainer>
);

export const CustomErrorBoundary = ({
  children,
  FallbackComponent = CustomFallbackUI,
}: {
  children: React.ReactNode;
  FallbackComponent?: React.ComponentType<FallbackProps>;
}) => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </ErrorBoundary>
  );
};

