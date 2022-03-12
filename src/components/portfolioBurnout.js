import React from 'react';
import FadeIn from 'react-fade-in';

import Footer from './footer';

import clinicianBurnout from '../img/portfolio/burnout/clinicianBurnout.png';

const PortfolioSpot = (props) => {
    return (
      <FadeIn>
        <div className="content">
          <div id="burnout-top-background" className="top-card">
            <div id="text-white" className="text">
              <div className="title">
                Alleviating clinician burnout
              </div>
              <div className="role">
                UX Researcher | UI/UX Designer
              </div>
              <div className="headline">
                To reduce clinician burnout at the Dartmouth-Hitchcock Medical Center, we created a guide that can use to facilitate
                collaborative sessions between clinicians and administrators on departmental changes in order mitigate feelings of burnout
                before they develop.
              </div>
              <a id="spot-button"
                className="white-button"
                href="https://drive.google.com/file/d/19Fan3qfljtUrDG37EbjOYMStpVL_XohO/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >Facilitator&apos;s guide
              </a>
            </div>
          </div>
          <ul className="secondary-info">
            <ul className="list">
              <li id="title">TEAM</li>
              <li>Kat Yang</li>
              <li>Christina Schoeller</li>
              <li>Edward Johnson</li>
            </ul>
            <ul className="list">
              <li id="title">TYPE</li>
              <li>Human-Centered Design <br />Capstone Project</li>
            </ul>
            <ul className="list">
              <li id="title">TIME</li>
              <li>20 weeks</li>
            </ul>
            <ul className="list">
              <li id="title">TOOLS</li>
              <li>Figma</li>
            </ul>
          </ul>
          <a id="spot-button"
            className="jump-button"
            href="https://drive.google.com/file/d/1LAEFag4zx8Gf4m8dddNb4qKcPVHGf9Fw/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >Read the full report
          </a>
          <img id="burnout-img" src={clinicianBurnout} alt="Ranking of Lending Concerns" />
          <Footer />
        </div>
      </FadeIn>
    );
  };

  export default PortfolioSpot;
