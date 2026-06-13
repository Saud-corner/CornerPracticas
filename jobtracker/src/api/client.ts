import type { Job } from '../types';

const API_URL = 'http://localhost:3000/api/v1/jobs';

export interface JobClient {
  getJobs: () => Promise<Job[]>;
  createJob: (jobData: any) => Promise<Job>;
  updateJob: (id: number | string, jobData: any) => Promise<Job>;
  deleteJob: (id: number | string) => Promise<void>;
}

export const jobClient: JobClient = {
  getJobs: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Error al cargar');
    return response.json();
  },
  createJob: async (jobData) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData),
    });
    if (!response.ok) throw new Error('Error al crear');
    return response.json();
  },
  updateJob: async (id, jobData) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData),
    });
    if (!response.ok) throw new Error('Error al actualizar');
    return response.json();
  },
  deleteJob: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Error al borrar');
  }
};