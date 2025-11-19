import React, { useState } from "react";
import './../styles/App.css';
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom/cjs/react-router-dom";
import Login from "./Login";
import PlayGround from "./PlayGround";

const App = () => {
  const [login,setLogin]=useState(false);

  const handleLogout = () => setLogin(false);

  return (
    <Router>
      {
        login ? (
          <>
            <p>Logged in, Now you can enter Playground</p>
            <button onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <p>You are not authenticated, Please login first</p>
        )
      }

      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to={login ? "/playground" : "/login"}>PlayGround</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/login" render={() => <Login login={login} setLogin={setLogin} />} />
        <Route path="/playground" render={() => <PlayGround login={login} />} />
      </Switch>
    </Router>
  )
}

export default App;
