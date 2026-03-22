import React from 'react';
import TripAdvisorButton from './TripAdvisorButton';        // Button to open TripAdvisor page for a wonder
import BritannicaButton from './BritannicaButton';          // Button to open Britannica page for a wonder


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
        <TripAdvisorButton item={item} />
        <BritannicaButton item={item} />
      </div>
    </div>
  );
}