import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

function Movie({ movies }) {
    const { id } = useParams();
    console.log(id);
    const { name, poster, year, rating } = movies[ id ]
    return (
        <section className='center'>
            <div className="card">
                <img className="poster" src={poster} alt="Movie poster"></img>
                <h1>{name}</h1>
                <h2>Released year : {year}</h2>
                <h2>Rating : {rating > 5 ? <span style={{ color: "green" }}>{rating}</span> : <span style={{ color: "red" }}>{rating}</span>} </h2>
            </div>
        </section>
    )
}

export default Movie