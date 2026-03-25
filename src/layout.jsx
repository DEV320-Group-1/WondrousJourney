// Provides the general page structure for the app.
// Will wrap around other components such as ItemList, Saved Items, etc.

// Check App.jsx for how this is used to wrap the main content of the app.

import './css/layout.css';
import { Outlet } from 'react-router-dom';  // for rendering child routes (main content of the page)
import { Link } from 'react-router-dom';    // for navigation links in the navbar

export default function Layout(props) {

  return (
    <div className="layout">

      {/* NAVBAR SECTION */}
      {/* Top navigation bar that will be visible across the app */}
      <nav className="navbar">
        <h1 className="logo">Wondrous Journey</h1>

        {/* Navigation page of the app */}
        <div className="nav-links">
          {/* Home page */}
          <Link to="/">Browse Wonders</Link>

          {/* Saved page */}
          <Link to="/saved">Saved Wonders</Link>
        </div>
      </nav>


      {/* MAIN CONTENT AREA */}
      <main className="content">
        <Outlet />                {/* Renders the child route component (ItemList, SavedPage) based on the current URL */}
      </main>

      {/* FOOTER SECTION */}
      <footer className="footer">
        <p>Wondrous Journey © 2026</p>
      </footer>

    </div>
  );
}