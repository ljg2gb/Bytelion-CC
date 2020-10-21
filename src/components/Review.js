import React, { useState, useEffect}  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import Vote from '../components/Vote'
import ReplyForm from '../components/replyForm'

export default function Review({rating, message, created_at}) {
    const [replyform, resetReplyButton] = useState(false);
    const [reply, setReply] = useState('');


    const clicked = () => {
        resetReplyButton(!replyform)
    }

    const displayReplyForm = () => {
        if(replyform) {
            return <ReplyForm resetReplyButton={resetReplyButton} setReply={setReply} />
        }
    }

    const displayReply = () => {
        if(reply) {
            return <Text style={styles.replytext}>{reply}</Text>
        }
    }

    return(
        <View style={styles.card} >
            <Vote/>
            <Text style={styles.rating}>{rating} out of 5 stars</Text>
            <Text style={styles.message} >{message}</Text>
            <Text style={styles.date}>{created_at}</Text>
            <TouchableHighlight
                underlayColor='#407C3A'
                onPress={() => clicked()}
                style={styles.reply}
            >
                <Text style={styles.replybutton}>Reply</Text>
            </TouchableHighlight>
            {displayReply()}
            {displayReplyForm()}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#4C9646',
        minHeight: 130,
        margin: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 5
    },
    message: {
        fontSize: 18,
        marginVertical: 30,
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
        padding: 5,
    },
    reply: {
        padding: 5,
        backgroundColor: 'white'
    },
    replybutton: {
        fontSize: 16,
        color: '#1C57CC'
    },
    replytext: {
        backgroundColor: '#1544A3',
        padding: 15,
        fontSize: 14,
    }
})