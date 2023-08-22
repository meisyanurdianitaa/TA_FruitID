// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{
  HomeScreen,
    FruitScreen,
    FruitscanScreen,
    FruitdetailScreen,
    FruitdetailhasilscanScreen,
    VidioScreen,
    TentangScreen
} from "./";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fruit" component={FruitScreen} />
        <Stack.Screen name="Fruitscan" component={FruitscanScreen} />
        <Stack.Screen name="Fruitdetail" component={FruitdetailScreen} />
        <Stack.Screen name="Fruitdetailhasilscan" component={FruitdetailhasilscanScreen} />
        <Stack.Screen name="Vidio" component={VidioScreen} />
        <Stack.Screen name="Tentang" component={TentangScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;