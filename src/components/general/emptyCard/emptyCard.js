//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const EmptyCard = ({marginTop = 2}) => {
  return (
    <View
      style={{
        ...styles.container,
        height: responsiveHeight(marginTop),
      }}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    height: responsiveHeight(5),
  },
});

export default EmptyCard;
