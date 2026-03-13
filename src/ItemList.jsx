import { useState } from 'react';

import './css/ItemList.css';
import Item from './components/Item';
import SearchFilter from './components/SearchFilter';


const initialItems = [
 {
  id: 1,
  name: "Seattle",
  category: "North America",
  image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
  description: "A vibrant Pacific Northwest city known for its waterfront, tech culture, coffee scene, rainycity in USE and iconic Space Needle."
},
  {
  id: 2,
  name: "New York",
  category: "North America",
  image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
  description: "A world-famous city known for its skyline, diverse culture, Broadway, and iconic landmarks like Times Square and Central Park."
},
  {
    id: 3,
    name: 'Stonehenge',
    category: 'Europe',
    image: 'https://images.unsplash.com/photo-1489672291213-632461b1be56?w=400&h=300&fit=crop',
    description: 'A prehistoric monument consisting of standing stones on the Salisbury Plain in England.'
  },
];

export default function ItemList() {
  const [filtered, setFiltered] = useState(initialItems);

  return (
    <div className="item-list">
      <SearchFilter items={initialItems} onFilterChange={setFiltered} />

      {filtered.length === 0 ? (
        <p className="no-results">No items found</p>
      ) : (
        <div className="tiles-grid">
          {filtered.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
