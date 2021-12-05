import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from './pages/Home';
import Other from './pages/Other';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import useAuthStore from './stores/Auth/authStore';

function App() {
  const fetchToken = useAuthStore((as) => as.fetchToken);
  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="other" element={<Other />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
