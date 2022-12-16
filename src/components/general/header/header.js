//import liraries
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../global/utilities';
import styles from './styles';
const Header = ({
  marginTop = 0,
  onPressBack,
  title,
  rightButton = false,
  rightIconName,
  onPressRight,
  leftIconName = 'menu',
  leftIconType = 'entypo',
}) => {
  return (
    <View
      style={{
        ...styles.container,
        marginTop: responsiveHeight(marginTop),
      }}>
      <TouchableOpacity onPress={onPressBack}>
        <Icon
          type={leftIconType}
          name={leftIconName}
          size={responsiveFontSize(4)}
          color={colors.primary}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={{...styles.title, color: colors.text}}>{title}</Text>
      </View>
      {rightButton && rightIconName ? (
        <TouchableOpacity onPress={onPressRight}>
          <Icon
            type="material-community"
            name="chat-processing-outline"
            size={responsiveFontSize(3.5)}
            color={colors.text}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.empty} />
      )}
    </View>
  );
};

export default Header;
