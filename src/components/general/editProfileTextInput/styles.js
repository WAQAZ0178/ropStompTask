import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../global/utilities';
const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(7),
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
    paddingHorizontal: responsiveWidth(2),
    borderRadius: responsiveWidth(2),
  },
  labelText: {
    color: colors.black,
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.appTextBold,
    paddingVertical: responsiveHeight(1),
    paddingLeft: responsiveWidth(2),
  },
  input: {
    height: responsiveHeight(7),
    width: responsiveWidth(70),
    paddingLeft: responsiveWidth(2),
    paddingRight: responsiveWidth(2),
    color: colors.placeHolder,
    fontSize: responsiveFontSize(1.8),
  },
  error: {
    color: 'rgba(227, 1, 1, 1)',
    fontSize: responsiveFontSize(1.6),
    fontFamily: fontFamily.appTextRegular,
    marginLeft: responsiveWidth(3),
    paddingTop: responsiveHeight(1),
    maxWidth: responsiveWidth(88),
  },
});
export default styles;
