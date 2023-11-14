/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';



const Card = ({ logo, title, description,background }) => {
  const cardStyle = {
    backgroundColor: background,
  
  };

  const buttonStyle= {
    color:background,
    backgroundcolor: '#fff',

  };
 
 

  
  return (
    <div className="card" style={cardStyle}>
      <img src={logo} alt="Logo" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button style={buttonStyle}>Learn more</button>
    </div>
  );
};





export default Card;
