import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Reviews from '../components/Reviews'
const url = 'https://my-json-server.typicode.com/bytelion/expo_test_mock_api/reviews'

export default function Home() {
    const [reviews, setReviews] = useState([]);

    const displayReviews = () => {
        fetch(url)
            .then(response => response.json())
            .then(result => setReviews(result))
    }

    useEffect(() => {displayReviews()}, [])

    return(
        <View style={styles.page}>
            <Reviews reviews={reviews}/>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F2F6FA',
    }
})