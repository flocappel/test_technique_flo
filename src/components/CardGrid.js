import React from 'react';

function Card() {  // peut être mettre export avant mettre style et autrte info dans ()
  return <div style={{ border: '1px solid black', padding: '20px', margin: '10px' }}>Carte</div>;
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
