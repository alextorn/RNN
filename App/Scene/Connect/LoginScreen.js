/* @flow */

import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView
} from 'react-native';
import Input from '../../Components/Form/Input';

type Props = {
  navigation: () => void
}

type State = {
  email: string,
  password: string,
  emailValid: ?boolean,
  passwordValid: ?boolean
}

class LoginScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation }: Props) => {
    const { params = {} } = navigation.state;
    let headerRight = null;
    if (params.isFormFilled) {
      headerRight = <Button title="Done" onPress={navigation.navigate('Profile')} />
    }
    return { headerRight };
  }

  state = {
    email: '',
    password: '',
    emailValid: null,
    passwordValid: null
  }

  handleChange = (name: string, value: string) => {
    this.setState({
      [name]: value
    }, () => {
      this.validateField(name, value)
    });
  }

  validateField = (fieldName: string, value: string) => {
    let { emailValid, passwordValid } = this.state;

    switch(fieldName) {
      case 'email':
        emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
        break;
      case 'password':
        passwordValid = (value.length >= 3);
        break;
      default:
        break;
    }
    this.setState({
      emailValid,
      passwordValid
    }, () => { this.handleFormReady() });
  }

  handleFormReady = () => {
    const { emailValid, passwordValid } = this.state;
    if (emailValid && passwordValid) {
      this.props.navigation.setParams({ isFormFilled: true });
    } else {
      this.props.navigation.setParams({ isFormFilled: false });
    }
  }

  render() {
    const { email, password, emailValid, passwordValid } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.description}>Check an email from Aplicom. The username and password should be there</Text>
        <View style={styles.form}>
          <Input
            name='password'
            placeholder='Password from email'
            autoCorrect={false}
            autoCapitalize='none'
            value={password}
            isValid={passwordValid}
            onChange={this.handleChange}
            secureTextEntry
          />
          <Input
            name='email'
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            keyboardType='email-address'
            isValid={emailValid}
            onChange={this.handleChange}
            message='Email is not valid'
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
};

export default LoginScreen;

const $colorWhite = '#fff';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $colorWhite,
    alignItems: 'center',
    paddingTop: 20
  },
  form: {
    flexDirection: 'column-reverse',
    alignSelf: 'stretch',
    marginTop: 20,
    paddingHorizontal: 30
  },
  description: {
    textAlign: 'center'
  }
});
