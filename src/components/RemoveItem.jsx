import React from "react";

export default function RemoveItem({ name, savedItems, setSavedItems, setFilteredItems }) {

  const handleRemove = () => {
    const updatedItems = savedItems.filter((item) => item.name !== name);

    setSavedItems(updatedItems);
    setFilteredItems(updatedItems);

    localStorage.setItem("savedJourneys", JSON.stringify(updatedItems));
  };

  return (
    <button onClick={handleRemove}>
      Remove Journey
    </button>
  );
}