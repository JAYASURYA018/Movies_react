import React, { useEffect,useState } from 'react';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import TextField from "@mui/material/TextField";

function EditMovie() {
    const history = useHistory();
  

  const {id} = useParams()

  const [movie, setMovie] = useState(null);
  
  const getMovie = (id)=>{
    fetch(`https://62275cf9d1b3ff08c1ad87c9.mockapi.io/prithiv/movies/${id}`)
      .then((data) => data.json())
      .then((data) => setMovie(data));
  }

  useEffect(() => {
    getMovie(id);
  }, []);

  console.log(movie);
  
  
  return (
    <div>
      {movie?<EditMovieForm movie={movie}/>:<h2>Loading data</h2>}
    </div>
  )
}

export default EditMovie




export function EditMovieForm({movie}){

  const modifyDAta = (modifiedData)=>{
    fetch(`https://62275cf9d1b3ff08c1ad87c9.mockapi.io/prithiv/movies/${id}`,{
      method:"PUT",
      body : JSON.stringify(modifiedData),
      headers : {
        "Content-type" : "application/json"
      }
    }).then(()=> history.push("/movies"));
  }
  const history = useHistory();
  const {id} = useParams()

  const [name, setName] = useState(movie.name);
  const [releaseYear, setReleaseYear] = useState(movie.year);
  const [rating, setRating] = useState(movie.rating);
  const [image, setImage] = useState(movie.poster);


  return(
    <div className="add-movie width50">
      <h1 style={{ fontFamily: "sans-serif" }}>Add a movie</h1>
      <TextField
      value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        label="Movie Name"
        variant="outlined"
      />
      <TextField
      value={releaseYear}
        onChange={(event) => {
          setImage(event.target.value);
        }}
        label="Image address"
        variant="outlined"
      />
      <TextField
      value={rating}
        onChange={(event) => {
          setRating(event.target.value);
        }}
        label="Rating"
        variant="outlined"
      />
      <TextField
      value={image}
        onChange={(event) => {
          setReleaseYear(event.target.value);
        }}
        label="Release year"
        variant="outlined"
      />
      <div className="row">
        {name ? (
          <Button
            variant="contained"

            onClick={() => {
              const modifiedData = {
                name: name ? name : "null",
                rating: rating ? rating : "null",
                year: releaseYear ? releaseYear : "null",
                poster: image
                  ? image
                  : `https://via.placeholder.com/350x500/000000/FFFFFF/?text=${
                      name ? name : "null"
                    }`

                    
              };

              modifyDAta(modifiedData)
            }}
          >
            Commit changes
          </Button>
        ) : (
          ""
        )}

        <Button onClick={() => history.goBack("hii")} variant="contained">
          <ArrowBackIosNewIcon />
          Back
        </Button>
      </div>
    </div>
  )
}