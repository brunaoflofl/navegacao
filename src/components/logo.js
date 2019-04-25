import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}> Hi </Text>
        <Text style={styles.logoText}>Welcome to my space</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo:{ 
        color: '#ffffff',
        fontSize: 70

    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)'
    }
});
