import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import Logo from '../components/logo'
import Form from '../components/form'


export default class Login extends Component {
 signup(){
   Actions.signup()
 }

  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Form type="Login"/>
        <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Don't have an account yet? </Text>
            <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff8a80',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupTextCont: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row'

    },
    signupText:{
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16
    },
    signupButton:{
        color: '#ffffff',
        fontSize:16,
        fontWeight: '500',
    }
})
