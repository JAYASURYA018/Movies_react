import React, { useEffect,useState } from 'react';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

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

  return (
    <div>
      {movie?<EditMovieForm movie={movie}/>:<h2>Loading data</h2>}
    </div>
  )
}

export default EditMovie




export function EditMovieForm({movie}){

  

  const formValidation = yup.object({
    name : yup.string().required(),
    poster : yup.string().required(),
    rating : yup.number().required().min(1).max(10),
    year : yup.string().required()
  })


  const formik = useFormik({
    initialValues : {
      name : movie.name,
      poster : movie.poster,
      rating : movie.rating,
      year : movie.year,
      
    },
    validationSchema : formValidation,
    onSubmit : (values)=>{
      modifyDAta(values);
    }

  });


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


  return(
    <form onSubmit={formik.handleSubmit} className="add-movie width50">
      <h1 style={{ fontFamily: "sans-serif" }}>Add a movie</h1>
      <TextField
      error={formik.touched.name ?formik.errors.name:""}
      helperText={formik.touched.name ?formik.errors.name:""}
      value={formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="name"
      name="name"
        label="Movie Name"
        variant="outlined"
      />
      <TextField
      error={formik.touched.poster?formik.errors.poster:""}
      helperText={formik.touched.poster?formik.errors.poster:""}
      value={formik.values.poster}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="poster"
      name="poster"
        label="Image address"
        variant="outlined"
      />
      <TextField
      error={formik.touched.rating ?formik.errors.rating : ""}
      helperText={formik.touched.rating ?formik.errors.rating : ""}
      value={formik.values.rating}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="rating"
      name="rating"
        label="Rating"
        variant="outlined"
      />
      <TextField
      error={formik.touched.year ? formik.errors.year: ""}
      helperText={formik.touched.year ? formik.errors.year: ""}
      value={formik.values.year}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="year"
      name="year"

        label="Release year"
        variant="outlined"
      />
        <Button
        color='success'
          type="submit"
            variant="contained"
            >
            Add
          </Button>
    </form>
  )
}