import React from "react";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import TextField from "@mui/material/TextField";

function AddMovie({ setmovies, movies }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="add-movie width50">
      <h1 style={{fontFamily:"sans-serif"}}>Add a movie</h1>
      <TextField
        onChange={(event) => {
          setName(event.target.value);
        }}
        label="Movie Name"
        variant="outlined"
      />
      <TextField
        onChange={(event) => {
          setImage(event.target.value);
        }}
        label="Image address"
        variant="outlined"
      />
      <TextField
        onChange={(event) => {
          setRating(event.target.value);
        }}
        label="Rating"
        variant="outlined"
      />
      <TextField
        onChange={(event) => {
          setReleaseYear(event.target.value);
        }}
        label="Release year"
        variant="outlined"
      />
      <div className="row">
        {name?<Button
          variant="contained"
          onClick={() => {
            setmovies([
              ...movies,
              {
                name: name ? name : "null",
                rating: rating ? rating : "null",
                year: releaseYear ? releaseYear : "null",
                poster: image
                  ? image
                  : `https://via.placeholder.com/350x500/000000/FFFFFF/?text=${
                      name ? name : "null"
                    }`,
              },
            ]);
            history.push("/movies");
          }}
        >
          Add
        </Button>:""}

        <Button onClick={() => history.goBack("hii")} variant="contained">
          <ArrowBackIosNewIcon />
          Back
        </Button>
      </div>
    </div>
  );
}

export default AddMovie;
