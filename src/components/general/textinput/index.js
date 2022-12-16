import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../global/utilities';
// import {colors} from '../../../global/utilities';
import styles from './styles';
const TextComponent = ({
  placeholder,
  onChangeText,
  value,
  iconName,
  iconType,
  iconColor,
  iconSize,
  error,
  keyboardType,
  secureTextEntry,
  onPress,
  onchange,
  PassName,
  PassType,
  right = false,
  editable = true,
  onBlur,
  marginTop = 0,
  ...otherProps
}) => {
  return (
    <View
      style={{
        ...styles.mainView,
        marginTop: marginTop ? responsiveHeight(marginTop) : null,
      }}>
      <View style={styles.View}>
        <TextInput
          editable={editable}
          placeholder={placeholder}
          style={{...styles.TxtInput, color: colors.text}}
          onChange={onchange}
          onBlur={onBlur}
          onChangeText={onChangeText}
          placeholderTextColor={colors.gray}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          value={value}
          autoCapitalize="none"
          {...otherProps}
        />
        {iconName && right && (
          <TouchableOpacity onPress={onPress}>
            <Icon
              name={iconName}
              type={iconType}
              color={iconColor ? iconColor : colors.lightGray}
              size={iconSize ? iconSize : responsiveFontSize(2.5)}
            />
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default TextComponent;
