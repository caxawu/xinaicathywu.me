import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import FadeIn from 'react-fade-in';

import Footer from './footer';

import spot1 from '../img/portfolio/spot/spot1.png';
import spot2 from '../img/portfolio/spot/spot2.png';

const trackLinkClick = (category, action, label) => {
  console.log('GA event:', category, ':', action, ':', label);
  ReactGA.event({
    category,
    action,
    label,
 });
};

const PortfolioSpot = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);
    return (
      <FadeIn>
        <div className="content">
          <div id="spot-top-background" className="top-card">
            <div id="text-white" className="text">
              <div className="title">
                Spot the Difference
              </div>
              <div className="role">
                Designer
              </div>
              <div className="headline">
                Spot-the-Difference is a reimagination of the classic game in VR. Bringing it to a 3D space allows players to take full advantage
                of the exploratory nature of the game as they discover the differences between two scenes.
              </div>
              <a id="spot-button"
                className="white-button"
                href="https://drive.google.com/file/d/1QCeNtvRbkLeDW_V3x3m3bzVwI5uii3H-/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
                onClick={trackLinkClick.bind(this, 'Portfolio/Spot', 'Spot apk Click', 'Portfolio Links')}
              >apk for Oculus Go
              </a>
            </div>
          </div>
          <ul className="secondary-info">
            <ul className="list">
              <li id="title">TEAM</li>
              <li>Sofia<br />Stanescu-Bellu</li>
            </ul>
            <ul className="list">
              <li id="title">TYPE</li>
              <li>AR/VR Design<br />Class Project</li>
            </ul>
            <ul className="list">
              <li id="title">TIME</li>
              <li>2 weeks</li>
            </ul>
            <ul className="list">
              <li id="title">TOOLS</li>
              <li>Maya</li>
              <li>Unity</li>
            </ul>
          </ul>
          <a id="spot-button"
            className="jump-button"
            href="#anchor"
            rel="noreferrer"
            onClick={trackLinkClick.bind(this, 'Portfolio/Spot', 'Spot Jump Click', 'Portfolio Jump to Prototype')}
          >Jump to prototype
          </a>
          <div className="info-section">
            <div id="spot-color" className="section-title">ROLE</div>
            <div className="text-block">
              <b>3D Modelling:</b> I used Maya to 3D model the environmental assets in a low-poly style.
              <br /><br />
              <b>Scene design:</b> I arranged my models to create a nature environment that looked appealing and was fun to be in. I pulled in assets like the ocean
              and sky texture from the Unity store to make the scenes feel complete and polished.
              <br /><br />
              <b>Experience design:</b> To add extra delight, I animated assets which include a butterfly that flutters around the scene, reeds that sway in the wind,
              and fish that swim in the pond. I also added bird chirps in the background to help make the experience more immersive.
            </div>
          </div>

          <div className="info-section">
            <div id="spot-color" className="section-title">CHALLENGE</div>
            <div id="spot-text" className="text-callout">
              Create a VR experience that is meaningful, informative, or beautiful.
            </div>
            <div className="text-block">
              This project was my first try at creating a VR experience from scratch. Having just learned the basics of Unity and creating VR content in class,
              this project let us apply what we had just learned in any way we wanted. Because the project brief was so open-ended, my partner and I agreed that
              we wanted to create something meaningful that made VR not just a gimmick, but an integral part of the experience.
            </div>
          </div>

          <div className="info-section">
            <div id="spot-color" className="section-title">IDEATION</div>
            <div className="text-block">
              Because there were so many different directions we could go, my partner and I first thought of ways in which VR could add to an experience.
              We wanted to take full advantage of the immersiveness and physicality of VR.
              <br /><br />
              While looking to games for inspiration, we found our way to Spot the Difference games. These games have always been static and two-dimensional—what
              if we reimagined them into an experience where players could be dropped into the world and actually explore environments?
            </div>
            <div id="spot-text" className="text-callout">
              The goal: Create a fun and delightful experience that combines nostalgia from classic Spot the Difference games with the newest innovations in technology with VR.
            </div>
          </div>

          <div className="info-section">
            <div id="spot-color" className="section-title">GAMEPLAY</div>
            <div className="text-block">
              Players start off in a mini lobby scene with options to go into two scenes: the actual and the differences scenes. They can explore the real scene first,
              then head into the differences scene to try and spot the elements that are different. Players have five lives and have six differences to identify.
              They simply point and click at objects in the differences scenes to make their guess.
            </div>
            <img src={spot1} alt="Screenshot 1" width="70%" />
            <img src={spot2} alt="Screenshot 2" width="70%" />
          </div>

          <div id="anchor" className="info-section">
            <div id="spot-color" className="section-title">WALKTHROUGH</div>
            <iframe width="100%"
              height="850"
              src="https://www.youtube.com/embed/5YAZ2gzwauc"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Spot the Difference Walkthrough"
            />
          </div>

          <div className="info-section">
            <div id="spot-color" className="section-title">TAKEAWAYS</div>
            <div className="text-block">
              This project was definitely a challenge having only two weeks to create something original from concept to implementation. Keeping the scope of the project small
              was definitely really helpful for us as we were also trying to apply what we had just learned about Unity and developing for VR in class. As I was also new to
              Maya and had only just learned the basics, it was a lot of trial and error in modelling, rigging, and animating the assets.
              <br /><br />
              As someone who very much learns by doing, this project allowed me to quickly gain a better understanding of designing and developing for VR. I think we managed
              to pull off a lot in two weeks to make our final product feel like a complete and polished experience—especially for our first foray into VR!
            </div>
          </div>

          <Footer />
        </div>
      </FadeIn>
    );
  };

  export default PortfolioSpot;
