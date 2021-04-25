import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChildA from '../screens/ChildA';
import ChildB from '../screens/ChildB';

const Tab = createBottomTabNavigator();

export default function ChildTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ChildA"
        component={ChildA}
        options={{
          tabBarLabel: 'Child A',
          tabBarIcon: ({size}) => (
            <Image
              source={require('../assets/icons/childB.png')}
              style={{width: size, height: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChildB"
        component={ChildB}
        options={{
          tabBarLabel: 'Child B',
          tabBarIcon: ({size}) => (
            <Image
              source={require('../assets/icons/childB.png')}
              style={{width: size, height: size}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
