import React from 'react';
import './App.css';
import Banner from './Banner';
import Contact from './Contact';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Blog from './Blog';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content-body">
          <Route exact path="/">
            <Banner active={"contact"}></Banner>
            <Contact/>
          </Route>
          <Route path="/contact">
            <Banner active={"contact"}></Banner>
            <Contact/>
          </Route>
          <Route path="/experience">
            <Banner active={"experience"}></Banner>
            <Experience/>
          </Route>
          <Route path="/portfolio">
            <Banner active={"portfolio"}></Banner>
            <Portfolio/>
          </Route>
          <Route path="/resume">
            <Banner active={"resume"}></Banner>
            <Resume/>
          </Route>
          <Route path="/blog">
            <Banner active={"blog"}></Banner>
            <Blog/>
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
