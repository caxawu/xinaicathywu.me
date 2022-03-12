/* eslint-disable max-len */
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import FadeIn from 'react-fade-in';

import Footer from './footer';

import beyond from '../img/other-works/beyond.png';
import journey from '../img/other-works/journey.png';
import storyteller from '../img/other-works/storyteller.png';

import stickies from '../img/other-works/stickies.png';
import buzzfeed from '../img/other-works/buzzfeed.png';
import adventures from '../img/other-works/adventures.png';

import chefsKiss from '../img/other-works/chefsKiss.png';

const GameDesignStudio = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);

  return (
    <div className="other-section">
      <div className="top-header">
        <div className="title">
          Game Design Studio (FILM 51)
        </div>
        <div className="tools">
          Twine, Unity
        </div>
      </div>
      <div className="body">
        <div className="item">
          <img src={beyond} alt="beyond" loading="lazy" />
          <div className="description">
            <div className="name">
              Beyond
            </div>
            <div className="description1">
              Find your way out of the Underground.
            </div>
            <div className="description2">
              Responding to anxiety by portraying the different ways anxiety can manifest.
            </div>
            <div className="links">
              <a href="https://drive.google.com/drive/folders/1w-DcB4q4dI4O4JLZijAd_tjJ0m9ni3e-" target="_blank" rel="noreferrer">
                Play Beyond
              </a>
              <a href="https://www.youtube.com/watch?v=Wrmlwu4vtco" target="_blank" rel="noreferrer">
                Watch the gameplay
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={journey} alt="journey" loading="lazy" />
          <div className="description">
            <div className="name">
              Journey
            </div>
            <div className="description1">
              A stranger stumbles into the village. A researcher—separated from the rest of the expedition team.
            </div>
            <div className="description2">
              Raising awareness about climate-related challenges facing the Arctic.
            </div>
            <div className="links">
              <a href="https://rcweb.dartmouth.edu/~f00354t/JourneyFinal.html" target="_blank" rel="noreferrer">
                Play Journey
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={storyteller} alt="storyteller" loading="lazy" />
          <div className="description">
            <div className="name">
              Storyteller
            </div>
            <div className="description1">
              Peppy and Poppy want to be storytellers when they grow up. Help them with grammar as they tell a story.
            </div>
            <div className="description2">
              Helping to increase literacy amongst non-native English speakers.
            </div>
            <div className="links">
              <a href="https://rcweb.dartmouth.edu/~f00354t/StorytellerFinal.html" target="_blank" rel="noreferrer">
                Play Storyteller
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FullStackWebDev = (props) => {
  return (
    <div className="other-section">
      <div className="top-header">
        <div className="title">
          Full-Stack Web Development (COSC 52)
        </div>
        <div className="tools">
          MERN stack (MongoDB, Express, React, Node.js), Firebase, HTML, CSS
        </div>
      </div>
      <div className="body">
        <div className="item">
          <img src={stickies} alt="stickies" loading="lazy" />
          <div className="description">
            <div className="name">
              Stickies
            </div>
            <div className="description1">
              Capture your thoughts and share them on this collaborative post-it notes board.
            </div>
            <div className="description2">
              A real-time collaborative post-it note app that supports markdown notation.
            </div>
            <div className="links">
              <a href="https://trusting-dubinsky-776c89.netlify.app/" target="_blank" rel="noreferrer">
                Add a note
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={buzzfeed} alt="buzzfeed" loading="lazy" />
          <div className="description">
            <div className="name">
              Buzzfeed Quiz
            </div>
            <div className="description1">
              Find out what sitcom you naturally embody (and maybe find your next favorite show!)
            </div>
            <div className="description2">
              A Buzzfeed-style quiz that uses HTML, CSS, Javascript, and jquery.
            </div>
            <div className="links">
              <a href="https://dartmouth-cs52-21s.github.io/lab2-caxawu/" target="_blank" rel="noreferrer">
                Take the quiz
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={adventures} alt="adventures" loading="lazy" />
          <div className="description">
            <div className="name">
              Track Your Adventures
            </div>
            <div className="description1">
              Display your photos on digital polaroids attached to blinking string lights.
            </div>
            <div className="description2">
              A CRUD-style content app that uses React, Redux and React-Router.
            </div>
            <div className="links">
              <a href="https://wizardly-johnson-50073f.netlify.app/" target="_blank" rel="noreferrer">
                Track an adventure
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UIPractice = (props) => {
  return (
    <div className="other-section">
      <div className="top-header">
        <div className="title">
          UI Practice
        </div>
        <div className="tools">
          Figma
        </div>
      </div>
      <div className="body">
        <div className="item">
          <img src={chefsKiss} alt="chefsKiss" loading="lazy" />
          <div className="description">
            <div className="name">
              Chef&apos;s Kiss
            </div>
            <div className="description1">
              Browse, view, and share your favorite recipes.
            </div>
            <div className="description2">
              A UI redesign of a recipe app.
            </div>
            <div className="links">
              <a href="https://www.figma.com/proto/zK0CuStIunpXQACQ0PuRqS/Practice?page-id=1%3A736&node-id=5%3A230&viewport=241%2C48%2C0.1&scaling=min-zoom&starting-point-node-id=5%3A22" target="_blank" rel="noreferrer">
                Check out the prototype
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Other = (props) => {
  return (
    <div className="content">
      <div className="spacer" />
      <FadeIn>
        <GameDesignStudio />
        <FullStackWebDev />
        <UIPractice />
      </FadeIn>
      <Footer />
    </div>
  );
};

export default Other;
