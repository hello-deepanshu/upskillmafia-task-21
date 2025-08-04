import React from 'react';
import './Card.css';

function Card({ title, description, image }) {
  return (
    <div className="card-container">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
