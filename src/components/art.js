import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import '../style.scss';
import FadeIn from 'react-fade-in';

import diorama1 from '../img/digital-art/diorama1.png';
import diorama2 from '../img/digital-art/diorama2.png';
import boatRender from '../img/digital-art/boatRender.png';
import dioramaWIP from '../img/digital-art/dioramaWIP.png';
import boatWIP from '../img/digital-art/boatWIP.png';
import plant from '../img/digital-art/plant.png';
import room from '../img/digital-art/room.png';
import kitchen from '../img/digital-art/kitchenAO.jpg';
import juice from '../img/digital-art/juice.png';
import escher from '../img/digital-art/escher.png';
// import roomBasics0 from '../img/digital-art/roomBasics0.png';
// import roomBasics1 from '../img/digital-art/roomBasics1.png';

import fruit from '../img/paintings/fruit.png';
import umbrella from '../img/paintings/umbrella.png';
import birds from '../img/paintings/birds.png';
import fence from '../img/paintings/fence.png';
import abstract from '../img/paintings/abstract.png';
import world from '../img/paintings/world.png';
import landscape from '../img/paintings/landscape.png';
import tuckDrive from '../img/paintings/tuckDrive.png';
import dragon from '../img/paintings/dragon.png';
import ghosts from '../img/paintings/ghosts.png';
import door from '../img/paintings/door.png';
import metal from '../img/paintings/metal.png';

import fruit1 from '../img/drawings/fruit1.png';
import fruit2 from '../img/drawings/fruit2.png';
import fruit3 from '../img/drawings/fruit3.png';
import fruit4 from '../img/drawings/fruit4.png';
import hand1 from '../img/drawings/hand1.png';
import hand2 from '../img/drawings/hand2.png';
import hand3 from '../img/drawings/hand3.png';
import hand4 from '../img/drawings/hand4.png';
import hand5 from '../img/drawings/hand5.png';
import bike1 from '../img/drawings/bike1.png';
import bike2 from '../img/drawings/bike2.png';
import bike3 from '../img/drawings/bike3.png';
import bike4 from '../img/drawings/bike4.png';
import bike5 from '../img/drawings/bike5.png';
import cloth from '../img/drawings/cloth.png';
import bowls from '../img/drawings/bowls.png';
import silverware1 from '../img/drawings/silverware1.png';
import silverware2 from '../img/drawings/silverware2.png';
import silverware3 from '../img/drawings/silverware3.png';
import handOutline from '../img/drawings/handOutline.png';
import skeleton1 from '../img/drawings/skeleton1.png';
import skeleton2 from '../img/drawings/skeleton2.png';
import skeleton3 from '../img/drawings/skeleton3.png';
import trombone from '../img/drawings/trombone.png';
import bailey from '../img/drawings/bailey.png';
import bellows from '../img/drawings/bellows.png';
import bird from '../img/drawings/bird.png';
import tunnel from '../img/drawings/tunnel.png';
import creature from '../img/drawings/creature.png';

const Digital = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);

  return (
    <div className="img-section">
      <FadeIn>
        <div className="row">
          <img src={diorama1} alt="Diorama 1" loading="eager" />
          <img src={diorama2} alt="Diorama 2" loading="eager" />
          <img src={boatRender} alt="boatRender" loading="eager" />
        </div>
        <div className="row">
          <img src={dioramaWIP} alt="dioramaWIP" loading="eager" />
          <img src={boatWIP} alt="boatWIP" loading="eager" />
          <img src={plant} alt="plant" loading="eager" />

        </div>
        <div className="row">
          <img src={room} alt="room" loading="eager" />
          <img src={juice} alt="juice" loading="eager" />
          <img src={escher} alt="escher" loading="eager" />

        </div>
        <div className="row">
          <img src={kitchen} alt="kitchen" loading="eager" />
          {/* <img src={roomBasics0} alt="room basics render" loading="eager" /> */}
          {/* <img src={roomBasics1} alt="room basics render angle" loading="eager" /> */}
        </div>
      </FadeIn>
    </div>
  );
};

const Paintings = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);

  return (
    <div className="img-section">
      <FadeIn>
        <div className="row">
          <div className="inner-column">
            <img src={fruit} alt="fruit" loading="eager" />
          </div>
          <div className="inner-column">
            <img src={umbrella} alt="umbrella" loading="eager" />
            <img src={world} alt="world" loading="eager" />
          </div>
          <div className="inner-column">
            <img src={birds} alt="birds" loading="eager" />
            <img src={fence} alt="fence" loading="eager" />
          </div>
        </div>
        <div className="row">
          <img src={door} alt="door" loading="eager" />
          <img src={dragon} alt="dragon" loading="eager" />
        </div>
        <div className="row">
          <img src={tuckDrive} alt="tuckDrive" loading="eager" />
          <img src={landscape} alt="landscape" loading="eager" />
        </div>
        <div className="row">
          <img src={abstract} alt="abstract" loading="eager" />
          <img src={ghosts} alt="ghosts" loading="eager" />
          <img src={metal} alt="metal" loading="eager" />
        </div>
      </FadeIn>
    </div>
  );
};

const Drawings = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);

  return (
    <div className="img-section">
      <FadeIn>
        <div className="row">
          <img src={fruit1} alt="fruit1" loading="eager" />
          <img src={fruit2} alt="fruit2" loading="eager" />
          <img src={fruit3} alt="fruit4" loading="eager" />
          <img src={fruit4} alt="fruit4" loading="eager" />
        </div>
        <div className="row">
          <img src={hand1} alt="hand1" loading="eager" />
          <img src={hand2} alt="hand2" loading="eager" />
          <img src={hand3} alt="hand3" loading="eager" />
          <img src={hand4} alt="hand4" loading="eager" />
          <img src={hand5} alt="hand5" loading="eager" />
        </div>
        <div className="row">
          <img src={bike1} alt="bike1" loading="eager" />
          <img src={bike2} alt="bike2" loading="eager" />
          <img src={bike3} alt="bike3" loading="eager" />
          <img src={bike4} alt="bike4" loading="eager" />
          <img src={bike5} alt="bike5" loading="eager" />
        </div>
        <div className="row">
          <img src={cloth} alt="cloth" loading="eager" />
          <img src={bowls} alt="bowls" loading="eager" />
          <img src={silverware1} alt="silverware1" loading="eager" />
          <img src={silverware2} alt="silverware2" loading="eager" />
          <img src={silverware3} alt="silverware3" loading="eager" />
        </div>
        <div className="row">
          <img src={handOutline} alt="handOutline" loading="eager" />
          <img src={skeleton1} alt="skeleton1" loading="eager" />
          <img src={skeleton2} alt="skeleton2" loading="eager" />
          <img src={skeleton3} alt="skeleton3" loading="eager" />
        </div>
        <div className="row">
          <img src={trombone} alt="trombone" loading="eager" />
          <img src={bailey} alt="bailey" loading="eager" />
          <img src={bellows} alt="bellows" loading="eager" />
        </div>
        <div className="row">
          <img src={bird} alt="bird" loading="eager" />
          <img src={tunnel} alt="tunnel" loading="eager" />
          <img src={creature} alt="creature" loading="eager" />
        </div>
      </FadeIn>
    </div>
  );
};

export {
  Digital, Paintings, Drawings,
};
