import { View, Text, FlatList, StyleSheet, StatusBar, SafeAreaView, ActivityIndicator, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  // const getUsersFromApi = () => {
  //   return fetch('https://reqres.in/api/users?page=2')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json)
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

type ItemProps = {title: string};

  const Item = ({item} : any) => (
    <View style={styles.item}>
      <Image style={styles.logo} source={{ uri: item.avatar }} />
      <View>
        <Text style={styles.title}>{item.first_name} {item.last_name}</Text>
        <Text style={styles.title}>{item.email}</Text>
      </View>
      
    </View>
  );

const Flatlist = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const json = await response.json();
      console.log(json.data);

      setUsers(json.data);
      setLoading(false);
    }
    catch(error) {
      console.error(error);
      setLoading(false);
    }
  }

  // Usar hook useEffect para llamar fetchData al iniciar el compomente
  useEffect(() => {
    fetchData();
  }), [];

  if(loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={Item}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 24,
    },
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      marginRight: 10,
      width: 66,
      height: 58,
    },
  });

export default Flatlist