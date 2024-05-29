import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Toggle from './components/ui/Toggle';
import { HomePage } from './pages/HomePage';

import './App.css';

function App() {
  return (
    <div>
      <Toggle />
      <div>Здесь будет наш прекрасный проект!</div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/userpage" element={<UserPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;


