import React from "react";
import { createRoot } from 'react-dom/client';

import Paper from '@mui/material/Paper';

import Header from "./components/Header.jsx";
import MainNavigation from "./components/MainNavigation.jsx";

const App = () => {
  return (
      <Paper sx={{ position: 'fixed'}} className="container">
          <Header />
          <MainNavigation />
      </Paper>
  );
};

createRoot(document.getElementById('app')).render(<App />);

export default App;
