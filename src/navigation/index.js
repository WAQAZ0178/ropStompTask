import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './auth';
import App from './app';

const AppStack = createNativeStackNavigator();
const Apps = props => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent={false}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <AppStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Auth}>
        <AppStack.Screen name="Auth" component={Auth} />
        <AppStack.Screen name="App" component={App} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default Apps;
