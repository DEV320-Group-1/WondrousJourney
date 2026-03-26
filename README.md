# Wondrous Journey  
DEV322 Final Project  

A simple React web application that allows users to browse world wonders, view detailed information, and save selected wonders locally in the browser.

---

## How to Run This Project

### 1. Clone the repository

```bash
git clone https://github.com/DEV320-Group-1/WondrousJourney.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

---

## App Features

- Fetch world wonders data from public API  
- Browse wonders list  
- Search and filter wonders  
- View detailed wonder information  
- Save wonders to browser localStorage  
- Remove saved wonders  
- Download saved wonders as JSON file  

---

## Technologies Used

- React  
- Vite  
- React Router  
- LocalStorage (client-side persistence)  
- World Wonders API  

---

## Project Structure Overview

```
src/
  api/        → API fetch logic
  components/ → UI components (Item, ItemCard, Buttons)
  context/    → Shared wonders data provider
  pages/      → Main views (Browse, Saved)
```

---

## Future Improvements

- Import saved wonders from JSON file  
- UI styling improvements  
- Better state management  
- Deployment to production hosting  