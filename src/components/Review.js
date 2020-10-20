import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Review({id, rating, message, created_at}) {
    return(
        <View style={styles.card} >
            <Text>{id}</Text>
            <Text>{rating}</Text>
            <Text>{message}</Text>
            <Text>{created_at}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'blue',
        height: 130, 
        // width: '80%', 
        margin: 10
    }
})