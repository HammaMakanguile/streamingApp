import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssBaseline />
      <main>
        <Switch>
          <Route exact path="/">
            <h1>movies</h1>
          </Route>
          <Route exact path="/movie/:id">
            <h1>movie information</h1>
          </Route>
          <Route exact path="/actor/:id">
            <h1>Actors</h1>
          </Route>
          <Route exact path="/profile/:id">
            <h1>profile</h1>
          </Route>
        </Switch>

      </main>
    </div>
  );
}

export default App;
