import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../global/utilities';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: responsiveWidth(90),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  logo: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    resizeMode: 'cover',
  },
  empty: {
    width: responsiveWidth(10),
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2.2),
    color: colors.black,
  },
  subTitle: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    color: colors.gray,
  },
});

//make this component available to the app
export default styles;
