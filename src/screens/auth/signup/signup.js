import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextInput from '../../../components/general/textinput';
import {appImages} from '../../../global/utilities/assets';
import styles from './styles';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Button from '../../../components/general/appButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFormik} from 'formik';
import {signupValidation} from '../../../services/validationServices';
import {StatusBar} from 'react-native';
import {colors} from '../../../global/utilities';
import {connect} from 'react-redux';
import {ACTIONS} from '../../../store/actions';
import toastServices from '../../../services/toastServices';
import moment from 'moment/moment';

const Signup = props => {
  const {navigation, users, setUsers} = props;
  const [loading, setLoading] = useState(false);
  const [securePasswords, setsecurePasswords] = useState({
    password: true,
    confirmPassword: true,
  });
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validate: signupValidation,
      onSubmit: () => {},
    });

  //? =================================== managing some validation here ==========================================
  const onSubmit = async () => {
    if (isValid && Object.keys(touched).length > 0) {
      try {
        signupUser();
      } catch (error) {}
    } else {
      toastServices.showToast('Please enter email & password');
    }
  };

  //? =====================================first we check if email is not taken then we create an account for user =====================================
  const signupUser = async () => {
    setLoading(true);
    let userList = [...users];
    let isExist = userList.find(o => o.email == values.email);
    if (isExist) {
      toastServices.showToast('Email already exist');
    } else {
      let obj = {
        email: values.email,
        password: values.password,
        id: moment().format('YYYYMMDDHHmmss'),
      };
      userList.push(obj);
      await setUsers(userList);
      toastServices.showToast(
        'Account created successfull Please login to continue',
      );
    }

    setLoading(false);
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
          <Text style={styles.heading}>Signup by email</Text>
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
            secureTextEntry={securePasswords.password}
            right={true}
            iconColor={colors.placeHolderLight}
            iconType={'entypo'}
            iconSize={responsiveFontSize(2)}
            iconName={securePasswords.password ? 'eye-with-line' : 'eye'}
            onPress={() =>
              setsecurePasswords({
                ...securePasswords,
                password: !securePasswords.password,
              })
            }
          />
          <TextInput
            value={values.confirmPassword}
            onChangeText={val => setFieldValue('confirmPassword', val)}
            onBlur={() => setFieldTouched('confirmPassword', true)}
            error={
              errors?.confirmPassword &&
              touched.confirmPassword &&
              errors?.confirmPassword
            }
            placeholder="Confirm Password"
            secureTextEntry={securePasswords.confirmPassword}
            right={true}
            iconColor={colors.placeHolderLight}
            iconType={'entypo'}
            iconSize={responsiveFontSize(2)}
            iconName={securePasswords.confirmPassword ? 'eye-with-line' : 'eye'}
            onPress={() =>
              setsecurePasswords({
                ...securePasswords,
                confirmPassword: !securePasswords.confirmPassword,
              })
            }
          />

          <Button
            onPress={() => onSubmit()}
            disabled={loading}
            loading={loading}
            titleColor={'black'}
            marginTop={4}
            title={'Sign Up'}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.bottomText}>
              Already have an account ? Login
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </KeyboardAwareScrollView>
    </View>
  );
};
const mapStateToProps = store => {
  return {
    users: store.state.users,
  };
};
const mapDispatchToProps = {
  setUsers: payload => ACTIONS.setUsers(payload),
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
