import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

export default function ReplyForm({ resetReplyButton, setReply }) {
    const [message, setMessage] = useState('');

    const submitReply = () => {
        setReply(message);
        setMessage('');
        resetReplyButton(false);
    }

    return(
        <View style={styles.component}>
            <TextInput style={styles.input} placeholder="message" onChangeText={(text) => {setMessage(text)}}/>
            <TouchableHighlight onPress={() => submitReply(message)} underlayColor='rgb(210,220,230)'>
                <Text style={styles.button}>Reply</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    component: {
        backgroundColor: '#0A3010',
        padding: 15,
    },
    input: {
        fontSize: 14,
        backgroundColor: 'white',
        margin: 5,
        padding: 5,
        width: 300
    },
    button: {
        alignSelf: 'flex-end',
        fontSize: 14,
        borderRadius: 10,
        margin: 5,
        padding: 5,
        width: 100,
        textAlign: 'center',
        backgroundColor: '#4C9646',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 5
    },
})