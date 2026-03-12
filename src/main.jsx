import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import { WondersProvider } from './context/WondersContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WondersProvider>
      <App />
    </WondersProvider>    
  </StrictMode>,
)
