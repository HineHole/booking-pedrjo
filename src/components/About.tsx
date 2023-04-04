import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #333;
  margin-bottom: 24px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: #666;
  margin-bottom: 48px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 24px;
  text-align: center;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Subtitle>Your Trusted Cleaning Service Provider</Subtitle>
      <Paragraph>
        We are a professional cleaning service provider with years of
        experience. Our team is dedicated to providing top-notch cleaning
        services to ensure your home or office is clean and comfortable.
      </Paragraph>
      <Paragraph>
        We use eco-friendly and safe cleaning products to protect your health
        and the environment. Our cleaning experts are trained, licensed, and
        insured to provide you with the highest level of service and
        satisfaction.
      </Paragraph>
      <Paragraph>
        Contact us today to schedule a cleaning service appointment or to
        learn more about our cleaning services.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;
