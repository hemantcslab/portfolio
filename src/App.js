import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Portfolio from './component/portfolio';
import About from './component/about';
import Contact from './component/contact';
import Sidebar from './component/sidebar';
import Resume from './component/resume';
import Blog from './component/blog';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="l-p1">
          <Sidebar />
        </div>

        <div className="r-p1">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/resume" component={Resume} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Redirect exact from="/" to="/about" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
