import { useState, useEffect, useCallback, useMemo } from 'react';
import type { Job } from '../types';

export function useJobs() {
  // 1. useState: Para guardar la lista de trabajos y el estado de carga
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // 2. useEffect: Simula la carga inicial de datos desde una API cuando se abre la app
  useEffect(() => {
    const fetchJobs = async () => {
      setTimeout(() => {
        setJobs([
          { id: '1', empresa: 'Corner Estudios', puesto: 'Desarrollador Frontend', estado: 'Entrevista', url: 'https://corner.es', fecha: '2026-06-09' },
          { id: '2', empresa: 'Google', puesto: 'Android Developer', estado: 'Enviado', url: 'https://google.com', fecha: '2026-06-10' }
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchJobs();
  }, []); 

  // 3. useCallback: Memoriza esta función para que no se vuelva a crear en cada renderizado.
  const addJob = useCallback((newJob: Job) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  }, []);

  // 4. useMemo: Evita recalcular las estadísticas si el array de "jobs" no ha cambiado.
  const stats = useMemo(() => {
    return {
      total: jobs.length,
      entrevistas: jobs.filter(job => job.estado === 'Entrevista').length,
    };
  }, [jobs]); 

  return { jobs, loading, addJob, stats };
}