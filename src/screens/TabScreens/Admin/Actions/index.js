import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Actions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>يا باشا بقولك مافيش منيو يبقى اكيد مينفعش تطلب!!</Text>
      </View>
    );
  }
}

Actions.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
