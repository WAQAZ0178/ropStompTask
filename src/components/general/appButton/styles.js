import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {fontFamily} from '../../../global/utilities';

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(6),
    justifyContent: 'center',
    width: responsiveWidth(90),
    height: responsiveHeight(7),
  },
  title: {
    fontSize: responsiveFontSize(2.1),
    fontFamily: fontFamily.appTextBold,
  },
});

export default styles;
