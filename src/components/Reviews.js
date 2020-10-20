import React from 'react';
import { View, Text } from 'react-native';
import Review from '../components/Review'

export default function Reviews({reviews}) {
    const displayReviews = () => {
        console.log(reviews)
        return reviews.map(review => <Review key={review.id} id={review.id} rating={review.rating} message={review.message} created_at={review.created_at} />)
    }

    return(
        <View>
            <Text>Reviews</Text>
            {displayReviews()}
        </View>
    )
}