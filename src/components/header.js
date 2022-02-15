// import React, { Component } from 'react';
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, NavLink,
} from 'react-router-dom';
import '../style.scss';
import About from './about';
import Other from './other';
import Portfolio from './portfolio';
import {
  Digital, Paintings, Drawings,
} from './art';

const Nav = (props) => {
  return (
    <ul>
      <li><NavLink to="/">about</NavLink></li>
      <li><NavLink to="/portfolio">portfolio</NavLink></li>
      <li><NavLink to="/other-works">other works</NavLink></li>
      <li><NavLink to="/art/digital-art">studio & digital art</NavLink></li>
    </ul>
  );
};

const SecondaryNav = (props) => {
  return (
    <ul>
      <li><NavLink to="/art/digital-art">digital art</NavLink></li>
      |
      <li><NavLink to="/art/paintings">paintings</NavLink></li>
      |
      <li><NavLink to="/art/drawings">drawings</NavLink></li>
    </ul>
  );
};

const DigitalPage = (props) => {
  return (
    <div className="content">
      <div className="secondary-nav">
        <SecondaryNav />
      </div>
      <Digital />
    </div>
  );
};

const PaintingsPage = (props) => {
  return (
    <div className="content">
      <div className="secondary-nav">
        <SecondaryNav />
      </div>
      <Paintings />
    </div>
  );
};

const DrawingsPage = (props) => {
  return (
    <div className="content">
      <div className="secondary-nav">
        <SecondaryNav />
      </div>
      <Drawings />
    </div>
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
        <Route path="/art/digital-art" element={<DigitalPage />} />
        <Route path="/art/paintings" element={<PaintingsPage />} />
        <Route path="/art/drawings" element={<DrawingsPage />} />
        <Route render={() => (<div>Page not found </div>)} />
      </Routes>
    </Router>
  );
};

export default Header;
