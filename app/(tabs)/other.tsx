import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, useSafeAreaInsets  } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import "core-js/stable";
import regeneratorRuntime from "regenerator-runtime";
// import Storage from 'react-native-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Other() {
  const insets = useSafeAreaInsets();
  const [text, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState('');
  // const storage = new Storage({
  //   size: 1000,
  //   storageBackend: window.length, //AsyncStorage,
  //   defaultExpires: 1000 * 3600 * 24,
  //   sync: {

  //   }
  // });
  // const onSave = () => {
  //   storage.save({
  //     key: 'nombre',
  //     data: text,
  //     expires: 1000 * 3600
  //   });
  // }
  // const onGet = () => {
  //   storage
  // .load({
  //   key: 'nombre',
  //   autoSync: true,
  //   syncInBackground: true,
  //   syncParams: {
  //     extraFetchOptions: {
  //     },
  //     someFlag: true
  //   }
  // })
  // .then(ret => {
  //   //console.log(ret.userid);
  //   alert(ret)
  // })
  // .catch(err => {
  //   console.warn(err.message);
  //   switch (err.name) {
  //     case 'NotFoundError':
  //       // TODO;
  //       break;
  //     case 'ExpiredError':
  //       // TODO
  //       break;
  //   }
  // });
  // }

  return (
    <SafeAreaProvider style={{ backgroundColor: "#000000"}}>
    <View style={{ flex: 1, paddingTop: insets.top }}>
          <Text style={styles.parrafo}>Other component</Text>
      </View>

      <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Button
          title="Right button"
          onPress={() => alert(text)}
        />

      <Button
        title='Guardar datos'
      />

<Button
        title='Obtener datos'
      />

      </View>

      <Link href="/">Go Home</Link>
    </SafeAreaProvider>
    
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  parrafo: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    color: "#ffffff",
    borderColor: "#ffffff",
    padding: 10,
  },
});