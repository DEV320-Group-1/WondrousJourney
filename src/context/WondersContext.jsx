// Creates and provides wonders data to the app

import { createContext, useState, useEffect } from 'react';
import { getAllWonders } from '../api/wondersApi';

export const WondersContext = createContext();

export function WondersProvider(props) {
  const [wonders, setWonders] = useState([]);

  // Load wonders data when the provider first renders
  useEffect(() => {
    async function loadWonders() {
      const data = await getAllWonders();
      setWonders(data);
    }

    loadWonders();
  }, []);

  return (
    <WondersContext.Provider value={{ wonders }}>
      {props.children}
    </WondersContext.Provider>
  );
}

// Note for team:
//
// WondersContext is what we import in components to access wonders data. 
//
// WondersProvider is used in main.jsx to wrap around the app, so all components can access the wonders data through context.
// WondersProvider fetches the wonders data from the API when it first renders and stores it in state, then provides it to any child components that consume the context.
//
// ----------------------------------------------------------------------------
//
// Example usage in a component:
//
// import { useContext } from 'react';
// import { WondersContext } from '../context/WondersContext';
//
// function ItemList() {
//   const { wonders } = useContext(WondersContext);
//
//   return (
//     <div>
//       {wonders.map(w => <p key={w.id}>{w.name}</p>)}
//     </div>
//   );
// }