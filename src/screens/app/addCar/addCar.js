import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {useFormik} from 'formik';
import TextInput from '../../../components/general/editProfileTextInput/editProfileTextInput';
import {vehicleValidation} from '../../../services/validationServices';
import AppButton from '../../../components/general/appButton';
import styles from './styles';
import {colors} from '../../../global/utilities';
import {cameraServices} from '../../../services/cameraServices';
import {ACTIONS} from '../../../store/actions';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import toastServices from '../../../services/toastServices';
import {Icon} from 'react-native-elements';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import moment from 'moment';
import Header from '../../../components/general/header/header';
const AddCar = props => {
  const {navigation, cars, setCars} = props;
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [image, setimage] = useState(
    'https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2022/collections/dm/21_FRD_MST_wdmp_200510_02313a.tif?croppathe=1_3x2&wid=900',
  );
  const initialValues = {
    model: '',
    maker: '',
    name: '',
    price: '',
  };

  //? managing some validation here
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validate: vehicleValidation,
      onSubmit: () => {},
    });

  //? here we are check the validation
  const onSubmit = async () => {
    if (isValid && Object.keys(touched).length > 0) {
      try {
        if (image) {
          await addNewCar();
        } else {
          toastServices.showToast('Please select car image');
        }
      } catch (error) {}
    } else {
      toastServices.showToast('Please enter credentials');
    }
  };

  //? here we select picture from galler and set it into state
  const selectPhoto = async () => {
    setImageLoading(true);
    let res = await cameraServices.selectPhoto();
    if (res) {
      setimage(res?.path);
    }
    setImageLoading(false);
  };

  // ? here we add  the car object it reduc and assign new id to it
  const addNewCar = async () => {
    setLoading(true);
    let carList = [...cars];
    let obj = {
      price: values.price,
      maker: values.maker,
      name: values.name,
      image: image,
      model: values.model,
      id: moment().format('YYYY-MM-DD-HH-mm-ss'),
    };
    carList.push(obj);
    setCars(carList);
    toastServices.showToast('New car added !');
    setLoading(false);
    setFieldValue('name', '');
    setFieldValue('price', '');
    setFieldValue('model', '');
    setFieldValue('maker', '');
  };

  return (
    <View style={styles.container}>
      <Header
        leftIconName="arrow-back"
        leftIconType="materialicon"
        rightIconName={true}
        title="Add Car"
        onPressBack={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.carPictureContainer}>
          <Image source={{uri: image}} style={styles.carImage} />
          <TouchableOpacity
            onPress={() => selectPhoto()}
            style={styles.cameraButton}>
            {imageLoading ? (
              <ActivityIndicator size={'small'} color={colors.primary} />
            ) : (
              <Icon
                name="camera"
                type="entypo"
                color={colors.placeHolder}
                size={responsiveFontSize(3)}
              />
            )}
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>Please enter the your car info</Text>
        <TextInput
          value={values.name}
          onChangeText={val => setFieldValue('name', val)}
          onBlur={() => setFieldTouched('name', true)}
          error={errors?.name && touched.name && errors?.name}
          keyboardType={'default'}
          label={'Vehicle Name'}
          placeHolderColor={colors.placeHolderLight}
          placeHolder="Enter vehicle name"
        />
        <TextInput
          value={values.maker}
          onChangeText={val => setFieldValue('maker', val)}
          onBlur={() => setFieldTouched('maker', true)}
          error={errors?.maker && touched.maker && errors?.maker}
          keyboardType={'default'}
          label={'Vehicle Maker Name'}
          placeHolderColor={colors.placeHolderLight}
          placeHolder="Enter vehicle maker name"
        />
        <TextInput
          value={values.price}
          onChangeText={val => setFieldValue('price', val)}
          onBlur={() => setFieldTouched('price', true)}
          error={errors?.price && touched.price && errors?.price}
          keyboardType={'number-pad'}
          label={'Vehicle Price'}
          placeHolderColor={colors.placeHolderLight}
          placeHolder="Enter vehicle price"
        />
        <TextInput
          value={values.model}
          onChangeText={val => setFieldValue('model', val)}
          onBlur={() => setFieldTouched('model', true)}
          error={errors?.model && touched.model && errors?.model}
          keyboardType={'number-pad'}
          label={'Vehicle Model No'}
          placeHolderColor={colors.placeHolderLight}
          placeHolder="Enter vehicle model no"
        />

        <AppButton
          marginTop={5}
          title={'Add Car'}
          loading={loading}
          disabled={loading}
          onPress={() => onSubmit()}
          titleColor="white"
          loaderColor="white"
          backgroundColor={colors.primary}
        />
      </KeyboardAwareScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddCar);
