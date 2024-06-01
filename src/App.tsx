// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClientePage from './pages/ClientePage';
import AsesorPage from './pages/AsesorPage';
import Navbar from './components/Navbar';
import './css/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cliente" element={<ClientePage />} />
          <Route path="/asesor" element={<AsesorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
