// src/pages/AsesorPage.tsx
import React from 'react';
import AsesorDashboard from '../components/AsesorDashboard';
import '../css/AsesorPage.css';

const AsesorPage: React.FC = () => {
  return (
    <div>
      <h1>Asesor - Citas Agendadas</h1>
      <AsesorDashboard />
    </div>
  );
};

export default AsesorPage;
