import React from 'react'

function MovieCard({name,img,rating,year}) {
  return (
    <div className="card">
      <img className="poster" src={img} alt="Movie poster"></img>
      <h1>{name}</h1>
      <h2>Released year : {year}</h2>
      <h2>Rating : ⭐{rating}</h2>
    </div>)
}

export default MovieCard