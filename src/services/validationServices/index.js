import moment from 'moment/moment';

const validateEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
export const vehicleValidation = values => {
  const errorList = {};
  if (!values.name) {
    errorList.name = 'Vehicle name is required';
  } else if (values.name.length < 2) {
    errorList.name = 'Vehicle should have atleast two alphabets';
  }
  if (!values.maker) {
    errorList.maker = 'Vehicle maker name is required';
  } else if (values.maker.length < 2) {
    errorList.maker = 'Vehicle maker name should have atleast two alphabets';
  } else if (/\d/.test(values.surName)) {
    errorList.maker = 'Vehicle maker name should not contain any numbers';
  }

  if (!values.price) {
    errorList.price = 'Vehicle price is required';
  } else if (values.price < 100) {
    errorList.price = 'Vehicle minimum price should be $100 ';
  }
  if (!values.model) {
    errorList.model = 'Vehicle model is required';
  } else if (values.model > moment().format('YYYY')) {
    errorList.model = 'Vehicle model should be less / equal to current year';
  }

  return errorList;
};

export const loginValidation = values => {
  const errorList = {};
  if (!values.email) {
    errorList.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errorList.email = 'Email is not valid';
  }
  if (!values.password) {
    errorList.password = 'password is required';
  } else if (values.password.length < 8) {
    errorList.password = 'password  should have atleast eight alphabets';
  }
  return errorList;
};
export const signupValidation = values => {
  const errorList = {};

  if (!values.email) {
    errorList.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errorList.email = 'Email is not valid';
  }
  if (!values.password) {
    errorList.password = 'password is required';
  } else if (values.password.length < 8) {
    errorList.password = 'password  should have atleast eight alphabets';
  }
  if (!values.confirmPassword) {
    errorList.confirmPassword = 'confirm password is required';
  } else if (values.confirmPassword.length < 8) {
    errorList.confirmPassword = 'password  should have atleast eight alphabets';
  } else if (values.password !== values.confirmPassword) {
    errorList.confirmPassword = 'password & confirm password not match';
  }
  return errorList;
};
