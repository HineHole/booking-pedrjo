import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 70px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #666;
`;

interface FooterProps {
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ companyName }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterText>&copy; {currentYear} {companyName} - All rights reserved</FooterText>
    </FooterContainer>
  );
};

export default Footer;