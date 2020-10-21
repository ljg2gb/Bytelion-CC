import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return(
        <Text style={styles.h2}>👏 Reviews App</Text>
    )
}

const styles = StyleSheet.create({
    h2: {
        color: 'white',
        fontSize: 40,
        textAlign: "center",
        paddingTop: 40,
        paddingVertical: 10,
    }
})