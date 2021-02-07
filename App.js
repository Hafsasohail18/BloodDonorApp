import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import Donor from './android/app/Components/Donor';
import Login from './android/app/Components/Login';
import Regform from './android/app/Components/Regform';

export default function App() {
  return (
  
        <View style={styles.container}>
          <Text style={styles.headingstyle}>Blood Donation App</Text>
      <StatusBar backgroundColor='#ff4d4d'
      barstyle="light-content"
      />
  <Regform />
  <Donor />
    </View>
     
    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    },
    headingstyle: {
      color: '#d11e20',
      fontSize: 35,
      padding: 10,
      marginTop: 30,
      textAlign: 'center',
      fontWeight:"bold",
    },
    
});
