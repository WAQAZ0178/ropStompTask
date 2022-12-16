import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {colors} from '../../../global/utilities';
import styles from './styles';
const AppButton = ({
  onPress,
  title,
  disabled,
  loading = false,
  marginTop,
  backgroundColor = colors.background,
  titleColor = colors.black,
  loaderColor = 'black',
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: backgroundColor,
        marginTop: marginTop ? responsiveHeight(marginTop) : null,
        ...otherProps,
      }}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size="small" color={loaderColor} />
      ) : (
        <Text style={{...styles.title, color: titleColor}}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
export default AppButton;
