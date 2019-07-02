import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class Elmenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>لسه مفيش منيو عشان شهاب مقاليش عالسندوتشات</Text>
      </View>
    );
  }
}

Elmenu.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
