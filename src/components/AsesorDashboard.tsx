// src/components/AsesorDashboard.tsx
import React, { useEffect, useState } from 'react';
import { fetchCitas } from '../api';
import '../css/AsesorPage.css';

interface Cita {
  title: string;
  priority: string;
  phone: string;
  links: string;
  description: string;
}

const AsesorDashboard: React.FC = () => {
  const [citas, setCitas] = useState<Cita[]>([]);

  useEffect(() => {
    const fetchCitasData = async () => {
      const data = await fetchCitas();
      setCitas(data);
    };
    fetchCitasData();
  }, []);

  return (
    <div className="asesor-dashboard">
      <h2>Citas Agendadas</h2>
      <ul>
        {citas.map((cita, index) => (
          <li key={index} className="cita-details">
            <strong>Título:</strong> {cita.title}
            <p><strong>Prioridad:</strong> {cita.priority}</p>
            <p><strong>Teléfono:</strong> {cita.phone}</p>
            <p><strong>Links:</strong> {cita.links}</p>
            <p><strong>Descripción:</strong> {cita.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsesorDashboard;
