//import liraries
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../global/utilities';
import TextInput from '../../../components/general/textinput';
import {appImages} from '../../../global/utilities/assets';
import styles from './styles';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Button from '../../../components/general/appButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {loginValidation} from '../../../services/validationServices';
import {StatusBar} from 'react-native';
import storageServices from '../../../services/storageServices';
import {connect} from 'react-redux';
import {ACTIONS} from '../../../store/actions';
import {useFormik} from 'formik';
import toastServices from '../../../services/toastServices';

const Login = props => {
  const {setProfileInfo, profileInfo, navigation, users, setUsers} = props;
  const [loading, setLoading] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);
  const initialValues = {
    email: 'waqasahmed0178@gmail.com',
    password: '1234567',
  };
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validate: loginValidation,
      onSubmit: () => {},
    });

  //? ============================ managing some validation here ===========================================
  const onSubmit = async () => {
    if (isValid && Object.keys(touched).length > 0) {
      try {
        await loginUser();
      } catch (error) {}
    } else {
      toastServices.showToast('Please enter email & password');
    }
  };

  //? =====================================first we check user info if its exist then allow user to hoome screen =====================================
  const loginUser = async () => {
    setLoading(true);
    let userList = [...users];
    let isExist = userList.find(
      o => o.email == values.email && o.password == values.password,
    );
    if (isExist) {
      let obj = {
        email: values.email,
        password: values.password,
      };
      await addinfoInStore(obj);
      navigation.navigate('App');
    } else {
      toastServices.showToast('Email not exist');
    }

    setLoading(false);
  };

  //? =====================================add user info into redux =====================================
  const addinfoInStore = async profileInfo => {
    await setProfileInfo(profileInfo);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image}
          source={appImages.splasgLogo}
          resizeMode={'cover'}
        />
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0}}
          colors={[colors.LinearGradientcolor1, colors.LinearGradientcolor2]}
          style={styles.bottomContainer}>
          <Text style={styles.heading}>Login by email</Text>
          <TextInput
            value={values.email}
            onChangeText={val => setFieldValue('email', val)}
            onBlur={() => setFieldTouched('email', true)}
            error={errors?.email && touched.email && errors?.email}
            placeholder="E-mail"
            keyboardType={'email-address'}
            marginTop={4}
          />
          <TextInput
            value={values.password}
            onChangeText={val => setFieldValue('password', val)}
            onBlur={() => setFieldTouched('password', true)}
            error={errors?.password && touched.password && errors?.password}
            placeholder="Password"
            secureTextEntry={securePassword}
            right={true}
            iconColor={colors.placeHolderLight}
            iconName={securePassword ? 'eye-with-line' : 'eye'}
            iconType={'entypo'}
            iconSize={responsiveFontSize(2)}
            onPress={() => setSecurePassword(!securePassword)}
          />

          <Button
            onPress={() => onSubmit()}
            disabled={loading}
            loading={loading}
            marginTop={4}
            title={'Login'}
            loaderColor="black"
          />
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.bottomText}>New here? Create new account</Text>
          </TouchableOpacity>
        </LinearGradient>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = store => {
  return {
    profileInfo: store.state.profileInfo,
    users: store.state.users,
  };
};
const mapDispatchToProps = {
  setProfileInfo: payload => ACTIONS.setProfileInfo(payload),
  setUsers: payload => ACTIONS.setUsers(payload),
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
