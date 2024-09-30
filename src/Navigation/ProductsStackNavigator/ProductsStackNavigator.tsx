// ProductsStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../../Screens/Products';
import ProductDetails from '../../Screens/ProductDetails';

const Stack = createStackNavigator();

const ProductsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default ProductsStackNavigator;
