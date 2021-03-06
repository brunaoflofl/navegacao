import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox} 
        underlineColorAndroid='rgba(0, 0, 0, 0)' 
        placeholder="E-mail"
        placeholderTextColor= "#ffffff"
        selectionColor="#fff"
        keyboardType="email-address"
        onSubmitEditing={()=> this.password.focus()}
        />
        <TextInput style={styles.inputBox} 
        underlineColorAndroid='rgba(0, 0, 0, 0)' 
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor= "#ffffff"
        ref={(input) => this.password = input}
        />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    }, 
    button: {
        width: 300,
        backgroundColor: '#c85a54',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }

});
