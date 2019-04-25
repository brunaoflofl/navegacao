

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './src/pages/login'

import Signup from './src/pages/signup'



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#c85a54"
          barStyle="light-content"/>

        <Signup/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8a80',
    },
});
