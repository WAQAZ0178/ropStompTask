//import liraries
import React, {useEffect} from 'react';
import {Image, StatusBar, View} from 'react-native';
import styles from './styles';
import {appImages} from '../../../global/utilities/assets';
import LinearGradient from 'react-native-linear-gradient';

import {colors} from '../../../global/utilities';

const Splash = ({navigation}) => {
  useEffect(() => {
    Loading();
  }, []);

  const Loading = async () => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="white"
        backgroundColor={'transparent'}
      />
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0}}
        colors={[colors.LinearGradientcolor1, colors.LinearGradientcolor2]}
        style={styles.container}>
        <Image
          source={appImages.splasgLogo}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </LinearGradient>
    </View>
  );
};

export default Splash;
