import React, { useState, useEffect } from "react";
import Item from "./Item"; 
import SearchFilter from "./SearchFilter"; 
import RemoveItem from "./components/RemoveItem";


// Logic
const SavedPage = () => {
  const [savedItems, setSavedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // Load saved items from localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("savedJourneys")) || [];
    setSavedItems(storedItems);
    setFilteredItems(storedItems);
  }, []);

  // Page
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
           
            {/* Reusable RemoveItem component */}
            <RemoveItem
                id={item.id}
                savedItems={savedItems}
                setSavedItems={setSavedItems}
                setFilteredItems={setFilteredItems}
            />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedPage;
