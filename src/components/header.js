// import React, { Component } from 'react';
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, NavLink,
} from 'react-router-dom';
import '../style.scss';
import About from './about';
import Other from './other';
import Portfolio from './portfolio';
import Art from './art';

const Nav = (props) => {
  return (
    <ul>
      <li><NavLink to="/">about</NavLink></li>
      <li><NavLink to="/portfolio">portfolio</NavLink></li>
      <li><NavLink to="/other-works">other works</NavLink></li>
      <li><NavLink to="/art">art</NavLink></li>
    </ul>
  );
};

const Header = () => {
  return (
    <Router>
      <NavLink exact to="/"><div className="logo" /></NavLink>
      <div className="header">
        <div className="logo">Xinai (Cathy) Wu</div>
        <div className="nav">
          <Nav />
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={About} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/other-works" element={<Other />} />
        <Route path="/art" element={<Art />} />
        <Route render={() => (<div>Page not found </div>)} />
      </Routes>
    </Router>
  );
};

export default Header;
