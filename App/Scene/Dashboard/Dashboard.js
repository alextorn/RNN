/* @flow */

import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking
} from 'react-native';

type Props = {

}

class Dashboard extends React.Component<Props> {
  static navigationOptions = {
    headerTitle: '!!!!'
  }

  callNumber = (url: string) => {
    Linking.openURL(url).then(supported => {
      if(!supported) {
        console.log(`Can't handle url: ${  url}`);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            resizeMode='contain'
            style={styles.carImage} />
          <TouchableOpacity
            style={styles.addPhotoButton}
            // onPress={this.callNumber(`tel:0290098240`)}
            >
            <Image resizeMode='contain'
              style={styles.photoIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.updateBlock}>
          <Text style={styles.updateText}>
            Last checked at 06.12.2017 16:37
          </Text>
        </View>
        <View style={styles.details}>
          <View style={[styles.detailItem, styles.mileage]}>
            <Text style={[styles.detailsTitle, styles.mileageText]}>5000</Text>
            <Text style={[styles.detailsDescr, styles.mileageText]}>Mileage (km)</Text>
          </View>
          <View style={[styles.detailItem, styles.error]}>
            <Text style={[styles.detailsTitle, styles.errorText]}>0</Text>
            <Text style={[styles.detailsDescr, styles.errorText]}>No errors</Text>
          </View>
        </View>
        <View style={styles.details}>
          <View style={[styles.detailItem, styles.options]}>
            <Image
              resizeMode='contain'
              style={styles.detailIcon}
             />
            <Text style={[styles.optionsTitle]}>Reserve car service</Text>
          </View>
          <View style={[styles.detailItem, styles.detailItemBordered, styles.options]}>
            <Image
              resizeMode='contain'
              style={styles.detailIcon}
             />
            <Text style={[styles.optionsTitle]}>Call helpdesk</Text>
          </View>
          <View style={[styles.detailItem, styles.options]}>
            <Image
              resizeMode='contain'
              style={styles.detailIcon}
             />
            <Text style={[styles.optionsTitle]}>Find Aplicom garage</Text>
          </View>
        </View>
      </View>
    )
  }
};

export default Dashboard;

const $colorBlack = '#323232';
const $colorWhite = '#fff';
const $colorGrey = '#f2f2f2';
const $colorDarkGrey = '#999';
const $colorGreen = '#00931c';
const $colorLightGreen = '#a9c700';
const $colorBorder = '#e5e5e5';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $colorWhite
  },
  icon: {
    width: 24,
    height: 24
  },
  imageContainer: {
    height: 180,
    justifyContent: 'center'
  },
  carImage: {
    width: 90,
    height: 45,
    alignSelf: 'center'
  },
  addPhotoButton: {
    position: 'absolute',
    width: 30,
    height: 22,
    bottom: 30,
    right: 20
  },
  photoIcon: {
    width: 30,
    height: 22
  },
  updateBlock: {
    backgroundColor: $colorGrey,
    alignItems: 'center',
    justifyContent: 'center',
    height: 27,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: $colorBorder
  },
  updateText: {
    fontSize: 13,
    color: $colorDarkGrey
  },
  details: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: $colorBorder
  },
  detailItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 12
  },
  detailItemBordered: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: $colorBorder
  },
  mileage: {
    borderRightWidth: 1,
    borderColor: $colorBorder
  },
  detailsTitle: {
    fontSize: 32,
    fontWeight: '600'
  },
  detailsDescr: {
    fontSize: 16,
    marginTop: 5
  },
  mileageText: {
    color: $colorBlack
  },
  errorText: {
    color: $colorGreen
  },
  optionsTitle: {
    fontSize: 17,
    color: $colorLightGreen,
    textAlign: 'center',
    marginTop: 5
  },
  detailIcon: {
    width: 32,
    height: 32
  }
});
