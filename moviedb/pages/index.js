import React from 'react'
import { useState, useEffect} from 'react';
// import Movie from './movielist/Movie';
// import MovieList from './movielist/MovieList';
import Head from 'next/head';

function index() {

  const [movie, setMovie] = useState([]); // All People from the API
  const [id, setId] = useState([]); // All People from the API
  const [filteredMovie, setFilteredMovie] = useState([]); // The filtered list of people

  // Filter Form State Variables
  const [titleFilter, setTitleFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');

// const movieSelected = (movie) =>{
//   setMovie(movie);
//   console.log(movie);
//   console.log(movie);
// }

// const clearMovieSelected = () =>{
//   setMovie('');
// }

useEffect(() => {
  console.log(`Title: ${titleFilter} genre: ${genreFilter}`)

  
  //  If person.name.first or last contains what's in our name textbox
  var tempMovie = movie.filter((movie) => { 
    return movie.title.toLowerCase().includes(titleFilter.toLowerCase()) || 
    movie.genres.toLowerCase().includes(genreFilter.toLowerCase()) 
  }
  );

  setFilteredMovie(tempMovie);
}, [titleFilter, genreFilter]);




useEffect(() => {
  getData();
}, []);

// const api_key =`245b5a23f0b29a2cd2d2fd6c071bad5e`;
const getData = () => {
  const url= `https://api.themoviedb.org/3/movie/550?api_key=5186116e4c98518f8ac0a6b1756582df&language=en-US&append_to_response=yes
`
  fetch(url)
  .then(r => r.json(0))
  .then(data => {
    setMovie(data.results);
    setFilteredMovie(data.results);
  }).catch(e => console.log(e));
}

  return (
    <>
  
    <Head>

    <div className="App">
    <div>
      <b>Filters</b>
      <div>
        <div>
          <label>title: </label>
          <input type='text' placeholder='name filter'
            value={titleFilter} onChange={(e) => setTitleFilter(e.target.value)} />
        </div>
        <div>
          <label>genre: </label>
          <input type='text' placeholder='Gender filter'
            value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)} />
        </div>
        <div>
          <label>Id: </label>
          <input type='number' placeholder='0' value={id} onChange={(e) => setId(e.target.value)}/>
      </div>
    </div>
    <br />
      {
        // If filtered people is not null, map through them and create some JSX for each
        filteredMovie?.map((movie, index) => (
          <div key={movie.id} className='userBox'>
            <label>movie {index + 1}</label>
            <div>
              {movie.title}
            </div>
            <div>
              <label>Username: </label>
              {movie.genres}
            </div>
          </div>
        ))
      }
    
    </div>
    </div>
    </Head>
    
    </>
  )
}

export default index