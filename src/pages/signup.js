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

export default class Signup extends Component {

  goBack(){
    Actions.pop()
  }

  

  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Form type="Signup"/>
        <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Already have an account? </Text>
            <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>

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
