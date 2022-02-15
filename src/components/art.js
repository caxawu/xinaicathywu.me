import React from 'react';
import '../style.scss';
import diorama1 from '../img/digital-art/diorama1.png';
import diorama2 from '../img/digital-art/diorama2.png';
import boatRender from '../img/digital-art/boatRender.png';
import dioramaWIP from '../img/digital-art/dioramaWIP.png';
import boatWIP from '../img/digital-art/boatWIP.png';
import plant from '../img/digital-art/plant.png';
import room from '../img/digital-art/room.png';
import juice from '../img/digital-art/juice.png';
import escher from '../img/digital-art/escher.png';

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
  return (
    <div className="img-section">
      <div className="row">
        <img src={diorama1} alt="Diorama 1" />
        <img src={diorama2} alt="Diorama 2" />
        <img src={boatRender} alt="boatRender" />
      </div>
      <div className="row">
        <img src={dioramaWIP} alt="dioramaWIP" />
        <img src={boatWIP} alt="boatWIP" />
        <img src={plant} alt="plant" />
      </div>
      <div className="row">
        <img src={room} alt="room" />
        <img src={juice} alt="juice" />
        <img src={escher} alt="escher" />
      </div>
    </div>
  );
};

const Paintings = (props) => {
  return (
    <div className="img-section">
      <div className="row">
        <img src={umbrella} alt="umbrella" />
        <img src={birds} alt="birds" />
        <img src={fence} alt="fence" />
      </div>
      <div className="row">
        <img src={abstract} alt="abstract" />
        <img src={world} alt="world" />
        <img src={landscape} alt="landscape" />
      </div>
      <div className="row">
        <img src={tuckDrive} alt="tuckDrive" />
        <img src={dragon} alt="dragon" />
      </div>
      <div className="row">
        <img src={ghosts} alt="ghosts" />
        <img src={door} alt="door" />
        <img src={metal} alt="metal" />
      </div>
    </div>
  );
};

const Drawings = (props) => {
  return (
    <div className="img-section">
      <div className="row">
        <img src={fruit1} alt="fruit1" />
        <img src={fruit2} alt="fruit2" />
        <img src={fruit3} alt="fruit4" />
        <img src={fruit4} alt="fruit4" />
      </div>
      <div className="row">
        <img src={hand1} alt="hand1" />
        <img src={hand2} alt="hand2" />
        <img src={hand3} alt="hand3" />
        <img src={hand4} alt="hand4" />
        <img src={hand5} alt="hand5" />
      </div>
      <div className="row">
        <img src={bike1} alt="bike1" />
        <img src={bike2} alt="bike2" />
        <img src={bike3} alt="bike3" />
        <img src={bike4} alt="bike4" />
        <img src={bike5} alt="bike5" />
      </div>
      <div className="row">
        <img src={cloth} alt="cloth" />
        <img src={bowls} alt="bowls" />
        <img src={silverware1} alt="silverware1" />
        <img src={silverware2} alt="silverware2" />
        <img src={silverware3} alt="silverware3" />
      </div>
      <div className="row">
        <img src={handOutline} alt="handOutline" />
        <img src={skeleton1} alt="skeleton1" />
        <img src={skeleton2} alt="skeleton2" />
        <img src={skeleton3} alt="skeleton3" />
      </div>
      <div className="row">
        <img src={trombone} alt="trombone" />
        <img src={bailey} alt="bailey" />
        <img src={bellows} alt="bellows" />
      </div>
      <div className="row">
        <img src={bird} alt="bird" />
        <img src={tunnel} alt="tunnel" />
        <img src={creature} alt="creature" />
      </div>
    </div>
  );
};

export {
  Digital, Paintings, Drawings,
};
