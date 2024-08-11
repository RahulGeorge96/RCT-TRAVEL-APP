import React from 'react'

const DetailView = ({ destination, onClose }) => {
  const additionalImages = destination.additionalImages || [];

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid black",
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "white",
        zIndex: "1000",
      }}
    >
      <button onClick={onClose}>Close</button>
      <h1>{destination.name}</h1>
      <h2>{destination.country}</h2>
      <img
        style={{ height: "300px", width: "300px" }}
        src={destination.profileImg}
        alt={destination.name}
      />
      <div style={{ marginTop: "10px", display: "flex", overflowX: "auto" }}>
        {additionalImages.length > 0 ? (
          additionalImages.map((img, index) => (
            <img
              key={index}
              style={{ height: "100px", width: "100px", marginRight: "5px" }}
              src={img}
              alt={`additional ${index}`}
            />
          ))
        ) : (
          <p>No additional images available</p>
        )}
      </div>
      <p>{destination.description}</p>
      <h3>Average Budget: ${destination.averageBudget}</h3>
    </div>
  );
};

export default DetailView