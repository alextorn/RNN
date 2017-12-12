/* @flow */
import * as React from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Link from '../../Components/Link';

type Props = {

}

class ConnectScreen extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image}
          resizeMode={'contain'}
        />
        <Text style={styles.titleText}>How to connect?</Text>
        <Text style={styles.descriptionText}>If you've received an email from Aplicom with your username and password you can connect your car with this application.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('loginScreen')}>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
        <View style={styles.accountRow}>
          <Text style={styles.text}>No account?</Text>
          <Link
            onPress={() => this.props.navigation.navigate('signupScreen')} >
            Create account.
          </Link>
        </View>
        <Link
          onPress={() => this.props.navigation.navigate('forgottenPasswordScreen')} >
          Forgot Password?
        </Link>
        <Link style={styles.mt10}
          onPress={() => this.props.navigation.navigate('drawerStack')} >
            Pretend we logged in
        </Link>
      </View>
    )
  }
};

const $colorWhite = '#fff';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $colorWhite,
    alignItems: 'center'
  },
  image: {
    width: 230,
    height: 100,
    marginTop: 40
  },
  titleText: {
    fontSize: 18,
    marginTop: 40
  },
  descriptionText: {
    color: '#999999',
    textAlign: 'center',
    padding: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a9c700',
    height: 40,
    paddingHorizontal: 25
  },
  buttonText: {
    fontSize: 17,
    color: $colorWhite
  },
  accountRow: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    color: '#1f242b',
    marginRight: 10
  },
  mt10: {
    marginTop: 10
  }
});
export default ConnectScreen;
