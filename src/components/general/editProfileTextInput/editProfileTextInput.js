import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../global/utilities';
import {Icon} from 'react-native-elements';

const EditProfileTextInput = ({
  placeHolder,
  placeHolderColor = 'white',
  value,
  onChangeText,
  keyboardType = 'default',
  label,
  editable,
  error,
  onBlur,
}) => {
  const textColor = {
    color: colors.text,
  };
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.innerContainer}>
        <TextInput
          value={value}
          onBlur={onBlur}
          onChangeText={onChangeText}
          editable={editable}
          keyboardType={keyboardType}
          placeholderTextColor={placeHolderColor}
          placeholder={placeHolder}
          style={[styles.input, textColor]}
        />
        <Icon
          name={'edit'}
          type={'materialicons'}
          color={colors.lightGray}
          size={responsiveFontSize(3)}
          tvParallaxProperties={{}}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default EditProfileTextInput;
