import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Movie() {

  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://62275cf9d1b3ff08c1ad87c9.mockapi.io/prithiv/movies/${id}`)
      .then((data) => data.json())
      .then((list) => setMovie(list));
  }, []);

  const { name, poster, year, rating } = movie;
    
  return (
    <section className="center">
      <div className="card">
        <img className="poster" src={poster} alt="Movie poster"></img>
        <h1>{name}</h1>
        <h2>Released year : {year}</h2>
        <h2>
          Rating :{" "}
          {rating > 5 ? (
            <span style={{ color: "green" }}>{rating}</span>
          ) : (
            <span style={{ color: "red" }}>{rating}</span>
          )}{" "}
        </h2>
      </div>
    </section>
  );
}

export default Movie;
