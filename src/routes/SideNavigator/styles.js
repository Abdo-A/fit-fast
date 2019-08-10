import { StyleSheet } from 'react-native';
import { colors } from '../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: colors.black,
    height: '100%'
  },
  menuItemContainer: {
    marginBottom: 10,
    backgroundColor: 'transparent'
  },
  menuItemText: {
    color: colors.white
  }
});

export default styles;
