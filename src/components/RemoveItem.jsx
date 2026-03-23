import React from "react";

export default function RemoveItem({ id, savedItems, setSavedItems, setFilteredItems }) {
  const handleRemove = () => {
    const updatedItems = savedItems.filter((item) => item.id !== id);
    setSavedItems(updatedItems);
    setFilteredItems(updatedItems);
    localStorage.setItem("savedJourneys", JSON.stringify(updatedItems));
  };

  return (
    <button onClick={handleRemove}>
      Remove
    </button>
  );
}