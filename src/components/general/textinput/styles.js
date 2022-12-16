import {Platform, StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../global/utilities';

const styles = StyleSheet.create({
  mainView: {
    alignSelf: 'center',
    marginVertical: responsiveHeight(1),
  },
  innerView: {
    paddingHorizontal: responsiveHeight(1),
    alignItems: 'center',
  },
  TxtInput: {
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.7),
    width: responsiveWidth(78),
    paddingLeft: responsiveWidth(4),
    marginLeft:
      Platform.OS === 'android' ? responsiveWidth(2) : responsiveWidth(4),
  },
  inputView: {},
  View: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(7),
    height: responsiveHeight(7),
    backgroundColor: colors.card,
  },
  iconStyles: {
    paddingRight: responsiveWidth(3),
  },
  error: {
    color: 'rgba(227, 1, 1, 1)',
    fontSize: responsiveFontSize(1.6),
    fontFamily: fontFamily.appTextRegular,
    marginLeft: responsiveWidth(3),
    paddingTop: responsiveHeight(1),
    maxWidth: responsiveWidth(88),
  },
  image: {
    resizeMode: 'contain',
    height: responsiveHeight(2.5),
    width: responsiveWidth(4),
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(-1.5),
  },
});
export default styles;
