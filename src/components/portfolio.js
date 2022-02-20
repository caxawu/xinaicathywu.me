/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import FadeIn from 'react-fade-in';

import Footer from './footer';

import roomSearch from '../img/portfolio/roomSearch.png';
import lending from '../img/portfolio/lending-temp.png';
import artrek from '../img/portfolio/artrek.png';
import anivision from '../img/portfolio/anivision.png';
import spaces from '../img/portfolio/spaces-temp.png';
import spot from '../img/portfolio/spot-temp.png';

const Portfolio = (props) => {
  return (
    <div className="content">
      <FadeIn>
        <div className="secondary-nav">
          <ul>
            <li id="header">
              web/mobile
            </li>
          </ul>
        </div>
        <div className="portfolio-row">
          <div className="card">
            <a href="https://docs.google.com/presentation/d/1oQKbHJpGnIfVUPFwohTbwj-nYtcfMaSjgIJReMY9gRM/edit?usp=sharing" target="_blank" rel="noreferrer">
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
          <div className="card">
            <a href="#" rel="noreferrer">
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
          <div className="card">
            <a href="https://devpost.com/software/artrek" target="_blank" rel="noreferrer">
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
        </div>

        <div className="secondary-nav">
          <ul>
            <li id="header">
              AR/VR
            </li>
          </ul>
        </div>
        <div className="portfolio-row">
          <div className="card">
            <a href="https://docs.google.com/presentation/d/1qzPp0H9X9cttaFRP_yWeZjr-L2JkCzEeV6I9AFIzfvE/edit?usp=sharing" target="_blank" rel="noreferrer">
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
          <div className="card">
            <a href="#" rel="noreferrer">
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
                    <li>Digital Arts Culmination Project</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="#" rel="noreferrer">
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
                    <li>Hackathon</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </FadeIn>
      <Footer />
    </div>
  );
};

export default Portfolio;
