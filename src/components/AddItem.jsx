import React, { useState, useEffect } from "react";

export default function AddItem({ item }) {

  const [isAdded, setIsAdded] = useState(false);

  // check localStorage when component loads
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedJourneys")) || [];

    // check if item is already in savedJourneys by comparing names
    let found = false;
    for (let i = 0; i < saved.length; i++) {
      if (saved[i].name === item.name) {
        found = true;
        break;
      }
    }

    setIsAdded(found);
  }, [item]);

  const handleAdd = () => {
    const saved = JSON.parse(localStorage.getItem("savedJourneys")) || [];

    saved.push(item);
    localStorage.setItem("savedJourneys", JSON.stringify(saved));

    setIsAdded(true);
  };

  return (
    // disable button if item is already added to savedJourneys
    <button onClick={handleAdd} disabled={isAdded}>
      {isAdded ? "Added" : "Add"}
    </button>
  );
}