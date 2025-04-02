import React from "react";

const cardStyle = {
  width: "300px",
  margin: "15px",
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  textAlign: "center",
  backgroundColor: "#fff"
};

const imageStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "10px"
};

const DestinationCard = ({ destination }) => {
  return (
    <div style={cardStyle}>
      <img src={destination.image} alt={destination.name} style={imageStyle} />
      <h2>{destination.name}</h2>
      <h4>{destination.location}</h4>
      <p>{destination.description}</p>
      <h3>{destination.price}</h3>
    </div>
  );
};

export default DestinationCard;
