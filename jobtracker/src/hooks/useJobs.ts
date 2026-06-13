import { useState, useMemo, useCallback } from 'react';
import type { Job } from '../types';

const mockJobs: Job[] = [
  { id: 1, empresa: 'Corner Estudios', puesto: 'Desarrollador Frontend', url: '', estado: 'Entrevista', fecha: '2026-06-09' },
  { id: 2, empresa: 'Google', puesto: 'Android Developer', url: '', estado: 'Enviado', fecha: '2026-06-10' }
];

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [loading, setLoading] = useState<boolean>(false);

  
  const addJob = useCallback((newJob: Job) => {
    setJobs((prev) => [newJob, ...prev]);
  }, []);

  
  const deleteJob = useCallback((id: number) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  }, []);

 
  const stats = useMemo(() => {
    return {
      total: jobs.length,
      entrevistas: jobs.filter(j => j.estado === 'Entrevista' || j.estado === 'Prueba Técnica').length,
    };
  }, [jobs]);

  return { jobs, loading, addJob, deleteJob, stats };
}