import React from 'react'
import Movie from './Movie'

function MovieList({movie, select}) {
  return (
    <div>
        {movie?.map((movie) =>(
            <div key={movie.id}>
                <Movie movies={movie} select={select}/>
            </div>
        ))}
    </div>
  )
}

export default MovieList