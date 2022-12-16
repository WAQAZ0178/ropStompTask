import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {colors} from './src/global/utilities';
import {Splash, Login, Signup} from './src/screens/auth';
import {persistor, store} from './src/store';
import {Provider} from 'react-redux';
import App from './src/navigation/index';
import {PersistGate} from 'redux-persist/integration/react';
const Apps = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Apps;
