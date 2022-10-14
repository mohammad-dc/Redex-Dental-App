/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
} from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';
import SplashScreen from './src/screens/SplashScreen';
import {LinearGradient} from 'react-native-svg';
import LangScreen from './src/screens/LangScreen';
import UserRoleScreen from './src/screens/UserRoleScreen';

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

const App = () => {
  return (
    <NativeBaseProvider config={config}>
      <UserRoleScreen />
    </NativeBaseProvider>
  );
};
export default App;
