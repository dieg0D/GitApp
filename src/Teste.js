import React, { useState, useEffect } from 'react';
import styled from "styled-components/native"

const Claudinha = styled.Text`
  color: ${({ color }) => color};
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;
const Button = styled.TouchableOpacity`
  background-color: darkviolet;
  width: 80%;
  padding: 10px 5px;
`;


const Teste = ({ children, title }) => {
  const [counter, setCounter] = useState(0)
  const [teste, setTeste] =useState(false)
  
  useEffect(() => {
    setTeste(!teste)
  }, [counter])

  return (
    <>
      <Claudinha color={"#f25678"}>{counter}</Claudinha>
      <Button >
        <Claudinha color={"#f25678"} onPress={() => setCounter(counter + 1)}>buscar</Claudinha>
      </Button>
      <Button >
        <Claudinha color={"#f25678"} onPress={() => setCounter(0)}>Reset</Claudinha>
      </Button>

    </>
  )
}; 

export default Teste;
