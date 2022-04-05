import React, { useEffect, useState } from "react";
import "./App.css";
import "./App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';

function Movies() {
  const history = useHistory();

  const [movies, setMovies] = useState([]);
  
  const getMovies = ()=>{
    fetch("https://62275cf9d1b3ff08c1ad87c9.mockapi.io/prithiv/movies")
      .then((data) => data.json())
      .then((list) => setMovies(list));
  }
  
  useEffect(() => {
    getMovies();
  }, []);

  const handleDelete = (id) => {
    fetch(`https://62275cf9d1b3ff08c1ad87c9.mockapi.io/prithiv/movies/${id}`,{
      method:"DELETE",
    }).then(()=>getMovies());
  };
  
  return (
    <>
      <section>
        {movies.map(({ id, name, rating, poster, year }, index) => (
          <div key={id} className="card">
            <img className="poster" src={poster} alt="Movie poster"></img>
            <h1>
              {name}
              <IconButton
                style={{ marginLeft: "auto" }}
                color="error"
                aria-label="delete"
                component="span"
                onClick={() => handleDelete(id)}
              >
                <DeleteIcon/>
              </IconButton>

              <IconButton
                style={{ marginLeft: "auto" }}
                color="primary"
                aria-label="edit"
                component="span"
                onClick={() => history.push(`/movies/edit/${id}`)} >
                <EditIcon/>
              </IconButton>
            </h1>
            <h2>
              Released year : {year}
              <InfoIcon
                onClick={() => {
                  history.push(`/movies/${id}`);
                }}
              />
            </h2>
            <h2>
              Rating :{" "}
              {rating > 5 ? (
                <span style={{ color: "green" }}>{rating}</span>
              ) : (
                <span style={{ color: "red" }}>{rating}</span>
              )}{" "}
            </h2>
          </div>
        ))}
      </section>
    </>
  );
}

export default Movies;
