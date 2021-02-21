import logo from "./logo.svg";
import Login from "./components/login/login";
import Menu from "./components/menu/menu";
import Users from "./components/users/users";
import Recursos from "./components/recursos/recursos";
import Recurso from "./components/recursos/recurso";



import React, { Fragment, useState, useEffect } from "react";

import "./App.css";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const getUser = (user) => {
    setUser(user);
  };

  return (
    <div className="App">
      <HashRouter>
        <Menu getUser={getUser} user={user} />
        <Route path="/login">
          <Login getUser={getUser} />
        </Route>
        <Route exact path="/recursos">
          <Recursos />
        </Route>        
        <Route exact path="/recurso/:id">
          <Recurso />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
