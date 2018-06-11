/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.contentContainer  }>
        <Text style={styles.welcome}>
          Alegrianda
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    paddingVertical: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red' //rojo
  },
  welcome2: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#ff3399' //rojo
  },
  welcome3: {
    fontSize: 80,
    textAlign: 'center',
    margin: 10,
    color: '#333300' //rojo
  },
  welcome4: {
    fontSize: 160,
    textAlign: 'center',
    margin: 10,
    color: '#000066' //rojo
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
