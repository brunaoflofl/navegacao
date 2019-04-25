

import React, {Component} from 'react';
import {
  StyleSheet, 
  View, 
  StatusBar
} from 'react-native';

import Routes from './src/routes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#c85a54"
          barStyle="light-content"/>

        <Routes/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    },
});
