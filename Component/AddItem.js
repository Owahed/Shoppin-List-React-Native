import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { useState } from 'react';

export default function AddItem({addItem}) {
    const [text, setText]=useState('');

    const onChange = textValue => setText(textValue);

  return (
    <View style={styles.addItem}>
     <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onChange}/>
     <TouchableOpacity style={styles.btn} onPress={()=>addItem(text)}>
        <Text style={styles.btnText}><Entypo name="plus" size={22} color="darkslateblue" /> Add Item</Text>
     </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
    input:{
        height:60,
        padding:8,
        fontSize:16
    },
    btn:{
        backgroundColor:"#c2bad8",
        padding:9,
        margin:5,
    },
    btnText:{
        color:"darkslateblue",
        fontSize:20,
        textAlign:'center'
    }
});
