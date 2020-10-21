import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Review from '../components/Review';
import Header from '../components/header';

export default function Reviews({reviews}) {
    const displayReviews = () => {
        return reviews.map(review =>
            <Review 
                key={review.id} 
                rating={review.rating} 
                message={review.message} 
                created_at={review.created_at} 
            />
        )
    };

    return(
        <ScrollView>
            <Header/>
            {displayReviews()}
        </ScrollView>
    );
}