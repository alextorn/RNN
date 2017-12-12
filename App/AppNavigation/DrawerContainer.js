/* @flow */

import * as React from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

type Props = {
  items: [],
  activeItemKey: string,
  navigation: () => void
}

class DrawerContainer extends React.Component<Props> {

  logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'loginStack' })]
    });
    this.props.navigation.dispatch(actionToDispatch);
  };

  navigateToScreen = (route: string) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: {
        name: route
      }
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    const { items, activeItemKey } = this.props;
    const activeBackgroundColor = '#CCCCCC';
    const inactiveBackgroundColor = 'transparent';

    return (
      <ScrollView style={styles.drawer}>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          {
            items.map((route) => {
              const focused = activeItemKey === route.key;
              const backgroundColor = focused
                ? activeBackgroundColor
                : inactiveBackgroundColor;
              let section = null;
              if(route.routeName === 'About') {
                section = <Text style={styles.sectionDrawerItem}>{'Settings'.toUpperCase()}</Text>;
              };

                return (
                  <View key={route.key}>
                    {section}
                    <Text
                      style={[styles.uglyDrawerItem, { backgroundColor }]}
                      // onPress={() => this.props.navigation.navigate(route.routeName, ({ name: route.routeName }))}
                      onPress={() => this.navigateToScreen(route.routeName)}
                      >
                      {route.routeName}
                    </Text>
                  </View>
                );
            })
          }
          <Text
            onPress={this.logout}
            style={styles.uglyDrawerItem}>
            Log Out
          </Text>
        </SafeAreaView>
      </ScrollView>
    )
  }
};

export default DrawerContainer;

const $colorBG = '#7B7E81';
const $colorWhite = '#fff';

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: $colorBG
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 0
  },
  sectionDrawerItem: {
    fontSize: 14,
    color: $colorWhite,
    padding: 10
  },
  uglyDrawerItem: {
    fontSize: 14,
    color: $colorWhite,
    padding: 20
  }
});
