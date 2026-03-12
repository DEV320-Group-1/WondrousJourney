// Provides the general page structure for the app.
// Will wrap around other components such as ItemList, Saved Items, etc.

// Check App.jsx for how this is used to wrap the main content of the app.

import './css/layout.css';

export default function Layout(props) {

  return (
    <div className="layout">

      {/* NAVBAR SECTION */}
      {/* Top navigation bar that will be visible across the app */}
      <nav className="navbar">
        <h1 className="logo">Wondrous Journey</h1>

        {/* Navigation buttons for different sections of the app */}
        {/* -------!!! Change to React Router links later------- */}
        <div className="nav-links">
          <button>Browse Wonders</button>
          <button>Saved Wonders</button>
          <button>About</button>
        </div>
      </nav>


      {/* MAIN CONTENT AREA */}
      <main className="content">
        {props.children}
      </main>


      {/* FOOTER SECTION */}
      <footer className="footer">
        <p>Wondrous Journey © 2026</p>
      </footer>

    </div>
  );
}