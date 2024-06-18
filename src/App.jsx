import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { BookPage } from './pages/BookPage';
import { NewsPage } from './pages/NewsPage';
import { ConstructorPage } from './pages/ConstructorPage/ConstructorPage';
import { InProgress } from './components/ui/InProgress/InProgress';
import { Header } from './components/Header/Header';
import Theme from './assets/styles/themes/index';

import './App.css';

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
      // Скроллим вниз
      setIsScrollingUp(false);
    } else if (currentScrollTop < lastScrollTop) {
      // Скроллим вверх
      setIsScrollingUp(true);
    }

    setLastScrollTop(currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <div className={isScrollingUp ? 'showHeader' : 'hideHeader'}>
        <Header />
      </div>
      <main>{children}</main>
    </>
  );
};

function App() {
  return (
    <>
      <Theme className="hidden" />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/constructor" element={<ConstructorPage />} />
          <Route path="/inprogress" element={<InProgress />} />
          {/* <Route path="/userpage" element={<UserPage />} /> */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
