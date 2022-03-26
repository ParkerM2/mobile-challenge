import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from "react-native";

const key = 'key=930279b0'; // usually in .env or hidden
// should come back and allow for dynamic calls with different inputs for page/count
const baseURL = `https://my.api.mockaroo.com/users.json?page=1&count=3&${key}`;


export default function TabTwoScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    const apiRequest = async () => {
      try {
        const res = await axios.get(baseURL);
        console.log(res.data.entries)
        setUsers(res.data.entries);
      } catch (error) {
        console.log(error)
      }
    };
    apiRequest();
  }, [])

  if (!users.length) return <Text> Loading...</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View The Current Users</Text>


      {/* user component to map over */}

      {users.map((user) => (
        <Text style={styles.text} key={user.id}>{user.email}</Text>
      ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
