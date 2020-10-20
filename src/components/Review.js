import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import Vote from '../components/Vote'
import ReplyButton from '../components/replyButton'

export default function Review({rating, message, created_at}) {
    return(
        <View style={styles.card} >
            <Vote/>
            <Text style={styles.rating}>{rating} out of 5 stars</Text>
            <Text style={styles.message} >{message}</Text>
            <ReplyButton/>
            <Text style={styles.date}>{created_at}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#4C9646',
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
        marginVertical: 40,
        paddingVertical: 10,
        paddingHorizontal: 5,
        color: 'white',
    },
    rating: {
        position: "absolute",
        right: 10,
        top: 10,
        color: 'white'
    },
    date: {
        position: "absolute",
        right: 10,
        bottom: 10,
        color: 'black',
    },
    reply: {
        // color: 'navy',
        // fontSize: 14,
    },
    button: {
        backgroundColor: 'black',
        position: "absolute",
        left: 10,
        bottom: 5,
    }


})