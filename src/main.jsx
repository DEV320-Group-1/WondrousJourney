import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import { WondersProvider } from './context/WondersContext.jsx';
import { BrowserRouter } from 'react-router-dom'  // for routing between pages

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WondersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WondersProvider>
  </StrictMode>,
)