import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomePageContainer = styled.div`
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

const Button = styled.button`
  padding: 16px 32px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #666;
  }
`;

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Title>Städa Fint AB</Title>
      <Subtitle>Your home cleaning service</Subtitle>
      <Button>Get Started</Button>
    </HomePageContainer>
  );
};

export default HomePage;

