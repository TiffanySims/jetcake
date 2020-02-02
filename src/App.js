import React from "react";
import Home from "./Homepage/Home";
import "./css/App.css";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import Profile from "./Profile/Profile";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
