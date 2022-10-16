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
import {NativeBaseProvider} from 'native-base';
import {LinearGradient} from 'react-native-svg';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignupScreen';
import VerifyCodeScreen from './src/screens/VerifyCodeScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

const App = () => {
  return (
    <NativeBaseProvider config={config}>
      <NewPasswordScreen />
    </NativeBaseProvider>
  );
};
export default App;
