import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Review from '../components/Review'
import Header from '../components/header'

export default function Reviews({reviews}) {
    const displayReviews = () => {
        console.log(reviews)
        return reviews.map(review => <Review key={review.id} rating={review.rating} message={review.message} created_at={review.created_at} />)
    }

    return(
        <View>
            <ScrollView>
                <Header/>
                {displayReviews()}
            </ScrollView>
        </View>
    )
}