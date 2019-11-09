import React from 'react';
import {  Text, TouchableOpacity, StyleSheet, AsyncStorage, SafeAreaView, Image } from 'react-native'
import { withNavigation } from 'react-navigation';

import logo from '../assets/logo.png'


function Header({ navigation }) {

    function handleLogout(){
        AsyncStorage.removeItem('user').then(navigation.navigate('Login'))
    }

  return (
    <SafeAreaView>
    <Image style={styles.logo}  source={logo}/>
    <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
    </TouchableOpacity> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    logoutButton: {
        height:42,
        marginTop: 5,
        borderWidth: 2,
        borderColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#fff',
        width: '50%',
        alignSelf: 'center',
    },
    logoutButtonText: {
        color: '#222',
        fontWeight: 'bold',
        fontSize: 16
    },
    logo:{
        height:32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 10 
      }
})

export default withNavigation(Header)