import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OldView from './views/OldView'
import NormalView from './views/NormalView'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (


    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"

        barStyle={{ backgroundColor: 'blue' }}
      >

        <Tab.Screen name="NormalView" component={NormalView} />
        <Tab.Screen name="OldView" component={OldView} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
;