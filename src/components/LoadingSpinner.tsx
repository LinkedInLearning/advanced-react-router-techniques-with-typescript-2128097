import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div<SpinnerProps>`
  border: ${({ size = 40 }) => size / 10}px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ color }) => color || "#09d3ac"};
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: ${spinAnimation} ${({ speed }) => speed}s linear infinite;

  display: flex;
  align-items: center;
  justify-content: center;
`;

interface SpinnerProps {
  size?: number;
  color?: string;
  speed?: number;
}

export const LoadingSpinner: React.FC<SpinnerProps> = ({
  size = 40,
  color = "#09d3ac",
  speed = 1,
}) => {
  return <SpinnerWrapper size={size} color={color} speed={speed} />;
};
