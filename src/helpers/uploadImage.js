import { RNS3 } from 'react-native-aws3';

import keys from '../keys/keys.ignore';

// This article explains the way I use to upload images:
// https://reactnative.sataiva.com/reactnative-intro/reactnative-expo-upload-image-in-amazons3/

const uploadImage = (avatar, folder = 'general', identifier = 'example') => {
  // 'folder' can be 'meals-pictures'
  // 'identifier' can be 'spaghetti meal'

  const uriParts = avatar.split('.');
  const fileType = uriParts[uriParts.length - 1];

  const file = {
    uri: avatar,
    name: avatar.split('/').pop(),
    type: `image/${fileType}`
  };

  const options = {
    keyPrefix: `${folder}/${identifier}/`,
    bucket: keys.aws.bucketName,
    region: keys.aws.bucketRegion,
    accessKey: keys.aws.accessKey,
    secretKey: keys.aws.secretKey,
    successActionStatus: 201
  };

  return new Promise((resolve, reject) => {
    RNS3.put(file, options)
      .then((response) => {
        if (response.status !== 201) reject('Failed to upload image to S3');
        else {
          resolve(response.body.postResponse.location);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default uploadImage;
