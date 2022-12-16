import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../global/utilities';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  gardienContainer: {
    flex: 1,
  },
  logoImage: {
    height: responsiveHeight(50),
    width: responsiveWidth(50),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default styles;
