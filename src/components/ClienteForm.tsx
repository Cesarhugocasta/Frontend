import React, { useState } from 'react';
import { createCita } from '../api';

const ClienteForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('No');
  const [phone, setPhone] = useState('');
  const [links, setLinks] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cita = {
      title,
      priority,
      phone,
      links,
      description,
    };
    const success = await createCita(cita);
    if (success) {
      setMessage('Cita agendada con éxito');
    } else {
      setMessage('Error al agendar la cita');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título para tu cita:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="priority">Pagar para ser prioridad:</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="No">No</option>
          <option value="Sí">Sí</option>
        </select>
      </div>
      <div>
        <label htmlFor="phone">Número de teléfono:</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="links">Links de prendas a evaluar:</label>
        <input
          id="links"
          type="url"
          value={links}
          onChange={(e) => setLinks(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agendar Cita</button>
      <p>{message}</p>
    </form>
  );
};

export default ClienteForm;
