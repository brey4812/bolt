import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PadelPage } from './pages/PadelPage';
import { TennisPage } from './pages/TennisPage';
import { GolfPage } from './pages/GolfPage';
import { RestaurantPage } from './pages/RestaurantPage';
import { ContactPage } from './pages/ContactPage';
import { VirtualTourPage } from './pages/VirtualTourPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/el-club" element={<AboutPage />} />
            <Route path="/padel" element={<PadelPage />} />
            <Route path="/tenis" element={<TennisPage />} />
            <Route path="/golf" element={<GolfPage />} />
            <Route path="/restauracion" element={<RestaurantPage />} />
            <Route path="/tour-virtual" element={<VirtualTourPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;