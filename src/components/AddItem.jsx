import React from "react";

export default function AddItem({ item, savedItems, setSavedItems, setFilteredItems }) {


    const handleAdd = () => 
    {
    // Check if item already exists (prevents duplicates)
    const exists = savedItems.some((i) => i.id === item.id);
    if (exists) return;

    const updatedItems = [...savedItems, item];

    setSavedItems(updatedItems);
    setFilteredItems(updatedItems);

    localStorage.setItem("savedJourneys", JSON.stringify(updatedItems));
    };

    return (
        <button onClick={handleAdd}>
        Add Journey
        </button>
    );
}