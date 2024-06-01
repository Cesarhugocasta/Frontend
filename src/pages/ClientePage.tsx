// src/pages/ClientePage.tsx
import React from 'react';
import ClienteForm from '../components/ClienteForm';
import '../css/ClientePage.css';

const ClientePage: React.FC = () => {
  return (
    <div className="client-page">
      <h1>Cliente - Agendar Cita</h1>
      <ClienteForm />
    </div>
  );
};

export default ClientePage;
