import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Divider, Avatar, Card, IconButton, Title, Paragraph } from 'react-native-paper';


const UserCard = (item) => {
    const { id, email, gender, role, name } = item;

    return (
        <Card style={styles.card}>
            <Card.Title
                title={`${name.firstName} ${name.lastName}`}
                subtitle={role}
                left={(props) => <Avatar.Icon style={{backgroundColor: '#8a2be2'}} {...props} icon="account-circle" />}

            />
            <Divider />
            <Card.Content style={styles.content}>
                <Paragraph>ID: {id}</Paragraph>
                <Paragraph>Email: {email}</Paragraph>
                <Paragraph>Gender: {gender}</Paragraph>
            </Card.Content>
        </Card>
        
    );
}

export default UserCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
    },
    card: {
        margin: 10,
    },
    content: {
        paddingTop: 10,
    }
});