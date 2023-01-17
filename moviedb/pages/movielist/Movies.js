import React from 'react'

function Movies({moviess, clear}) {
  return (
    <>
        <a href='MovieList.js' onClick={() =>clear()}>IDk</a>
        <div>
        {/* <img className='img' src={persons.picture.large} alt='Profile Pic' /> */}
                <h3><label>title: </label> {moviess.title} </h3>
                {/* <h4><label>Username: </label>{persons.login.username}</h4> */}
                <h4><label>Cell: </label>{moviess.movie_id}</h4>
                <h4><label>Age:</label>{moviess.adult}</h4>
        </div>
    </>
  )
}

export default Movies