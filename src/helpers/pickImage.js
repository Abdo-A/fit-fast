import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';

import QuickHint from '../components/common/QuickHint/QuickHint';

getFileSize = async (fileUri) => {
  const fileInfo = await FileSystem.getInfoAsync(fileUri);
  return fileInfo.size;
};

const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({});

  const { uri } = result;
  let avatar = '';

  return new Promise((resolve, reject) => {
    if (!result.cancelled) {
      this.getFileSize(uri).then((size) => {
        if (size > 5000000) {
          QuickHint("Image can't be bigger than 5 MBs");
        } else {
          avatar = uri;
        }
        resolve(avatar);
      });
    }
  });
};

export default pickImage;
