import React from 'react';
import {Text, View} from 'react-native';

const ChildA = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>I am child A</Text>
    </View>
  );
};

export default ChildA;
