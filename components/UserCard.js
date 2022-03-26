import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Divider } from 'react-native-paper';


const UserCard = ({ props }) => {
    const { id, email, gender, role, name } = props;

    return (
        <View key={id} style={styles.container}>
            <Text style={styles.title}>UserCard</Text>
            <Divider />
            <Text style={styles.name}> {name.firstName} {name.lastName} </Text> 
        </View>
    );
};

export default UserCard;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
    },
});