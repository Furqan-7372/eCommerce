import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {IStoreNavigator} from '../../Interfaces/index';
import Men from '../../Screens/Men';
import Women from '../../Screens/Women';
import Children from '../../Screens/Children';
import Fonts from '../../../android/app/build/intermediates/assets/debug/mergeDebugAssets/custom';

const Tab = createMaterialTopTabNavigator();

const StoreNavigator: React.FC<IStoreNavigator> = () => {
  return (
    <Tab.Navigator
      initialRouteName="Women"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
        },
        tabBarLabelStyle: {fontSize: 18, fontFamily: Fonts.metropolisSemiBold},
      }}>
        <Tab.Screen
          name="Women"
          component={Women}
          options={{ tabBarLabel: 'Women' }}
        />
      <Tab.Screen
        name="Men"
        component={Men}
        options={{ tabBarLabel: 'Men' }}
      />
      <Tab.Screen
        name="Children"
        component={Children}
        options={{ tabBarLabel: 'Children' }}
      />
    </Tab.Navigator>
  );
};

export default StoreNavigator;
