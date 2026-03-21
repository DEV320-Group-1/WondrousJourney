// Handles API requests for wonders data

const API_BASE_URL = 'https://www.world-wonders-api.org/v0/wonders/';

// Fetch all wonders
export async function getAllWonders() {
  const response = await fetch(`${API_BASE_URL}`);
  const data = await response.json();
  return data;
}

// note for team: 
// This file fetch from api, return data
// This will be imported and used in context provider, which will manage state and provide data to components
// Context provider will wrap around the app in main.jsx file, so all components can access the wonders data through context.