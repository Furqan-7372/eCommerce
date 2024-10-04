import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsStackNavigator from '../ProductsStackNavigator/ProductsStackNavigator';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';
import {MainStackParamList} from '../../Interfaces';
import LoginScreen from '../../Screens/Login';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/Store/Store';

const Stack = createStackNavigator<MainStackParamList>();

const MainNavigator: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.accessToken);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {token ? (
        <>
          <Stack.Screen name="BottomNavigator" component={BottomTabNavigator} />
          <Stack.Screen
            name="ProductsStack"
            component={ProductsStackNavigator}
          />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
