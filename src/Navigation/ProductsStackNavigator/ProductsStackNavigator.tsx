import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../../Screens/Products';
import ProductDetails from '../../Screens/ProductDetails';


const Stack = createStackNavigator();

const ProductsStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ navigation }) => ({
          headerShown: true, 
          headerTransparent: true,
          headerTitle: '',
        })}
      />
 <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerShown: true, title: 'Product Details' }}
      />
    </Stack.Navigator>
  );
};

export default ProductsStackNavigator;
