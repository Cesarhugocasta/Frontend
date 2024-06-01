import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClienteForm from '../components/ClienteForm';
import React from 'react';

test('renders ClienteForm component', () => {
  render(<ClienteForm />);
  const tituloInput = screen.getByLabelText(/Título para tu cita:/i);
  expect(tituloInput).toBeInTheDocument();
  const prioridadSelect = screen.getByLabelText(/Pagar para ser prioridad:/i);
  expect(prioridadSelect).toBeInTheDocument();
  const telefonoInput = screen.getByLabelText(/Número de teléfono:/i);
  expect(telefonoInput).toBeInTheDocument();
  const linksInput = screen.getByLabelText(/Links de prendas a evaluar:/i);
  expect(linksInput).toBeInTheDocument();
  const descripcionTextarea = screen.getByLabelText(/Descripción:/i);
  expect(descripcionTextarea).toBeInTheDocument();
  const submitButton = screen.getByRole('button', { name: /Agendar Cita/i });
  expect(submitButton).toBeInTheDocument();
});
