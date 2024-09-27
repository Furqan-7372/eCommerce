import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { IStoreNavigator } from '../../Interfaces/index';
import Men from '../../Screens/Men';
import Women from '../../Screens/Women';
import Children from '../../Screens/Children';

const Tab = createMaterialTopTabNavigator();

const StoreNavigator: React.FC<IStoreNavigator> = () => {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   tabBarActiveTintColor: 'red', // Active tab color
      //   tabBarInactiveTintColor: 'gray', // Inactive tab color
      //   tabBarIndicatorStyle: {
      //     backgroundColor: 'red', // Underline active tab
      //   },
      // }}
      >
      <Tab.Screen
        name="Men"
        component={Men}
        
      />
      <Tab.Screen
        name="Women"
        component={Women}
        
      />
      <Tab.Screen
        name="Children"
        component={Children}
        
      />
    </Tab.Navigator>
  );
};

export default StoreNavigator;
