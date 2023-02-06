import React from 'react';
import Movie from '../movielist/Movie';

function Review({reviews, movie}) {
    return (
        <div className='reviewBox'>
            <h4><label>{/*Getting Username*/}</label></h4>
            <div>{/*Review Text*/}</div>
            <h6>{/*Date Posted*/}</h6>
        </div>
        
    )
}