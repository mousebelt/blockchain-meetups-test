import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Event from './pages/Event'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/event/:id" component={Event} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}


export default (App);
