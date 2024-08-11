import React from 'react'
import Card from './Card';

const DestinationGrid = ({ destinations, onEdit, onCardClick }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
      {destinations.map((destination) => (
        <Card
          key={destination.id}
          destination={destination}
          onEdit={() => onEdit(destination)}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default DestinationGrid