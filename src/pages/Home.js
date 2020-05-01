import React, { useState } from 'react';
import Input from "../components/Input"
import Button from '../components/Button';
import Text from "../components/Text"
import Card from "../components/Card"
import { ActivityIndicator } from "react-native";
import { FlatList } from 'react-native';
import { Container, Row, Center } from './style';
import { getFollowers } from "../services/api"

const Home = () => {
  const [user, setUser] = useState('');
  const [data, setData] = useState([])
  const [loading, setloading] = useState(false)

  const search = () => {
    setloading(true)
    getFollowers(user).then(res => {
      setData(res.data)
      setUser("")
      setloading(false)
    }).catch(err => {
      console.log(err)
      setloading(false)
    })
  }

  return (

    <Container>
      <Row>
        <Input
          placeholder="Username"
          autoCapitalize="none"
          value={user}
          onChangeText={text => setUser(text)}
          returnKeyType="send"
          onSubmitEditing={() => search(user)}
        />
        <Button
          text="Buscar"
          onPress={() => search(user)}
        />
      </Row>
      {loading ?
        <Center>
          <ActivityIndicator size="large" color="darkviolet" />
        </Center>
        :
        <>
          {data.length ?
            <FlatList
              data={data}
              renderItem={({ item }) => <Card avatar={item.avatar_url} username={item.login} />}
              keyExtractor={item => item.id}
            />
            :
            <Text text="Você ainda não buscou nada =(" />}
        </>
      }
    </Container>
  )
};

export default Home;
