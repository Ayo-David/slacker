import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'; //it must be in these order

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Login from './Login';
import { useDataLayer } from './StateProvider';

function App() {
  //const [user, setUser] = useState("null");
  const [{ user }] = useDataLayer();

  return (

    <div className="app">
      <Router>
        {!user ? (<Login />) : (
          <>
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
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
