import React from 'react';
import styled from 'styled-components/native';

const Description = styled.Text`  
  margin-top: 50%;
  color: rgba(0, 0, 0, 0.3);
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

const Text = ({ text }) => <Description >{text}</Description>;

export default Text;