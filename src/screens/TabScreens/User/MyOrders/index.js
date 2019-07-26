import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Talabaty extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>🙃 🙃 🙃</Text>
      </View>
    );
  }
}

Talabaty.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
