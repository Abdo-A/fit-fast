import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Orders extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>No Orders Yet</Text>
      </View>
    );
  }
}

Orders.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
