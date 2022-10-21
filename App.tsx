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
import SearchScreen from './src/screens/Patient/SearchScreen';
import DoctorProfileScreen from './src/screens/Patient/DoctorProfileScreen';
import AccountScreen from './src/screens/AccountScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

const App = () => {
  return (
    <NativeBaseProvider config={config}>
      <NotificationsScreen />
    </NativeBaseProvider>
  );
};
export default App;
