import React from 'react'
import { useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

function Movies({movies,setmovies}) {
    
  const history = useHistory();
  const [ name, setName ] = useState("")
  const [ releaseYear, setReleaseYear ] = useState("")
  const [ rating, setRating ] = useState("")
  const [ image, setImage ] = useState("")
  

  const handleDelete = (index)=>{
    const moviesMod = [...movies];
    moviesMod.splice(index,1);
    setmovies(moviesMod);

  }
  return (
    <>
    <section>
      {movies.map(({ name, rating, poster, year },index) => <MovieCard id={index} del={handleDelete} year={year} name={name} img={poster} rating={rating} />)}
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
      }}>Add</button><br></br>
      <Button onClick={()=> history.goBack()} variant="contained" href="#contained-buttons">
        <ArrowBackIosNewIcon/>Back
      </Button>
    </div>
  </>
  )
}

export default Movies