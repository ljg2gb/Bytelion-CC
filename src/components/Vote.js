import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Vote() {
    const clicked = (arrow) => {
        if (arrow === 'up') {
            console.log('upvote')
        } else {
            console.log('downvote')
        }
    };

    return(
        <View style={styles.component}>
            <TouchableHighlight
                underlayColor='#407C3A'
                onPress={() => clicked('up')}
                style={styles.button}
            >
                <Text style={styles.arrow}>⬆</Text>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor='#407C3A'
                onPress={() => clicked('down')}
                style={styles.button}
            >
                <Text style={styles.arrow}>⬇</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
        flex: 1,
        flexDirection: "row",
        position: 'absolute',
        left: 10,
        top: 10,
    },
    button: {
        
    },
    arrow: {
        padding: 2.5,
        fontSize: 20,
    }
});