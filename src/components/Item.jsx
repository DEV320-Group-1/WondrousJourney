import React from 'react';

export default function Item({ item }) {
  return (
    <div className="tile">

      {/* API image is inside item.links.images array */}
      <img
        src={item.links?.images?.[0]}
        alt={item.name}
        className="tile-image"
      />

      <div className="tile-content">
        <h3>{item.name}</h3>

        {/* categories is an array, so join to display (1 item can have multiple categories) */}
        <p className="tile-category">
          {item.categories?.join(', ')}
        </p>

        {/* summary */}
        <p className="tile-description">
          {item.summary}
        </p>
      </div>
    </div>
  );
}