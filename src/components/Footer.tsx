import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterText>© 2024 Advanced React Router Techniques. Okpala Oluchukwu C | LinkedIn Learning.</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
