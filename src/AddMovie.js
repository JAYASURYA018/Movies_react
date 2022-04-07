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
    name: yup.string().required(),
    poster: yup.string().required(),
    rating: yup.number().required().min(1).max(10),
    year: yup.string().required()
  })

  const postDAta = (newMovie) => {
    fetch(`https://62275cf9d1b3ff08c1ad87c9.mockapi.io/prithiv/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-type": "application/json"
      }
    }).then(() => history.push("/movies"));
  }


  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      year: "",

    },
    validationSchema: formValidation,
    onSubmit: (values) => {
      postDAta(values);
    }

  });
  const history = useHistory();
  return (
    <form onSubmit={formik.handleSubmit} className="add-movie width50">
      <h1 style={{ fontFamily: "sans-serif" }}>Add a movie</h1>
      <TextField
        error={formik.touched.name ? formik.errors.name : ""}
        helperText={formik.touched.name ? formik.errors.name : ""}
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="name"
        name="name"
        label="Movie Name"
        variant="outlined"
      />
      <TextField
        error={formik.touched.poster ? formik.errors.poster : ""}
        helperText={formik.touched.poster ? formik.errors.poster : ""}
        value={formik.values.poster}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="poster"
        name="poster"
        label="Image address"
        variant="outlined"
      />
      <TextField
        error={formik.touched.rating ? formik.errors.rating : ""}
        helperText={formik.touched.rating ? formik.errors.rating : ""}
        value={formik.values.rating}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="rating"
        name="rating"
        label="Rating"
        variant="outlined"
      />
      <TextField
        error={formik.touched.year ? formik.errors.year : ""}
        helperText={formik.touched.year ? formik.errors.year : ""}
        value={formik.values.year}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="year"
        name="year"

        label="Release year"
        variant="outlined"
      />
      <div className="row">
        <Button
          type="submit"
          variant="contained"
        >
          Add
        </Button>
        <Button onClick={() => history.goBack()} variant="contained">
          <ArrowBackIosNewIcon />
          Back
        </Button>
      </div>
    </form>
  );
}

export default AddMovie;
