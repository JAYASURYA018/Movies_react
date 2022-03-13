import { useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
function App() {
  const [ name, setName ] = useState("")
  const [ releaseYear, setReleaseYear ] = useState("")
  const [ rating, setRating ] = useState("")
  const [ image, setImage ] = useState("")
  const [ movies, setmovies ] = useState([
    {
      name: "Mahaan",
      rating: "8.5",
      year: 2022,
      poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhSyG3uwglCuRYjKyOXKSCmJmtcRG9LsS9Z5-ca9ArJvjNPNBi",
    },
    {
      name: "365 dni",
      rating: "9.0",
      year: 2020,
      poster: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1644184331/amc-cdn/production/2/movies/45900/45869/PosterDynamic/134454.jpg",
    },
    {
      name: "Hridayam",
      rating: "7.5",
      year: 2022,
      poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hridayam-et00317916-18-11-2021-07-42-12.jpg",
    },
    {
      name: "Bachelor",
      rating: "8.0",
      year: 2022,
      poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Bachelor_2021_film.jpg",
    },
    {
      name: "Pushpa: The Rise",
      rating: "8.2",
      year: 2021,
      poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfBsJnWMSk716p9HN_K8eqgNMpoiq2koPWy8pSgHUmj4JbwAd4",
    }
  ])

  return (
    <>
      <section>
        {movies.map(({ name, rating, poster, year }) => <MovieCard year={year} name={name} img={poster} rating={rating} />)}
      </section>
      <div className='add-movie'>
        <h1>Add a movie</h1>
        <span>Enter Movie Name : </span><input onChange={(event) => { setName(event.target.value) }} placeholder='Movie name'></input>
        <span> Enter Movie's image address : </span><input onChange={(event) => { setImage(event.target.value) }} placeholder='Image address'></input>
        <span>Enter Movie Rating : </span><input onChange={(event) => { setRating(event.target.value) }} placeholder='Rating'></input>
        <span>Enter Movie Released year : </span><input onChange={(event) => { setReleaseYear(event.target.value) }} placeholder='Release year'></input>
        <button onClick={() => {
          setmovies([...movies,{
            name: name?name:"null",
            rating: rating?rating:"null",
            year: releaseYear?releaseYear:"null",
            poster: image?image: `https://via.placeholder.com/350x500/000000/FFFFFF/?text=${name?name:"null"}`
          }])
        }}>Add</button>
      </div>
    </>
  );
}

export default App;