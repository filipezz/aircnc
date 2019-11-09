import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, AsyncStorage, Alert } from 'react-native'
import socketio from 'socket.io-client'
import SpotList from '../components/SpotList'
import Header from '../components/Header'




export default function List() {
const [techs, setTechs] = useState([])

useEffect(()=>{
  AsyncStorage.getItem('user').then(user_id =>{
    const socket = socketio('http://192.168.1.6:3333', {
      query: {user_id}
    })
    
    socket.on('booking_response', booking => {
      Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'Aceita' : 'Rejeitada'}`)
    })
  })
},[])

useEffect(() => {
  AsyncStorage.getItem('techs').then(storagedTechs => {
    const techsArray = storagedTechs.split(',').map(tech => tech.trim());

    setTechs(techsArray);
  })
}, []);
  return (
    
     <SafeAreaView style={styles.container}>
    <Header />

      <ScrollView>
      {techs.map(tech => <SpotList key= {tech} tech={tech} />)}
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
  }
  
})