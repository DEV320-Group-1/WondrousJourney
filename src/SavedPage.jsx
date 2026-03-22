import React, { useState, useEffect } from "react";
import Item from "./Item"; 
import SearchFilter from "./SearchFilter"; 


const SavedPage = () => {
  const [savedItems, setSavedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // Load saved items from localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("savedJourneys")) || [];
    setSavedItems(storedItems);
    setFilteredItems(storedItems);
  }, []);

  // Remove item from saved list
  const removeItem = (id) => {
    const updatedItems = savedItems.filter((item) => item.id !== id);
    setSavedItems(updatedItems);
    setFilteredItems(updatedItems);
    localStorage.setItem("savedJourneys", JSON.stringify(updatedItems));
  };

  return (
    <div className="saved-page">
      <h1>Your Saved Journeys</h1>

      {/* Search & Filter Controls */}
      <SearchFilter items={savedItems} onFilterChange={setFilteredItems} />

      {filteredItems.length === 0 ? (
        <p>No matching journeys found.</p>
      ) : (
        <div className="saved-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="saved-card-wrapper">
              {/* Reusable Item component */}
              <Item item={item} />

              {/* Remove button */}
              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedPage;
