/*
    Users leave a rating and review
    On movie
*/

import React from 'react';
import Movie from '../movielist/Movie'

function CreateReview({movie, review}) {
    return (
        <div className='reviewForm'>
            <form>
                <input placeholder="Write a Review..." />
                <button type="submit">Submit</button>
            </form>
                        
        </div>
    )
}

export default CreateReview;