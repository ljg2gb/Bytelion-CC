import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function replyButton() {

    const reply = () => {
            console.log('id like to reply')
    }

    return(
        <View style={styles.component}>
            <TouchableHighlight
                underlayColor='#407C3A'
                onPress={() => reply()}
            >
                <Text style={styles.reply}>Reply</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    component: {
        position: 'absolute',
        left: 10,
        bottom: 10,
    },
    reply: {
       fontSize: 14,
       color: '#1544A3', 
    }
})