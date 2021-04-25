import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RootTabNavigator from './src/navigation/TabNavigatorRoot';
const App: () => Node = () => {
  return <RootTabNavigator />;
};

export default App;
