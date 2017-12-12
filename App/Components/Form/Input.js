/* @flow */

import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

type Props = {
  name: string,
  value: string,
  placeholder: string,
  secureTextEntry?: boolean,
  autoCapitalize: string,
  autoCorrect: boolean,
  isValid: ?boolean,
  message: ?string,
  keyboardType?: string,
  onChange: (name: string, text: string) => void
}

type State = {| isFocused: boolean |};

class Input extends React.Component<Props, State> {
  handleChange = (name: string, text: string) => {
    this.props.onChange(name, text);
  }

  state = { isFocused: false };

  toggleActive = () => this.setState(state => ({ isFocused: !state.isFocused }));
  render () {
    const { isFocused } = this.state;

    return (
      <View>
        <TextInput
          name={this.props.name}
          style={[styles.input, isFocused && styles.focusedInput]}
          underlineColorAndroid='transparent'
          placeholder={this.props.placeholder}
          value={this.props.value}
          placeholderTextColor='#999'
          keyboardType={this.props.keyboardType || 'default'}
          secureTextEntry={this.props.secureTextEntry || false}
          autoCapitalize={this.props.autoCapitalize}
          autoCorrect={this.props.autoCorrect}
          onChange={(event) => this.handleChange(this.props.name, event.nativeEvent.text)}
          onFocus={this.toggleActive}
          onBlur={this.toggleActive}
        />
          {(this.props.isValid !== null) && !this.props.isValid &&
            <View style={styles.badge}>
              <Text style={styles.badgeText}>!</Text>
            </View>
          }
        <View style={[styles.left, isFocused && styles.focused]} />
        <View style={[styles.right, isFocused && styles.focused]} />
        {this.props.message && isFocused && !this.props.isValid && this.props.isValid !== null &&
          <View style={styles.message}>
            <View style={styles.messageContainer}>
              <View style={styles.messageArrow} />
              <Text style={styles.messageText}>{this.props.message}</Text>
            </View>
          </View>
        }
      </View>
    )
  }
};

export default Input;

const $transparent = 'transparent';
const $colorWhite = '#fff';
const $colorGrey = '#999';
const $colorBlue = '#00BFFF';
const $colorBlack = '#000000';
const $colorRed = '#ff0000';

const styles = StyleSheet.create({
  input: {
    borderBottomColor: $colorGrey,
    borderBottomWidth: 1,
    height: 30,
    paddingLeft: 8,
    paddingRight: 25,
    marginBottom: 10,
    fontSize: 16,
    paddingTop: 5
  },
  left: {
    position: 'absolute',
    height: 4,
    width: 1,
    left: 0,
    bottom: 10,
    backgroundColor: $colorGrey
  },
  right: {
    position: 'absolute',
    height: 4,
    width: 1,
    right: 0,
    bottom: 10,
    backgroundColor: $colorGrey
  },
  focused: {
    backgroundColor: $colorBlue
  },
  focusedInput: {
    borderBottomColor: $colorBlue
  },
  badge: {
    position: 'absolute',
    width: 15,
    height: 15,
    top: 7,
    right: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: $colorRed,
    zIndex: 1
  },
  badgeText: {
    fontSize: 12,
    color: $colorWhite,
  },
  messageContainer: {

  },
  message: {
    position: 'absolute',
    top: 35,
    right: 0,
    height: 28,
    paddingHorizontal: 10,
    backgroundColor: $colorBlack,
    borderTopWidth: 2,
    borderTopColor: $colorRed,
    justifyContent: 'center'
  },
  messageArrow: {
    position: 'absolute',
    backgroundColor: $transparent,
    borderStyle: 'solid',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 5,
    borderLeftColor: $transparent,
    borderRightColor: $transparent,
    borderBottomColor: $colorRed,
    top: -12,
    right: 4
  },
  messageText: {
    fontSize: 13,
    color: $colorWhite
  }
});
