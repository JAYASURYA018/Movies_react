import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
      <>
      <h1>Welcome, Where you wanna go???</h1>
      <Link to="/movies">Movies List</Link><br></br>
      <Link to="/tic-tac-toe">Tic Tac Toe</Link>
      </>
  )
}

export default Home