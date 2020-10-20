import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Review({rating, message, created_at}) {
    return(
        <View style={styles.card} >
            <Text style={styles.rating}>{rating} out of 5 stars</Text>
            <Text style={styles.message} >{message}</Text>
            <Text style={styles.date}>{created_at}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        minHeight: 130,
        margin: 10,
        padding: 5,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 5
    },
    message: {
        fontSize: 18,
        paddingVertical: 50,
        paddingHorizontal: 5
    },
    rating: {
        position: "absolute",
        right: 10,
        top: 10,
    },
    date: {
        position: "absolute",
        right: 10,
        bottom: 10,
        color: '#636363',
    }


})