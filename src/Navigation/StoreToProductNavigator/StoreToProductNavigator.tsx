// WomenNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StoreNavigator from '../../Navigation/StoreNavigator/StoreNavigator';
import ProductsStackNavigator from '../ProductsStackNavigator/ProductsStackNavigator';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';


const Stack = createStackNavigator();

const StoreToProductNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="ProductsStack" component={ProductsStackNavigator} />
    </Stack.Navigator>
  );
};

export default StoreToProductNavigator;
