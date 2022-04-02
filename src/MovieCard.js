import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

function MovieCard({name,img,rating,year,id,del}){
  const history = useHistory();
  return (
    <div className="card">
      <img className="poster" src={img} alt="Movie poster"></img>
      <h1>{name}<IconButton style={{marginLeft :"auto"}} color="error" aria-label="upload picture" component="span">
    <DeleteIcon style={{marginLeft :"auto"}} onClick={()=>del(id)} />
  </IconButton></h1> 
      <h2>Released year : {year}<InfoIcon onClick={()=>{ history.push(`/movies/${id}`)}} /></h2>
      <h2>Rating : {rating>5?<span style={{color:"green"}}>{rating}</span>:<span style={{color:"red"}}>{rating}</span>} </h2>
    </div>)
}

export default MovieCard