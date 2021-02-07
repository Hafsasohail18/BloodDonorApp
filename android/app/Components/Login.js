import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View,Text,TextInput,TouchableOpacity, Touchable } from 'react-native';


export default function Login() {
  return (
  
        <View style={styles.login}>
      <Text style={styles.headingstyle}>LOGIN.</Text>
      
      <TextInput style={styles.textinputstyle} placeholder="Your Email" placeholderTextColor="white" underlineColorAndroid={"transparent"} />
      <TextInput style={styles.textinputstyle} placeholder="Your Password"  placeholderTextColor="white" secureTextEntry={true} underlineColorAndroid={"transparent"} />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}> Sign In </Text>
      </TouchableOpacity>
      <View style={styles.signuptextcont}>
      <Text style={styles.signuptext}>Don't have an registration?</Text>
      <Text style={styles.signupbtn}> Register Now </Text>
      </View>
    </View>
     
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: '#ff4d4d',
    alignSelf:"stretch",
    margin: 20,
    padding: 5,
    },
    headingstyle: {
      color: 'white',
      fontSize: 26,
      paddingBottom: 10,
      margin: 10,
      marginBottom: 30,
      textAlign: 'center',
      borderBottomColor:"white",
      borderBottomWidth:2,
    },
    textinputstyle: {
      alignSelf:'stretch',
      height: 40,
      marginBottom: 30,
      color: 'black',
      borderBottomWidth: 1,
      borderBottomColor: "white",
      textAlign: "center",
      fontSize: 18,
    },
    button: {
      alignSelf: "stretch",
      alignItems: "center",
      padding: 18,
      backgroundColor: "white",
      borderRadius: 25,
    },
    btntext: {
      fontSize: 20,
      fontWeight: "bold",
      borderBottomWidth: 2,
      borderBottomColor: "black",
      
    },
    signuptextcont:{
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: 16,
        flexDirection: 'row',

    },
    signuptext: {
        color: 'white',
        fontSize: 16,
    },
    signupbtn:{
        fontWeight:'bold',
        fontSize: 17,
    }

    
});