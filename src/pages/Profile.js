import React, { useEffect, useState } from 'react';
import Repos from "../components/Repos";
import Text from "../components/Text";
import { ActivityIndicator } from "react-native";
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { getRepos } from "../services/api"
import { Container, Center } from './style';



const Profile = ({ navigation }) => {
  const [data, setData] = useState([])
  const [loading, setloading] = useState(true)
  const route = useRoute();

  useEffect(() => {
    getRepos(route.params.username)
      .then(res => {
        setData(res.data);
        setloading(false)
      }).catch(err => {
        console.log(err)
        setloading(false)
      })
    navigation.setOptions({
      title: route.params.username,
    });

  }, [route, navigation]);

  return (
    <>
      {loading ?
        <Center>
          <ActivityIndicator size="large" color="darkviolet" />
        </Center>
        :
        <Container>
          {data.length ?
            <FlatList
              data={data}
              renderItem={({ item }) => <Repos name={item.name} />}
              keyExtractor={item => item.id}
            />
            :
            <Text text="O usuário não possui repositórios ={]" />}
        </Container>
      }
    </>
  )
};

export default Profile;
