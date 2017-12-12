/* @flow */

import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import Input from '../../Components/Form/Input';

type Props = {
  navigation: () => void
}

type State = {
  name: string,
  lastname: string,
  email: string,
  phone: string,
  nameValid: ?boolean,
  lastnameValid: ?boolean,
  emailValid: ?boolean,
  phoneValid: ?boolean
}

class SignupScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation }: Props) => {
    const { params = {} } = navigation.state;
    let headerRight = null;
    if (params.isFormFilled) {
      headerRight = <Button title="Next" onPress={navigation.navigate('Profile')} />
    }
    return { headerRight };
  }

  state = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    nameValid: null,
    lastnameValid: null,
    emailValid: null,
    phoneValid: null
  }

  handleChange = (name: string, value: string) => {
    this.setState({
      [name]: value,
      isFormActive: true
    }, () => {
      this.validateField(name, value)
    });
  }

  validateField = (fieldName: string, value: string) => {
    let { emailValid, phoneValid, nameValid, lastnameValid } = this.state;

    switch(fieldName) {
      case 'email':
        emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
        break;
      case 'phone':
        phoneValid = (value.length >= 3);
        break;
      case 'name':
        nameValid = (value.length > 0);
        break;
      case 'lastname':
        lastnameValid = (value.length > 0);
        break;
      default:
        break;
    }
    this.setState({
      emailValid,
      phoneValid,
      nameValid,
      lastnameValid
    }, () => { this.handleFormReady() });
  }

  handleFormReady = () => {
    const { emailValid, phoneValid, nameValid, lastnameValid } = this.state;
    if (emailValid && phoneValid && nameValid && lastnameValid) {
      this.props.navigation.setParams({ isFormFilled: true });
    } else {
      this.props.navigation.setParams({ isFormFilled: false });
    }
  }

  render() {
    const {
      name,
      lastname,
      email,
      phone,
      nameValid,
      lastnameValid,
      emailValid,
      phoneValid
    } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={[styles.description, styles.descriptionTop]}>Welcome</Text>
        <View style={styles.form}>
          <Input
            name='phone'
            placeholder='Phone number'
            autoCorrect={false}
            autoCapitalize='none'
            value={phone}
            keyboardType='numeric'
            isValid={phoneValid}
            onChange={this.handleChange}
            message='Phone number is not valid'
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
          <Input
            name='lastname'
            placeholder='Last name'
            autoCorrect={false}
            autoCapitalize='none'
            value={lastname}
            isValid={lastnameValid}
            onChange={this.handleChange}
            message='Last name is not valid'
          />
          <Input
            name='name'
            placeholder='Name'
            autoCorrect={false}
            autoCapitalize='none'
            value={name}
            isValid={nameValid}
            onChange={this.handleChange}
            message='Name is not valid'
          />
        </View>
        <View style={[styles.description, styles.descriptionBottom]}>
          <Image
            style={styles.infoImage}/>
          <Text style={styles.descriptionText}>
            Fill in the above information and use 'Next' to continue. Invalid values are marked with warning symbols. All the fields are required.
          </Text>
        </View>
      </KeyboardAvoidingView>
    )
  }
};

export default SignupScreen;

const $colorWhite = '#fff';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $colorWhite,
    paddingTop: 20
  },
  form: {
    flexDirection: 'column-reverse',
    alignSelf: 'stretch',
    marginTop: 20,
    paddingHorizontal: 30
  },
  description: {
    paddingHorizontal: 30,
    justifyContent: 'center'
  },
  descriptionTop: {
  },
  descriptionBottom: {
    marginTop: 20
  },
  descriptionText: {
    fontSize: 13,
    marginLeft: 30
  },
  infoImage: {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 15
  }
});
