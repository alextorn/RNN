/* @flow */

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigation from './App/AppNavigation';

const App = () => (
  <View style={styles.container}>
    <AppNavigation />
  </View>
);
export default App;

const $colorWhite = '#fff';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $colorWhite
  }
});
