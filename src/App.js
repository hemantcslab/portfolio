import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Portfolio from './component/portfolio';
import About from './component/about';
import Contact from './component/contact';
import Sidebar from './component/sidebar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="l-p1">
          <Sidebar />
        </div>

        <div className="r-p1">
          <Switch>
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Redirect exact from="/" to="/portfolio" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
