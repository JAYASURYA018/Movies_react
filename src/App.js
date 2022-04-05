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

function App() {

  const history = useHistory();

  const[togglemode,changgeTogglemode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: togglemode?"light":"dark",
    },
  });

  
  return (
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
        </Toolbar>
      </AppBar>
      <Switch>
      <Route path="/flames">
        <Flee/>
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
      </Paper>
      </ThemeProvider>
  );
}

export default App;