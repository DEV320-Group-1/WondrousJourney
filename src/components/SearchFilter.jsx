import { useState, useMemo, useEffect } from 'react';

export default function SearchFilter({ items, onFilterChange }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');


  // Extract categories from items
  const categories = useMemo(() => {
    const allCategories = items.flatMap((item) => item.categories || []);
    const set = new Set(allCategories);

    return ['All', ...set];
  }, [items]);

  // Filter items based on search and category
  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
       const matchesCategory = category === 'All' || (item.categories && item.categories.includes(category));
      return matchesSearch && matchesCategory;
    });
  }, [items, search, category]);


  // Whenever filtered changes, call onFilterChange to update state (simplify: when the filter logic here changes, we want to update the filtered state in ItemList by passing the new filtered array up through onFilterChange)
  useEffect(() => {
    onFilterChange(filtered);
  }, [filtered, onFilterChange]);


  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
        style={{ color: "black", backgroundColor: "white" }}

      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}
        style={{ color: "black", backgroundColor: "white" }}>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}