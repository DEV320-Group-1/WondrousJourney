import React, { useState, useEffect } from "react";
import Item from "./components/Item";
import SearchFilter from "./components/SearchFilter";
import RemoveItem from "./components/RemoveItem";
import ItemCard from "./components/ItemCard";
import DownloadSavedButton from "./components/DownloadSavedButton";

const SavedPage = () => {
  const [savedItems, setSavedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // State to track the currently selected Item for the ItemCard view
  const [selectedItem, setSelectedItem] = useState(null);

  // Load saved items from localStorage on page load
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("savedJourneys")) || [];
    setSavedItems(storedItems);
    setFilteredItems(storedItems);
  }, []);


  // If a wonder item is selected, show the ItemCard view instead of the list
  if (selectedItem) {
    return (
      <div className="item-list">
        <button onClick={() => setSelectedItem(null)}>Back</button> {/* back button sets selectedItem to null, closing the detailed view */}
        <ItemCard item={selectedItem} />
      </div>
    );
  }



  return (
    <div className="saved-page">
      <h1>Your Saved Journeys</h1>

      {/* Search filter */}
      <SearchFilter
        items={savedItems}
        onFilterChange={setFilteredItems}
      />

      {/* Download button */}
      <DownloadSavedButton />

      {filteredItems.length === 0 ? (
        <p>No matching journeys found.</p>
      ) : (
        <div className="saved-grid">
          {filteredItems.map((item) => (
            <div key={item.name} className="saved-card-wrapper">

              {/* clickable card only */}
              <div onClick={() => setSelectedItem(item)}>
                <Item item={item} />
              </div>

              {/* Remove button */}
              <RemoveItem
                name={item.name}
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