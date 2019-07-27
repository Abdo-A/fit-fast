import { StyleSheet } from 'react-native';
import { fontSizes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  noItemsTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noItemsText: {
    fontWeight: 'bold',
    fontSize: fontSizes.md
  }
});

export default styles;
