import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from "react-native";
import UserCard from '../components/UserCard';
import useApi from './../hooks/useApi';

const key = 'key=930279b0'; // usually in .env
// should come back and allow for dynamic calls with different inputs for page/count
const baseURL = `https://my.api.mockaroo.com/users.json?page=1&count=3&${key}`;

const user = [
  {
    "id": 1,
    "name": {
      "firstName": "Thorny",
      "lastName": "Clayborn"
    },
    "email": "tclayborn0@altervista.org",
    "gender": "Male",
    "role": "Test Engineer"
  },
  {
    "id": 2,
    "name": {
      "firstName": "Layney",
      "lastName": "Juan"
    },
    "email": "ljuan1@google.com.au",
    "gender": "Male",
    "role": "Vendor"
  },
  {
    "id": 3,
    "name": {
      "firstName": "Ulrich",
      "lastName": "Lepper"
    },
    "email": "ulepper2@example.com",
    "gender": "Male",
    "role": "Vendor"
  }
];


export default function TabTwoScreen() {
  // useState to hold the array of users information
  // const { loading, data } = useApi(baseURL);

  
  // if (loading) return <Text> Loading...</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current User List</Text>

      {user.map((user) => (
        <UserCard key={user.id} props={user}/>
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
