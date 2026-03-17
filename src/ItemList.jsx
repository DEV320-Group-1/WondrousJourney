import { useState, useEffect, useContext } from 'react';

import './css/ItemList.css';
import Item from './components/Item';
import SearchFilter from './components/SearchFilter';

import { WondersContext } from './context/WondersContext';  // Wonder context data for actual api data

export default function ItemList() {
  
  // Get the wonders data from WondersContext
  const { wonders } = useContext(WondersContext);

  // filtered now starts as an empty array because API data loads later
  const [filtered, setFiltered] = useState([]);

  // When wonders data is loaded from the API, copy it into filtered state
  // This lets SearchFilter work with the real API data
  useEffect(() => {
    setFiltered(wonders);
  }, [wonders]);

  // --------------------------------------------------------------------------------------------


  return (
    <div className="item-list">
      
      {/* how this work:
      basically, we pass the functionality to update the ItemList.jsx's filtered state over to SearchFilter.jsx 
      as a prop for the SearchFilter function. 
      In SearchFilter.jsx, it'll do the filter logic, then return the filtered array to onFilterChange, 
      which is basically setFiltered in ItemList.jsx, causing the filtered state to be updated in ItemList.jsx */}
      <SearchFilter items={wonders} onFilterChange={setFiltered} />

      {filtered.length === 0 ? (
        <p className="no-results">No items found</p>
      ) : (
        <div className="tiles-grid">
          {filtered.map((item, index) => (
            <Item 
              key={item.name || index} 
              item={item} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
