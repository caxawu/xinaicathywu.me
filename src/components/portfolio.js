/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import FadeIn from 'react-fade-in';

import Footer from './footer';

import roomSearch from '../img/portfolio/roomSearch.png';
import burnout from '../img/portfolio/burnout.png';
import artrek from '../img/portfolio/artrek.png';

import anivision from '../img/portfolio/anivision.png';
import spaces from '../img/portfolio/spaces.png';
import spot from '../img/portfolio/spot.png';

import lending from '../img/portfolio/lending.png';

const trackLinkClick = (category, action, label) => {
  console.log('GA event:', category, ':', action, ':', label);
  ReactGA.event({
    category,
    action,
    label,
 });
};

const ClinicianBurnout = (props) => {
  return (
    <div className="card">
      <a href="/portfolio/clinician-burnout"
        rel="noreferrer"
        onClick={trackLinkClick.bind(this, 'Portfolio/Web', 'Burnout Click', 'Portfolio Card Nav')}
      >
        <img src={burnout} alt="Clinician burnout" loading="eager" />
        <div className="description">
          <div className="text">
            Alleviating clinician burnout at the Dartmouth-Hitchcock Medical Center.
          </div>
          <div className="tags">
            <ul id="left">
              <li>UX Research</li>
              <li>UI/UX Design</li>
            </ul>
            <ul id="right">
              <li>Human-Centered Design<br />Capstone Project</li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};
const DartmouthRoomSearch = (props) => {
  return (
    <div className="card">
      <a href="https://docs.google.com/presentation/d/1oQKbHJpGnIfVUPFwohTbwj-nYtcfMaSjgIJReMY9gRM/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
        onClick={trackLinkClick.bind(this, 'Portfolio/Web', 'Room Search Click', 'Portfolio Card Nav')}
      >
        <img src={roomSearch} alt="Dartmouth Room Search" loading="eager" />
        <div className="description">
          <div className="text">
            A centralized platform to supplement the Dartmouth housing selection process.
          </div>
          <div className="tags">
            <ul id="left">
              <li>UI/UX Design</li>
            </ul>
            <ul id="right">
              <li>Personal project</li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};
const ARTrek = (props) => {
  return (
    <div className="card">
      <a href="https://devpost.com/software/artrek"
        target="_blank"
        rel="noreferrer"
        onClick={trackLinkClick.bind(this, 'Portfolio/Web', 'ARTrek Click', 'Portfolio Card Nav')}
      >
        <img src={artrek} alt="ARTrek" loading="eager" />
        <div className="description">
          <div className="text">
            A &quot;Waze&quot;-like indoor navigation system.
          </div>
          <div className="tags">
            <ul id="left">
              <li>UI/UX Design</li>
              <li>Development</li>
            </ul>
            <ul id="right">
              <li>Hackathon</li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};
const Anivision = (props) => {
  return (
    <div className="card">
      <a href="https://docs.google.com/presentation/d/1qzPp0H9X9cttaFRP_yWeZjr-L2JkCzEeV6I9AFIzfvE/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
        onClick={trackLinkClick.bind(this, 'Portfolio/XR', 'Anivision Click', 'Portfolio Card Nav')}
      >
        <img src={anivision} alt="Anivision" loading="eager" />
        <div className="description">
          <div className="text">
            Learn in a more experiential and delightful way by exploring the world through the eyes of an animal.
          </div>
          <div className="tags">
            <ul id="left">
              <li>Design</li>
              <li>Development</li>
            </ul>
            <ul id="right">
              <li>DALI Lab</li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};
const Spaces = (props) => {
  return (
    <div className="card">
      <a href="/portfolio/spaces"
        rel="noreferrer"
        onClick={trackLinkClick.bind(this, 'Portfolio/XR', 'Spaces Click', 'Portfolio Card Nav')}
      >
        <img src={spaces} alt="Spaces" loading="eager" />
        <div className="description">
          <div className="text">
            A VR perspective puzzle game in an impossible space based on M.C. Escher&apos;s &quot;Relativity&quot; drawing.
          </div>
          <div className="tags">
            <ul id="left">
              <li>Design</li>
            </ul>
            <ul id="right">
              <li>Digital Arts<br />Capstone Project</li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};
const SpotTheDifference = (props) => {
  return (
    <div className="card">
      <a href="/portfolio/spot-the-difference"
        rel="noreferrer"
        onClick={trackLinkClick.bind(this, 'Portfolio/XR', 'Spot Click', 'Portfolio Card Nav')}
      >
        <img src={spot} alt="Spot-the-Difference" loading="eager" />
        <div className="description">
          <div className="text">
            A classic game reimagined in VR.
          </div>
          <div className="tags">
            <ul id="left">
              <li>UI/UX Design</li>
              <li>Development</li>
            </ul>
            <ul id="right">
              <li>AR/VR Design<br />Class Project</li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};
const SmartphoneLending = (props) => {
  return (
    <div className="card">
      <a href="/portfolio/smartphone-lending"
        rel="noreferrer"
        onClick={trackLinkClick.bind(this, 'Portfolio/Web', 'Lending Click', 'Portfolio Card Nav')}
      >
        <img src={lending} alt="Smartphone Lending" loading="eager" />
        <div className="description">
          <div className="text">
            Designing technology around the way people interact with one another.
          </div>
          <div className="tags">
            <ul id="left">
              <li>UX Research</li>
              <li>UI/UX Design</li>
            </ul>
            <ul id="right">
              <li>HCI Lab</li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};

const Portfolio = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);

  return (
    <div className="content">
      <FadeIn>
        <div className="secondary-nav">
          <ul>
            <li id="header">
              web/mobile/interaction
            </li>
          </ul>
        </div>
        <div className="portfolio-row">
          <ClinicianBurnout />
          <DartmouthRoomSearch />
          <ARTrek />
        </div>
        <div className="secondary-nav">
          <ul>
            <li id="header">
              AR/VR
            </li>
          </ul>
        </div>
        <div className="portfolio-row">
          <Anivision />
          <Spaces />
          <SpotTheDifference />
        </div>

        <div className="secondary-nav">
          <ul>
            <li id="header">
              archived projects
            </li>
          </ul>
        </div>
        <div className="portfolio-row">
          <SmartphoneLending />
        </div>
      </FadeIn>
      <Footer />
    </div>
  );
};

export default Portfolio;
