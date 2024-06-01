// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/">Home</Link>
      <Link to="/cliente">Cliente</Link>
      <Link to="/asesor">Asesor</Link>
    </nav>
  );
};

export default Navbar;
