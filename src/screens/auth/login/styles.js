import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../../global/utilities';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    height: responsiveHeight(25),
    width: responsiveWidth(50),
    alignSelf: 'center',
    marginTop: responsiveHeight(10),
    marginVertical: responsiveHeight(5),
  },
  bottomContainer: {
    bottom: responsiveHeight(0),
    alignSelf: 'flex-end',
    zIndex: 5,
    width: responsiveWidth(100),
    height: responsiveHeight(65),
    paddingHorizontal: responsiveWidth(5),
    borderTopLeftRadius: responsiveWidth(8),
    borderTopRightRadius: responsiveWidth(8),
    // marginTop: responsiveHeight(-4),
  },
  heading: {
    textAlign: 'left',
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(4),
    color: colors.white,
    paddingTop: responsiveHeight(5),
  },
  subHeading: {
    textAlign: 'left',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    color: colors.white,
    paddingTop: responsiveHeight(3),
  },
  forgetText: {
    textAlign: 'left',
    paddingLeft: responsiveWidth(2),
    paddingTop: responsiveHeight(1),
  },
  bottomText: {
    textAlign: 'center',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    color: colors.white,
    paddingTop: responsiveHeight(2),
  },
});

export default styles;
