import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import Reviews from '../components/Reviews'
const url = 'https://my-json-server.typicode.com/bytelion/expo_test_mock_api/reviews'

export default function Home() {
    const [reviews, setReviews] = useState([]);

    const displayReviews = () => {
        fetch(url)
            .then(response => response.json())
            .then(result => setReviews(result))
            .then(console.log(reviews))
    }

    return(
        <View>
            <Text>Home Page</Text>
            <TouchableHighlight 
                underlayColor='rgb(210,220,230)' 
                onPress={displayReviews}
            >
                    <Text>button</Text>
            </TouchableHighlight>
            <Reviews/>
        </View>
    )
}