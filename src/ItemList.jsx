import { useState, useMemo } from 'react';
import './ItemList.css';

// sample world wonders; real data will come from the API/database later
const initialItems = [
  {
    id: 1,
    name: 'Great Pyramid of Giza',
    category: 'Africa',
    image: 'https://images.unsplash.com/photo-1585109649906-a262252e25f0?w=400&h=300&fit=crop',
    description: 'The largest of the three pyramids, built for Pharaoh Khufu around 2589-2566 BC.'
  },
  {
    id: 2,
    name: 'Stonehenge',
    category: 'Europe',
    image: 'https://images.unsplash.com/photo-1489672291213-632461b1be56?w=400&h=300&fit=crop',
    description: 'A prehistoric monument consisting of standing stones on the Salisbury Plain in England.'
  },
  {
    id: 3,
    name: 'Great Wall of China',
    category: 'Asia',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',
    description: 'An ancient series of fortifications stretching over 13,000 miles across northern China.'
  },
  {
    id: 4,
    name: 'Machu Picchu',
    category: 'South America',
    image: 'https://images.unsplash.com/photo-1587919882652-4d51fc3ad0b9?w=400&h=300&fit=crop',
    description: 'An Incan citadel set high in the Andes Mountains of Peru, built in the mid-15th century.'
  },
  {
    id: 5,
    name: 'Taj Mahal',
    category: 'Asia',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop',
    description: 'A mausoleum built by Mughal Emperor Shah Jahan for his beloved wife in Agra, India.'
  },
  {
    id: 6,
    name: 'Christ the Redeemer',
    category: 'South America',
    image: 'https://images.unsplash.com/photo-1483729558449-99daa64073d2?w=400&h=300&fit=crop',
    description: 'A colossal statue of Jesus standing atop Mount Corcovado overlooking Rio de Janeiro.'
  },
  {
    id: 7,
    name: 'Chichen Itza',
    category: 'North America',
    image: 'https://images.unsplash.com/photo-1549887534-4d4e9aba15e3?w=400&h=300&fit=crop',
    description: 'A large pre-Columbian archaeological site built by the Maya civilization in Mexico.'
  },
  {
    id: 8,
    name: 'Petra',
    category: 'Asia',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    description: 'An ancient city carved into rose-red cliffs in southwestern Jordan.'
  }
];

export default function ItemList() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(() => {
    const set = new Set(initialItems.map((i) => i.category));
    return ['All', ...set];
  }, []);

  const filtered = useMemo(() => {
    return initialItems.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || item.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="item-list">
      <div className="controls">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="no-results">No items found</p>
      ) : (
        <div className="tiles-grid">
          {filtered.map((item) => (
            <div key={item.id} className="tile">
              <img src={item.image} alt={item.name} className="tile-image" />
              <div className="tile-content">
                <h3>{item.name}</h3>
                <p className="tile-category">{item.category}</p>
                <p className="tile-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
