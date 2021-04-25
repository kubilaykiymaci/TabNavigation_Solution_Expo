import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RootA from '../screens/RootA';
import ChildTabNav from './TabNavigatorChild';
const Tab = createBottomTabNavigator();

export default function RootTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="RootA"
          component={RootA}
          options={{
            tabBarLabel: 'Root A',
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../assets/icons/rootA.png')}
                style={{width: size, height: size}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="RootB"
          component={ChildTabNav}
          options={{
            tabBarLabel: 'Root B',
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../assets/icons/rootB.png')}
                style={{width: size, height: size}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
