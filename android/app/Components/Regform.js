import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View,Text,TextInput,TouchableOpacity, Touchable,PickerField } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Regform(){
  return (
  <ScrollView>
        <View style={styles.regform}>
      <Text style={styles.headerstyle}>REGISTRATION.</Text>
      
      <TextInput style={styles.textinputstyle} placeholder="Name" placeholderTextColor="white" underlineColorAndroid={"transparent"} />
      <TextInput style={styles.textinputstyle} placeholder="Gender" placeholderTextColor="white" underlineColorAndroid={"transparent"} />
      <TextInput style={styles.textinputstyle} placeholder="Contact No." placeholderTextColor="white" underlineColorAndroid={"transparent"} />
      <TextInput style={styles.textinputstyle} placeholder="Address" placeholderTextColor="white" underlineColorAndroid={"transparent"} />
      <TextInput style={styles.textinputstyle} placeholder="City" placeholderTextColor="white" underlineColorAndroid={"transparent"} />
      <TextInput style={styles.textinputstyle} placeholder="Your Blood Group" placeholderTextColor="white" underlineColorAndroid={"transparent"} />
      <TextInput style={styles.textinputstyle} placeholder="Email" placeholderTextColor="white" underlineColorAndroid={"transparent"} />
      <TextInput style={styles.textinputstyle} placeholder="Password"  placeholderTextColor="white" secureTextEntry={true} underlineColorAndroid={"transparent"} />
     


      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}> Sign Up </Text>
      </TouchableOpacity>

    </View>
     </ScrollView>
  );
}

const styles = StyleSheet.create({
  regform: {
    flex: 1,
    backgroundColor: '#ff4d4d',
    alignSelf:"stretch",
    margin: 20,
    padding: 5,
    },
    headerstyle: {
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
      height: 35,
      marginBottom: 20,
      color: 'black',
      borderBottomWidth: 1,
      borderBottomColor: "white",
      textAlign: "center",
      fontSize: 15,
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
      
    }
    
});