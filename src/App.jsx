import { Routes, Route } from 'react-router-dom'; // for routing between pages
import Layout from './layout';
import ItemList from './ItemList';
import SavedPage from './SavedPage';

function App() {
  return (
    <Routes>

      {/* Layout wrapper */}
      <Route path="/" element={<Layout />}>

        {/* Home page */}
        <Route index element={<ItemList />} />

        {/* Saved page */}
        <Route path="saved" element={<SavedPage />} />

      </Route>

    </Routes>
  );
}

export default App;