/* @flow */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class CarDetails extends Component {
  static navigationOptions = {
    drawerLabel: 'Car details',
    drawerIcon: () => (
      <Image
        source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1`}}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Car Details</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
