import Toast from 'react-native-simple-toast';
const showToast = msg => {
  Toast.showWithGravity(msg, Toast.SHORT, Toast.BOTTOM);
};
export default toastService = {
  showToast,
};
