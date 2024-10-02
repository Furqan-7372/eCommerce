import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsStackNavigator from '../ProductsStackNavigator/ProductsStackNavigator';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';
import {IMainNavigator,MainStackParamList} from '../../Interfaces';


const Stack = createStackNavigator<MainStackParamList>();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="ProductsStack" component={ProductsStackNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
