
import React, { useState } from "react";
import './../styles/App.css';
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom/cjs/react-router-dom";
import Login from "./Login";
import PlayGround from "./PlayGround";
const App = () => {
  const [login,setLogin]=useState(false);
  return (
    <Router>
      {
        login?<p>Logged in. Now you can enter Playground</p>:<p>You are not authenticated, Please login first</p>
      }
      <nav>
        <ul>
          <li><Link to="/login" >Login</Link></li>
          <li><Link to="/playground">PlayGround</Link></li>
        </ul>
        
      </nav>
      <Switch>
        <Route exact path="/login" render={
          ()=><Login login={login} setLogin={setLogin} />
        }></Route>
        <Route path="/playground" render={
          ()=><PlayGround login={login}/>
        } />
        
      </Switch>
    </Router>
  )
}

export default App
