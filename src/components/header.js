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
import Footer from './footer';

import linkedin from '../img/nav/linkedin.png';
import mail from '../img/nav/mail.png';
import resume from '../img/nav/resume.png';

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
      <Footer />
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
      <Footer />
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
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <Router>
      <NavLink exact to="/"><div className="logo" /></NavLink>
      <div className="header">
        <div className="logo">
          <a href="https://xinaicathywu.me/" rel="noreferrer">
            Xinai (Cathy) Wu
          </a>
        </div>
        <div className="nav">
          <Nav />
        </div>
      </div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/xinai-cathy-wu" target="_blank" rel="noreferrer" id="linkedin">
          <img src={linkedin} alt="LinkedIn icon" loading="eager" />
          <span id="text">linkedin</span>
        </a>
        <a href="mailto:xinai.cathy.wu@gmail.com" target="_blank" rel="noreferrer" id="mail">
          <img src={mail} alt="Mail icon" loading="eager" />
          <span id="text">mail</span>
        </a>
        <a href="https://drive.google.com/file/d/11bBEf4DXBEegXaYLejCiFg3O86Q9wAJ2/view?usp=sharing" target="_blank" rel="noreferrer" id="resume">
          <img src={resume} alt="Resume icon" loading="eager" />
          <span id="text">resume</span>
        </a>
      </div>
      <Routes>
        <Route exact path="/" element={<About />} />
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
