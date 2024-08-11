import React from 'react';
import { useNavigate } from "react-router-dom";
import Card from './Card';

const DestinationGrid = ({ destinations, onEdit, onCardClick }) => {
     const navigate = useNavigate();


    const handleCardClick = (name) => {
      navigate(`/destination/${name}`);
    };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
      {destinations.map((destination) => (
        <Card
          key={destination.id}
          destination={destination}
          onEdit={() => onEdit(destination)}
          onClick={() => handleCardClick(destination.name)}
        />
      ))}
    </div>
  );
};

export default DestinationGrid