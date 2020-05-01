import React from 'react';
import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

const Btn = styled(RectButton)`
  background: darkviolet;
  padding: 10px;
  border-radius: 5px;
`;

const BtnText = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

const Button = ({ text, ...rest }) => {
  return (
    <Btn {...rest}>
      <BtnText>{text}</BtnText>
    </Btn>
  );
};

export default Button;