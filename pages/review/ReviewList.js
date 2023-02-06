import React from 'react';
import Movie from '../movielist/Movie';
import Review from 'Review';

function ReviewList({review}) {
    return (
        <div>
            {review?.map((movie) => (
                <div key={review.id /*Review Id*/}>
                    <Review reviews={review} />    
                </div>
            ))}
        </div>
    )
}

export default ReviewList