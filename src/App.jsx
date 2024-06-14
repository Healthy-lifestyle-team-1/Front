import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import Toggle from './components/ui/Toggle';
import { HomePage } from './pages/HomePage';
import Theme from './assets/styles/themes/index';

import './App.css';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { BookPage } from './pages/BookPage';

function App() {
  return (
    <div>
      <Theme className={'hidden'} />
      <div>Здесь будет наш прекрасный проект!</div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
		  <Route path="/book" element={<BookPage />} />
        {/* <Route path="/userpage" element={<UserPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
