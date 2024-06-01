// src/api.ts
const API_URL = 'http://localhost:3001/api';

export async function fetchCitas(): Promise<any[]> {
  const response = await fetch(`${API_URL}/citas`);
  return response.json();
}

export async function createCita(cita: any): Promise<boolean> {
  const response = await fetch(`${API_URL}/citas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cita),
  });
  return response.ok;
}
