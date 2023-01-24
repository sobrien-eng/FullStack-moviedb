import fs from 'fs'
import matter from 'gray-matter'

const key = '245b5a23f0b29a2cd2d2fd6c071bad5e';
const [movies, setMovies] = useState([]);

const getData = () => {
    const url = `https://api.themoviedb.org/3/movie/550?api_key=${key}`;
    //search term?

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            // Do something with our data
            console.log(data);
            setMovies(data.Search);
        });
}
const handleSearch = (e) => {
    e.preventDefault()
    getData();

}