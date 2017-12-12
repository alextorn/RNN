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
  emailValid: ?boolean
}

class ForgottenPasswordScreen extends React.Component<Props, State> {
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
    emailValid: null
  }

  handleChange = (name: string, value: string) => {
    this.setState({
      [name]: value
    }, () => {
      this.validateField(name, value)
    });
  }

  validateField = (fieldName: string, value: string) => {
    let { emailValid } = this.state;

    switch(fieldName) {
      case 'email':
        emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
        break;
      default:
        break;
    }
    this.setState({
      emailValid
    }, () => { this.handleFormReady() });
  }

  handleFormReady = () => {
    const { emailValid } = this.state;
    if (emailValid) {
      this.props.navigation.setParams({ isFormFilled: true });
    } else {
      this.props.navigation.setParams({ isFormFilled: false });
    }
  }

  render() {
    const { email, emailValid } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.description}>Give your account email and we'll send you a link for changing your password</Text>
        <View style={styles.form}>
          <Input
            name='email'
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            isValid={emailValid}
            onChange={this.handleChange}
            message='Email is not valid'
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
};

export default ForgottenPasswordScreen;

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
