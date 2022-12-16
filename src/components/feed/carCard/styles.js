import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../global/utilities';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
    marginBottom: responsiveHeight(1),
    marginTop: responsiveHeight(1),
    marginHorizontal: responsiveWidth(0.5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    paddingBottom: responsiveHeight(0.5),
  },

  image: {
    width: responsiveWidth(89.5),
    alignSelf: 'center',
    height: responsiveWidth(40),
    borderRadius: responsiveWidth(3),
    resizeMode: 'cover',
  },

  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(2),
    marginTop: responsiveHeight(1),
  },
  priceContainer: {
    width: responsiveWidth(15),
    backgroundColor: colors.white,
    height: responsiveHeight(4),
    borderRadius: responsiveWidth(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceText: {
    color: colors.black,
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.appTextRegular,
  },
  dollarSign: {
    color: '#00AEEF',
  },
  likeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    borderRadius: responsiveWidth(9 / 2),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  likedBackground: {
    backgroundColor: '#00AEEF',
  },

  rattingContainer: {
    width: responsiveWidth(20),
    borderRadius: responsiveWidth(5),
    backgroundColor: colors.white,
    height: responsiveHeight(4),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: responsiveWidth(2.5),
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: responsiveWidth(3),
    marginTop: responsiveHeight(1),
  },
  nameText: {
    color: colors.white,
    fontSize: responsiveFontSize(2.5),
    fontFamily: fontFamily.appTextBold,
    paddingRight: responsiveWidth(2),
  },

  // ?  below code is for card details like menu model edit and delete button
  bottomContainer: {
    height: responsiveHeight(8),
    marginTop: responsiveHeight(11),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(2),
  },
  modelMakerContainer: {
    width: responsiveWidth(50),
  },
  actionButtonContainer: {
    flexDirection: 'row',
    width: responsiveWidth(25),
    justifyContent: 'space-between',
  },
  deleteButton: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: responsiveWidth(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.google,
  },
  editButton: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: responsiveWidth(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  makerText: {
    color: colors.black,
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.appTextBold,
    paddingRight: responsiveWidth(2),
  },
  modelText: {
    color: colors.black,
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.appTextBold,
    paddingRight: responsiveWidth(2),
  },
});
export default styles;
