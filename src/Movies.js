import React from 'react'
import './App.css';
import MovieCard from './MovieCard';
import './App.css';

function Movies({movies,setmovies}) {
    
  
  

  const handleDelete = (index)=>{
    const moviesMod = [...movies];
    moviesMod.splice(index,1);
    setmovies(moviesMod);

  }
  return (
    <>
    <section>
      {movies.map(({ name, rating, poster, year },index) => <MovieCard key={index} id={index} del={handleDelete} year={year} name={name} img={poster} rating={rating} />)}
    </section>
  </>
  )
}

export default Movies