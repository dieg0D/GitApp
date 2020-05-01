import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';

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

const Image = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 50px;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding-top: 10px;
`;

const Card = ({ username, avatar }) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Profile', {
          username: username,
        });
      }}>
      <Container>
        <Image source={{ uri: `${avatar}` }} />
        <Text>{username}</Text>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Card;