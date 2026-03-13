import React from 'react';

export default function Item({ item }) {
  return (
    <div className="tile">
      <img src={item.image} alt={item.name} className="tile-image" />
      <div className="tile-content">
        <h3>{item.name}</h3>
        <p className="tile-category">{item.category}</p>
        <p className="tile-description">{item.description}</p>
      </div>
    </div>
  );
}