import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

const DetailView = ({ destinations}) => {

  const { name} = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((dest) => dest.name === name);
 const additionalImages = destination.additionalImages || [];
    if (!destination) {
      return <div>Destination not found</div>;
    }

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
      {/* <button onClick={onClose}>Close</button> */}
      <button onClick={() => navigate(-1)}>Back</button>
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