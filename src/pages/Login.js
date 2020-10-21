import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Header from '../components/header'

export default function Login({navigation}) {
    const navigateToHome = () => {
        navigation.navigate('Home')
    }

    return(
        <View style={styles.page}>
            <Header/>
            <TouchableHighlight
                onPress={navigateToHome}
                style={styles.button}
                >
                <Text style={styles.buttontext}>Login</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
    },
    button: {
        backgroundColor: '#4C9646',
        margin: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttontext: {
        color: 'white',
        fontSize: 18,
    }
})