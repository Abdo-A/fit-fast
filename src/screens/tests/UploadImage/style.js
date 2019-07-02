import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/base';

const styles = StyleSheet.create({
  uploadButton: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    marginBottom: 10,
    marginTop: 10
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    borderRadius: 100,
    width: 200,
    height: 200
  },
  label: {
    color: colors.gray02
  },
  sizeError: {
    color: colors.red.lighten(0.5),
    fontSize: 14,
    marginBottom: 10,
    marginTop: 3
  }
});

export default styles;
