import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login, Splash, Signup} from '../../screens/auth';
const AuthStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false, headerMode: 'screen'}}
      initialRouteName="Splash">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Splash" component={Splash} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};
export default Auth;
