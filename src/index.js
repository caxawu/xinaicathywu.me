import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Routes, Route, NavLink,
} from 'react-router-dom';
import ReactGA from 'react-ga';
import './style.scss';
import About from './components/about';
import Other from './components/other';
import Portfolio from './components/portfolio';
import PortfolioLending from './components/portfolioLending';
import PortfolioSpaces from './components/portfolioSpaces';
import PortfolioSpot from './components/portfolioSpot';
import PortfolioBurnout from './components/portfolioBurnout';
import {
  Digital, Paintings, Drawings,
} from './components/art';
import Footer from './components/footer';

import linkedin from './img/nav/linkedin.png';
import mail from './img/nav/mail.png';
import resume from './img/nav/resume.png';

ReactGA.initialize('UA-155129215-2');

const trackLinkClick = (category, action, label) => {
  console.log('GA event:', category, ':', action, ':', label);
  ReactGA.event({
    category,
    action,
    label,
 });
};

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
const Scroll = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };
  return (
    <>
      {showButton && (
        <button type="button"
          className="back-to-top"
          onClick={(event) => [scrollToTop(), trackLinkClick('Nav', 'Back to Top Click', 'Back to Top Button')]}
        >
          <div className="up-arrow" />
        </button>
      )}
    </>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
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
          <a href="https://www.linkedin.com/in/xinai-cathy-wu"
            target="_blank"
            rel="noreferrer"
            id="linkedin"
            onClick={trackLinkClick.bind(this, 'Contact Links', 'LinkedIn Click', 'Sticky Contact Buttons')}
          >
            <img src={linkedin} alt="LinkedIn icon" loading="eager" />
            <span id="text">linkedin</span>
          </a>
          <a href="mailto:xinai.cathy.wu@gmail.com"
            target="_blank"
            rel="noreferrer"
            id="mail"
            onClick={trackLinkClick.bind(this, 'Contact Links', 'Mail Click', 'Sticky Contact Buttons')}
          >
            <img src={mail} alt="Mail icon" loading="eager" />
            <span id="text">mail</span>
          </a>
          <a href="https://drive.google.com/file/d/11bBEf4DXBEegXaYLejCiFg3O86Q9wAJ2/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            id="resume"
            onClick={trackLinkClick.bind(this, 'Contact Links', 'Resume Click', 'Sticky Contact Buttons')}
          >
            <img src={resume} alt="Resume icon" loading="eager" />
            <span id="text">resume</span>
          </a>
        </div>
        <Scroll />
        <Routes>
          <Route exact path="/" element={<About />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/smartphone-lending" element={<PortfolioLending />} />
          <Route path="/portfolio/spaces" element={<PortfolioSpaces />} />
          <Route path="/portfolio/spot-the-difference" element={<PortfolioSpot />} />
          <Route path="/portfolio/clinician-burnout" element={<PortfolioBurnout />} />

          <Route path="/other-works" element={<Other />} />
          <Route path="/art/digital-art" element={<DigitalPage />} />
          <Route path="/art/paintings" element={<PaintingsPage />} />
          <Route path="/art/drawings" element={<DrawingsPage />} />
          <Route render={() => (<div>Page not found </div>)} />
        </Routes>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
