import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './Component/Header';
import ListItem from './Component/ListItem';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import AddItem from './Component/AddItem';

export default function App() {
  const [items, setItems] = useState([
    { id: uuid.v4(), text: 'Milks' },
    { id: uuid.v4(), text: 'Eggs' },
    { id: uuid.v4(), text: 'Bread' },
    { id: uuid.v4(), text: 'Juice' },
  ]);

  const deleteItem = (id)=>{
    setItems(prevItems=>{
      return prevItems.filter(item=>item.id !=id);
    })
  };

  const addItem =(text)=>{
    if (!text) {
      Alert.alert('Error','Please enter an item', [{text:"Ok"}]);
    } else {
      setItems(prevItems=>{
        return[{id:uuid.v4(), text}, ...prevItems]
      })
    }
    
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}></AddItem>
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem}/>} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
