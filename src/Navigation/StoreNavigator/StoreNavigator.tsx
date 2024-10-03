import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {IStoreNavigator} from '../../Interfaces/index';
import Men from '../../Screens/Men';
import Women from '../../Screens/Women';
import Children from '../../Screens/Children';
import Fonts from '../../Assets/Fonts/index';
import Colors from '../../Utils/color';
import { height } from '../../Utils/dimensions';


const Tab = createMaterialTopTabNavigator();

const StoreNavigator: React.FC<IStoreNavigator> = () => {
  return (
    <Tab.Navigator
      initialRouteName="Women"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary200,
        tabBarInactiveTintColor: Colors.primary900,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.primary200,
        },
        tabBarLabelStyle: {fontSize: height*0.0187, fontFamily: Fonts.metropolisSemiBold},
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
