// BottomTabNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/Home';
import StoreScreen from '../../Screens/Store/index';
import CartScreen from '../../Screens/Cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 50,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          headerShown: true,
          headerTitle: 'Category',
          headerRight: () => (
            <TouchableOpacity style={{paddingRight: 15}} onPress={() => console.log('Search pressed')}>
              <Ionicons name="search" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({color, size}) => (
            <Ionicons name="storefront" size={size} color={color} />
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
