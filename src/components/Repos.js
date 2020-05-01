import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  margin: 10px 0;
  background-color: white;
  border-radius: 10px;
`;


const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding-top: 10px;
`;

const Repos = ({ name }) => {
  return (
    <Container>
      <Text>{name}</Text>
    </Container>
  );
};

export default Repos;