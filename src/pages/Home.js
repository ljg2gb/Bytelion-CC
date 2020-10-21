import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Reviews from '../components/Reviews';

const url = 'https://my-json-server.typicode.com/bytelion/expo_test_mock_api/reviews'

export default function Home() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {displayReviews()}, []);

    const displayReviews = () => {
        fetch(url)
            .then(response => response.json())
            .then(result => setReviews(result))
    }

    return(
        <View style={styles.page}>
            <Reviews reviews={reviews}/>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
    },
})