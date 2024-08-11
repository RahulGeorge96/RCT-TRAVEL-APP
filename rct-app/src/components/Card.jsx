import React from 'react'

const Card = ({ destination, onEdit, onClick }) => {
  return (
    <div
      onClick={() => onClick(destination)}
      style={{ cursor: "pointer", border: "1px solid black", padding: "10px" }}
    >
      <img
        style={{ height: "250px", width: "250px" }}
        src={destination.profileImg}
        alt={destination.name}
      />
      <h2>{destination.name}</h2>
      <h3>{destination.country}</h3>
      <h4>{destination.averageBudget}</h4>
      {destination.adminFlag && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default Card