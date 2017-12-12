/* @flow */
import * as React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {|
  children?: React.Element<*>,
  onPress: () => void,
  style?: StyleObj
|};

const Link = ({ children, onPress, style }: Props) => (
  <Text
    style={[styles.link, style]}
    onPress={onPress}>
    {children}
  </Text>
);

const $colorLink = '#1f242b';
const styles = StyleSheet.create({
  link: {
    fontSize: 18,
    color: $colorLink,
    textDecorationLine: 'underline'
  }
});
export default Link;
