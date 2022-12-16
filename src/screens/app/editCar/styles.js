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

  // ?   take picker styles
  carPictureContainer: {
    marginTop: responsiveHeight(2),

    backgroundColor: colors.cloud,
    borderRadius: responsiveWidth(3),

    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  carImage: {
    width: responsiveWidth(90),
    height: responsiveWidth(40),
    borderRadius: responsiveWidth(3),
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cameraButton: {
    position: 'absolute',
  },
  heading: {
    color: colors.placeHolderLight,
    textAlign: 'left',
    marginTop: responsiveHeight(2),
    paddingLeft: responsiveWidth(2),
    paddingRight: responsiveWidth(15),
    paddingBottom: responsiveHeight(1),
  },
});

export default styles;
