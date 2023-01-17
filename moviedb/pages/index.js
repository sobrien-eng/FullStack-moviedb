import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Home() {
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