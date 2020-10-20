import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Review from '../components/Review'

export default function Reviews({reviews}) {
    const displayReviews = () => {
        console.log(reviews)
        return reviews.map(review => <Review key={review.id} rating={review.rating} message={review.message} created_at={review.created_at} />)
    }

    return(
        <View>
            <ScrollView>
                <Text style={styles.h2}>Reviews</Text>
                {displayReviews()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    h2: {
        fontSize: 40,
        textAlign: "center",
        paddingVertical: 20,
    }
})