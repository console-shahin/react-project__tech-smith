import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
      <Route exact path="/" render={ Home } />
        <Route exact path="/about" render={ About }/>
        <Route exact path="/contact" render={ Contact }/>
        <Route exact path="/service" render={ Service } />
        <Redirect to="/"/>
      </Switch>
    </>
  );
}

export default App;
