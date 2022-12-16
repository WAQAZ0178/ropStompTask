//import liraries
import React, {memo} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {colors} from '../../../global/utilities';
import styles from './styles';
const CarCard = memo(function FeaturedRestaurentCard({
  image,
  name,
  price,
  model,
  maker,
  onPressLike,
  onPressDelete,
  onPressEdit,
  isLiked,
}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        progressiveRenderingEnabled={true}
        imageStyle={styles.image}
        source={{uri: image}}
        style={styles.fullSizeImage}>
        <View style={styles.topContainer}>
          <View style={styles.rattingContainer}>
            <Text style={styles.priceText}>
              <Text style={styles.dollarSign}>$ {''}</Text>
              {price}
            </Text>
          </View>
          <TouchableOpacity style={styles.likeButton} onPress={onPressLike}>
            <Icon
              name="heart"
              type="entypo"
              color={isLiked ? colors.primary : colors.white}
              size={responsiveFontSize(3)}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.modelMakerContainer}>
          <Text style={styles.makerText}>Maker : {maker}</Text>
          <Text style={styles.modelText}>Model : {model}</Text>
        </View>
        <View style={styles.actionButtonContainer}>
          <TouchableOpacity onPress={onPressEdit} style={styles.editButton}>
            <Icon
              name="edit"
              type="antdesign"
              color={'white'}
              size={responsiveFontSize(3)}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressDelete} style={styles.deleteButton}>
            <Icon
              name="trash"
              type="entypo"
              color={'white'}
              size={responsiveFontSize(3)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

export default CarCard;
