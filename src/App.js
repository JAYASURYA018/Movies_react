<<<<<<< HEAD
import { Switch, useHistory, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Movie from "./Movie";
import Movies from "./Movies";
import NotFound from "./NotFound";
import TicTacToe from "./TicTacToe";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Flee from "./Flee";
=======
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import IconButton from '@mui/material/IconButton';
import AddMovie from './AddMovie';
import About from './About';
import Home from './Home';
import EditMovie from './EditMovie';
>>>>>>> 60eaa0673552db5a588948150c95c3a20217cab8

function App() {
  const history = useHistory();

<<<<<<< HEAD
  const initialMovies = [
    {
      name: "Mahaan",
      rating: "7.5",
      year: 2022,
      poster:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhSyG3uwglCuRYjKyOXKSCmJmtcRG9LsS9Z5-ca9ArJvjNPNBi",
    },
    {
      name: "365 dni",
      rating: "3.0",
      year: 2020,
      poster:
        "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1644184331/amc-cdn/production/2/movies/45900/45869/PosterDynamic/134454.jpg",
    },
    {
      name: "Hridayam",
      rating: "5.0",
      year: 2022,
      poster:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hridayam-et00317916-18-11-2021-07-42-12.jpg",
    },
    {
      name: "Bachelor",
      rating: "5.1",
      year: 2022,
      poster:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Bachelor_2021_film.jpg",
    },
    {
      name: "Pushpa: The Rise",
      rating: "8.2",
      year: 2021,
      poster:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfBsJnWMSk716p9HN_K8eqgNMpoiq2koPWy8pSgHUmj4JbwAd4",
    },
  ];
  const [movies, setmovies] = useState(initialMovies);
=======
  const[togglemode,changgeTogglemode] = useState(true);
>>>>>>> 60eaa0673552db5a588948150c95c3a20217cab8

  const theme = createTheme({
    palette: {
      mode: togglemode?"light":"dark",
    },
  });

  
  return (
<<<<<<< HEAD
    <>
      <AppBar className="margin-zero" position="static">
        <Toolbar className="spacearound">
          <Button
            color="inherit"
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              history.push("/movies");
            }}
          >
            Movies
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              history.push("/flames");
            }}
          >
            Flames
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              history.push("/tic-tac-toe");
            }}
          >
            Tic Tac Toe
          </Button>
=======
    <ThemeProvider theme={theme}>
      <Paper style={{minHeight:"100vh"}}>
      <AppBar position="static">
        <Toolbar style={{gap:"5vw"}} className='spacearound'>
          <Button color="inherit" onClick={() => { history.push("/") }}>Home</Button>
          <Button color="inherit" onClick={() => { history.push("/movies") }}>Movies</Button>
          <Button color="inherit" onClick={() => { history.push("/add-movies") }}>Add movies</Button>
          <Button color="inherit" onClick={() => { history.push("/flames") }}>Flames</Button>
          <Button color="inherit" onClick={() => { history.push("/tic-tac-toe") }}>Tic Tac Toe</Button>
          <Button color="inherit" onClick={() => { history.push("/about") }}>About</Button>
          <IconButton style={{marginLeft:"auto"}} color="inherit" aria-label="Go" component="span" onClick={() => { changgeTogglemode(!togglemode) }}>{togglemode?<Brightness4Icon/>:<Brightness7Icon/>}</IconButton>
>>>>>>> 60eaa0673552db5a588948150c95c3a20217cab8
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/flames">
          <Flee />
        </Route>
        <Route exact path="/movies">
          <Movies/>
        </Route>
        <Route exact path="/movies/:id">
          <Movie/>
        </Route>
        <Route exact path="/movies/edit/:id">
          <EditMovie></EditMovie>
        </Route>
        <Route exact path="/add-movies">
          <AddMovie/>
        </Route>
        <Route exact path="/flims">
          <Redirect to="/movies" />
        </Route>
        <Route exact path="/tic-tac-toe">
          <TicTacToe />
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
<<<<<<< HEAD
    </>
=======
      </Paper>
      </ThemeProvider>
>>>>>>> 60eaa0673552db5a588948150c95c3a20217cab8
  );
}

export default App;
