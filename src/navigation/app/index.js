import {Platform, StyleSheet, Text, View} from 'react-native';
import {Home, AddCar, EditCar} from '../../screens/app';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainApp = createNativeStackNavigator();
const App = () => {
  return (
    <MainApp.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      defaultScreenOptions={{gestureEnabled: false}}
      initialRouteName={'Home'}>
      <MainApp.Screen name={'Home'} component={Home} />
      <MainApp.Screen name={'AddCar'} component={AddCar} />
      <MainApp.Screen name={'EditCar'} component={EditCar} />
    </MainApp.Navigator>
  );
};
export default App;
