/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import AppContainer from 'app/routers/stack-navigation';
import {styles} from 'app/styles/root';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}
