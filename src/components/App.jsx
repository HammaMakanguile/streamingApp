import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import { Actors, Profile, Movies, MovieInformation, NavBar } from './index';
import './styles.css';

// import useStyles from './styles';

function App() {
  // const classes = useStyles();

  return (
    <div className="root">
      <CssBaseline />
      <NavBar />
      <main className="content">
        <div className="toolbar" />
        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>

      </main>
    </div>
  );
}

export default App;
