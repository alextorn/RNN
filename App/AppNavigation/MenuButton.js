/* @flow */
import * as React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text
} from 'react-native';

type Props = {|
  onPress: () => void
|};

const MenuButton = ({ onPress }: Props) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={onPress}
    style={styles.container}>
    <Image
      resizeMode='contain'
      style={styles.menuIcon}
    />
    <Text style={styles.menuText}>Menu</Text>
  </TouchableOpacity>
);

const $colorLink = '#1f242b';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 15,
    alignItems: 'center'
  },
  menuText: {
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 5,
    color: $colorLink
  },
  menuIcon: {
    width: 13,
    height: 13
  }
});
export default MenuButton;
