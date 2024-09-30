import React from 'react';
import image1 from'../images/Exoplanète-K2-18-b-–-NIRISS.jpg';
import image2 from '../images/Galaxie-de-la-Roue-de-chariot-–-Image-du-NIRCam-et-du-MIRI.jpg';
import image3 from '../images/alien_style.jpg';
import image4 from '../images/c8d5f96adf4135e0e9353d7e95cb40c6.png';

function Card(image) {  // ajout de "propriété" image
  return <div style={{ border: '1px solid black', padding: '20px', margin: '10px' }}>
    <img src={image} alt="Card" style={{ width: '100%', height: 'auto' }} />
  <p>Carte</p>
</div>;
}

function CardGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardGrid;
