import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'; //it must be in these order

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">

              <Chat />
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
