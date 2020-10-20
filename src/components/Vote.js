import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Vote() {
    return(
        <View style={styles.component}>
            <Text style={styles.arrow}>⬆</Text>
            <Text style={styles.arrow}>⬇ </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        flexDirection: "row",
        position: 'absolute',
        left: 10,
        top: 10,
    },
    arrow: {
        padding: 2.5,
        fontSize: 20,
    }
})