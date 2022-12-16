import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import CarCard from '../../../components/feed/carCard/carCard';
import styles from './styles';
import {ACTIONS} from '../../../store/actions';
import {connect} from 'react-redux';
import Header from '../../../components/general/header/header';
import {Icon} from 'react-native-elements';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import EmptyCard from '../../../components/general/emptyCard/emptyCard';
const Home = props => {
  const {navigation, cars, setCars} = props;
  const [allCars, setallCars] = useState(cars);
  useEffect(() => {
    setallCars(cars);
  }, [props]);

  //?============================ display car components ============================
  const renderCar = (item, index) => {
    return (
      <CarCard
        price={item?.price}
        maker={item?.maker}
        name={item?.name}
        image={item?.image}
        model={item?.model}
        isLiked={item?.isLiked}
        onPressLike={() => likeUnlikeCar(item)}
        onPressDelete={() => removeCarFromList(item)}
        onPressEdit={() => navigation.navigate('EditCar', {data: item})}
        on
      />
    );
  };

  //?============================ here we will remove selected car from list on the basis of car id  ============================
  const removeCarFromList = async item => {
    let list = [...allCars];
    list = list.filter((e, i) => {
      return e.id != item.id;
    });
    setallCars(list);
    await setCars(list);
  };

  //?============================ here we are going to like and unlike the car on the basis of id  ============================
  const likeUnlikeCar = async item => {
    let list = [...allCars];
    list.map((e, i) => {
      if (e.id == item?.id) {
        e.isLiked = !e.isLiked;
      }
    });
    setallCars(list);
    await setCars(list);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor={'white'}
      />
      {/* header  component  */}
      <Header rightIconName={true} title="Car Showroom" />

      {/*  here is define flat list which containes cars info  */}
      <View style={styles.carsListContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Featured Cars</Text>
        </View>

        <FlatList
          data={allCars}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => renderCar(item, index)}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={() => {
            return <EmptyCard marginTop={10} />;
          }}
        />
      </View>

      {/*  here is add button on click of this button we will navigate user to add card screen   */}
      <TouchableOpacity
        onPress={() => navigation.navigate('AddCar')}
        style={styles.addButton}>
        <Icon
          name="plus"
          type="entypo"
          color={'white'}
          size={responsiveFontSize(3.5)}
        />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = store => {
  return {
    cars: store.state.cars,
  };
};
const mapDispatchToProps = {
  setCars: payload => ACTIONS.setCars(payload),
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
