import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./pages/Home"
import Profile from "./pages/Profile"

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        headerTitle: 'Início',
        headerTitleAlign: 'center'
      }} />

      <Stack.Screen name="Profile" component={Profile} options={{
        title: false,
        headerTitleAlign: 'center'
      }} />
    </Stack.Navigator>
  );
}

export default Routes;
