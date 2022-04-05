import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

function AddMovie() {

  const formValidation = yup.object({
    name : yup.string().required(),
    poster : yup.string().required(),
    rating : yup.number().required().min(1).max(10),
    year : yup.string().required()
  })

  const postDAta = (newMovie)=>{
    fetch(`https://62275cf9d1b3ff08c1ad87c9.mockapi.io/prithiv/movies`,{
      method:"POST",
      body : JSON.stringify(newMovie),
      headers : {
        "Content-type" : "application/json"
      }
    }).then(()=> history.push("/movies"));
  }


  const formik = useFormik({
    initialValues : {
      name : "",
      poster : "",
      rating : "",
      year : "",
      
    },
    validationSchema : formValidation,
    onSubmit : (values)=>{
      postDAta(values);
    }

  });


  const history = useHistory();
  // const [name, setName] = useState("");
  // const [releaseYear, setReleaseYear] = useState("");
  // const [rating, setRating] = useState("");
  // const [image, setImage] = useState("");



  return (
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
        // onChange={(event) => {
        //   setName(event.target.value);
        // }}
        label="Movie Name"
        variant="outlined"
      />
      {/* {formik.touched.name ? <span className="error">{formik.errors.name}</span> : ""} */}
      <TextField
      error={formik.touched.poster?formik.errors.poster:""}
      helperText={formik.touched.poster?formik.errors.poster:""}
      value={formik.values.poster}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="poster"
      name="poster"
        // onChange={(event) => {
        //   setImage(event.target.value);
        // }}
        label="Image address"
        variant="outlined"
      />
      {/* {formik.touched.poster ? <span className="error">{formik.errors.poster}</span> : ""} */}
      <TextField
      error={formik.touched.rating ?formik.errors.rating : ""}
      helperText={formik.touched.rating ?formik.errors.rating : ""}
      value={formik.values.rating}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="rating"
      name="rating"
        // onChange={(event) => {
        //   setRating(event.target.value);
        // }}
        label="Rating"
        variant="outlined"
      />
      {/* {formik.touched.rating ? <span className="error">{formik.errors.rating}</span> : ""} */}
      <TextField
      error={formik.touched.year ? formik.errors.year: ""}
      helperText={formik.touched.year ? formik.errors.year: ""}
      value={formik.values.year}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="year"
      name="year"
        // onChange={(event) => {
        //   setReleaseYear(event.target.value);
        // }}
        label="Release year"
        variant="outlined"
      />
      {/* {formik.touched.year ? <span className="error">{formik.errors.year}</span> : ""} */}
      <div className="row">
        <Button
          type="submit"
            variant="contained"

            // onClick={() => {
            //   const newMovie = {
            //     name: name ? name : "null",
            //     rating: rating ? rating : "null",
            //     year: releaseYear ? releaseYear : "null",
            //     poster: image
            //       ? image
            //       : `https://via.placeholder.com/350x500/000000/FFFFFF/?text=${
            //           name ? name : "null"
            //         }`

                    
            //   };

            //   postDAta(newMovie)
            // }}
          >
            Add
          </Button>
        <Button onClick={() => history.goBack("hii")} variant="contained">
          <ArrowBackIosNewIcon />
          Back
        </Button>
      </div>
    </form>
  );
}

export default AddMovie;
