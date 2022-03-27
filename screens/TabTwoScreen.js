import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from "react-native";
import { Button } from 'react-native-paper';
import UserCard from '../components/UserCard';
import useApi from './../hooks/useApi';



export default function TabTwoScreen() {
  const [page, setPage] = useState(1);

  const key = 'key=930279b0'; // usually in .env
  // should come back and allow for dynamic calls with different inputs for page/count
  const baseURL = `https://my.api.mockaroo.com/users.json?page=${page}&count=10&${key}`;
  // useState to hold the array of users information
  const { loading, data, error } = useApi(baseURL);

  if (loading) return <View style={styles.loader}><ActivityIndicator color="#8a2be2" size="large" /></View>
  if (error) return <Text> Error Found: {error} </Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current User List</Text>

      {/* Switched To a Flat List to improve performance of the application */}
      {/* docs : https://reactnative.dev/docs/optimizing-flatlist-configuration#:~:text=Pros%3A%20Setting%20a%20bigger%20number,%2C%20like%20presses%2C%20hurting%20responsiveness. */}
          <FlatList
            initialNumToRender={5}
            data={data.entries}
            keyExtractor={item=>`${item.id}`}
            renderItem={({ item }) => {
              return UserCard(item)
            }}
          />

      {/* Buttons for controlling Page */}
      <View style={styles.row}>
        <View style={styles.buttonContainer}>
          <Button
            compact
            color='#8a2be2'
            mode="contained"
            onPress={() => setPage((val) => val >= 2 ? val - 1 : null)}
            disabled={page >= 2 ? false : true}
          >
            Previous
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            compact
            color='#8a2be2'
            mode="contained"
            onPress={() => setPage((val) => val + 1)}
          >
            Next
          </Button>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50
  },
  text: {
    fontSize: 20,
  },
  title: {
    color: '#8a2be2',
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    alignSelf: 'center',
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  buttonContainer: {
    flex: 1,
    padding: 10
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 15,
    justifyContent: 'space-around'
  },
  userCardContainer: {
    marginTop: 10,
  }
})
