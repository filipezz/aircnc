import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import api from '../services/api'
import logo from '../assets/logo.png';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [techs, setTechs] = useState('')

     useEffect(()=>{                                         //  Verificação de usuário logado.                                                               
            AsyncStorage.getItem('user').then(user =>{          // Se tiver a informação do user (_id)
                if(user){                                       // na AsyncStorage, ele é navegado 
                navigation.navigate('List')                 // automaticamente para a List
                
                }
            }) 
        }, [])   

    async function handleSubmit(){

        const response = await api.post('/sessions', {email})
        const { _id } = response.data

        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('techs', techs);

        navigation.navigate('List')
    }

     
    
  return (
    <KeyboardAvoidingView style={styles.container}>
        <Image source ={logo} />

        <View style={styles.form}/>

        <Text style={styles.label}>SEU EMAIL *</Text>
        <TextInput
        style={styles.input}
        placeholder="Seu Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={text => setEmail(text)}
        /> 

        <Text style={styles.label }>TECNOLOGIAS *</Text>
        <TextInput
        style={styles.input}
        placeholder="Tecnologias de interesse"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={techs}
        onChangeText={text => setTechs(text)}
        />  

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
             <Text style={styles.buttonText}>Encontrar spots</Text>
        </TouchableOpacity>       
    </KeyboardAvoidingView>
  );
}

 const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius:2,
        width: '80%'
    },
    button: {
        height:42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: '80%'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})