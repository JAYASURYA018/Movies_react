import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

function MovieCard({name,img,rating,year,id,del}){
  return (
    <div className="card">
      <img className="poster" src={img} alt="Movie poster"></img>
      <h1>{name}<Button style={{marginLeft:"40px"}} onClick={()=>del(id)} variant="contained" href="#contained-buttons">
        <DeleteIcon/>
      </Button></h1> 
      <h2>Released year : {year}</h2>
      <h2>Rating : {rating>5?<span style={{color:"green"}}>{rating}</span>:<span style={{color:"red"}}>{rating}</span>} </h2>
    </div>)
}

export default MovieCard