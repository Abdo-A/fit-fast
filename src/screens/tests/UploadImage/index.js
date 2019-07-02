import { Text, Image, View, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import React, { Component } from 'react';

import { ensureCameraRollPermission } from '../../../helpers/ensurePermissions';
import styles from './style';

export default class UploadImage extends Component {
  state = {
    avatar: '',
    imageOversize: false
  };

  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({});

    const { uri } = result;

    if (!result.cancelled) {
      this.getFileSize(uri).then((size) => {
        if (size > 5000000) this.setState({ avatar: '', imageOversize: true });
        else {
          this.setState({ avatar: uri, imageOversize: false });
        }
      });
    }
  };

  getFileSize = async (fileUri) => {
    const fileInfo = await FileSystem.getInfoAsync(fileUri);
    return fileInfo.size;
  };

  render() {
    const { avatar, imageOversize } = this.state;
    return (
      <View>
        <Button
          style={styles.uploadButton}
          onPress={() => ensureCameraRollPermission(this.pickImage)}
          title="Pick from Gallery"
        />
        <View style={styles.imageView}>
          {avatar ? (
            <Image style={styles.image} source={{ uri: avatar }} />
          ) : null}
          {imageOversize && (
            <Text style={styles.sizeError}>
              Image is bigger than 5 MB, please choose another image
            </Text>
          )}
        </View>
      </View>
    );
  }
}
