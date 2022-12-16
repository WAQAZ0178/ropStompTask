import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../global/utilities';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  // ? top heading container styles is define below
  headingText: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: fontFamily.appTextBold,
    color: colors.black,
    paddingLeft: responsiveWidth(2),
    paddingBottom: responsiveHeight(0.5),
  },
  headingContainer: {
    marginTop: responsiveHeight(2),
    width: responsiveWidth(90),
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  //? flat list of all cars list  style
  carsListContainer: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5),
  },

  // ? add button to add new car
  addButton: {
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderRadius: responsiveWidth(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    position: 'absolute',
    zIndex: 10,
    bottom: responsiveWidth(13),
    right: responsiveWidth(8),
  },
});
export default styles;
