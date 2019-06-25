import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Otlob extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>يا باشا بقولك مافيش منيو يبقى اكيد مينفعش تطلب!!</Text>
      </View>
    );
  }
}

Otlob.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
