import React from 'react';
import styled from 'styled-components/native';

const InputText = styled.TextInput`
  border: 1px solid #ddd;
  background: white;
  width: 70%;
  font-size: 20px;
  padding-left: 15px;
`;

const Input = ({ ...props }) => <InputText {...props} />;

export default Input;
