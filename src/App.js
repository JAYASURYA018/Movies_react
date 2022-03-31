import { Switch, useHistory, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Movie from './Movie';
import Movies from './Movies';
import NotFound from './NotFound';
import TicTacToe from './TicTacToe';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Flee from './Flee';

function App() {

  const history = useHistory();

  const initialMovies = [
    {
      name: "Mahaan",
      rating: "7.5",
      year: 2022,
      poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhSyG3uwglCuRYjKyOXKSCmJmtcRG9LsS9Z5-ca9ArJvjNPNBi",
    },
    {
      name: "365 dni",
      rating: "3.0",
      year: 2020,
      poster: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1644184331/amc-cdn/production/2/movies/45900/45869/PosterDynamic/134454.jpg",
    },
    {
      name: "Hridayam",
      rating: "5.0",
      year: 2022,
      poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hridayam-et00317916-18-11-2021-07-42-12.jpg",
    },
    {
      name: "Bachelor",
      rating: "5.1",
      year: 2022,
      poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Bachelor_2021_film.jpg",
    },
    {
      name: "Pushpa: The Rise",
      rating: "8.2",
      year: 2021,
      poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfBsJnWMSk716p9HN_K8eqgNMpoiq2koPWy8pSgHUmj4JbwAd4",
    }
  ]
  const [ movies, setmovies ] = useState(initialMovies)

  return (
    <>
      <AppBar className='margin-zero' position="static">
        <Toolbar className='spacearound'>
          <Button color="inherit" onClick={() => { history.push("/") }}>Home</Button>
          <Button color="inherit" onClick={() => { history.push("/movies") }}>Movies</Button>
          <Button color="inherit" onClick={() => { history.push("/flames") }}>Flames</Button>
          <Button color="inherit" onClick={() => { history.push("/tic-tac-toe") }}>Tic Tac Toe</Button>
        </Toolbar>
      </AppBar>
      <Switch>
      <Route path="/flames">
        <Flee/>
        </Route>
        <Route exact path="/movies">
          <Movies setmovies={setmovies} movies={movies} />
        </Route>
        <Route exact path="/flims">
          <Redirect to="/movies" />
        </Route>
        <Route exact path="/tic-tac-toe">
          <TicTacToe />
        </Route>
        <Route exact path="/movies/:id">
          <Movie setmovies={setmovies} movies={movies} />
        </Route>
        <Route exact path="/">
          Happy Browsing😁❤
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>

    </>
  );
}

export default App;