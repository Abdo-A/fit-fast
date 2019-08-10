import { Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { sizes, colors } from '../../../../assets/styles/base';

const Actions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Create New Meal"
        type="solid"
        containerStyle={{ width: sizes.mainContentWidth }}
        onPress={() => navigation.navigate('CreateNewMeal')}
      />
    </View>
  );
};

Actions.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Actions;
