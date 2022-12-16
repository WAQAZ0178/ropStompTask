import ImagePicker from 'react-native-image-crop-picker';

const selectPhoto = async () => {
  try {
    let res = await ImagePicker.openPicker({
      width: 300,
      height: 400,
    });
    if (res.didCancel) {
      console.log('cancel');
    } else {
      return res;
    }
  } catch (error) {}
};

const takePhoto = async () => {
  ImagePicker.openCamera({
    width: 300,
    height: 400,
  }).then(image => {
    return image;
  });
};
const createFile = obj => {
  let content = obj.path;
  const file = {
    uri: content,
    name: content?.slice(content?.lastIndexOf('/') + 1),
    type: obj?.mime,
  };
  return file;
};
export const cameraServices = {
  takePhoto,
  selectPhoto,
  createFile,
};
