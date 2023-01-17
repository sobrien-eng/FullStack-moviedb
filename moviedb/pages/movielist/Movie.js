import React from 'react'


function Movie({movies, select}) {
    // console.log(peoples);
return (
    <div>
        <div className='movieBox' onClick={() => select(movies)}>
            {/* {peoples.picture !== 'N/A' ?
            <div>
                <img className='image' src={peoples.picture.medium} alt='Profile pic' />
            </div> : ''
        } */}
                <div>
                    <div><label> Name: </label>{movies.title} {peoples.name.first} {peoples.name.last}</div>
                    {/* <div><label> Username: </label>{peoples.login.username}</div> */}
                    <div><label> Id: </label>{movies.id}</div>
                    {/* <div><label> Age:</label>{peoples.dob.age}</div> */}
                    <div><label>Genre: </label>{movies.genres}</div>
                </div>
        </div>
    </div>
)
}

export default Movie