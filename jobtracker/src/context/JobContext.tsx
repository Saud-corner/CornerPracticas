import React, { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import type { Job } from '../types';
import { jobClient } from '../api/client';

interface JobContextProps {
  jobs: Job[];
  loading: boolean;
  error: string | null;
  addJob: (jobData: Omit<Job, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  editJob: (id: number, jobData: Partial<Job>) => Promise<void>;
  removeJob: (id: number) => Promise<void>;
  refreshJobs: () => Promise<void>;
}

export const JobContext = createContext<JobContextProps | undefined>(undefined);

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const data = await jobClient.getJobs();
      setJobs(data); 
    } catch (err) {
      console.error("Error al cargar trabajos:", err);
      setError('Error al conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchJobs();
  }, []);

  const addJob = async (jobData: Omit<Job, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newJob = await jobClient.createJob(jobData);
      setJobs((prev) => [...prev, newJob]);
    } catch (err) {
      console.error("Error al crear:", err);
      setError('No se pudo crear la candidatura.');
      throw err;
    }
  };

  // MODIFICADO: Actualización defensiva para asegurar que la UI se pinte
  const editJob = async (id: number, jobData: Partial<Job>) => {
    console.log(`[JobContext] Intentando editar ID ${id} con:`, jobData);
    try {
      const updatedJob = await jobClient.updateJob(id, jobData);
      
      // Si el servidor devuelve el objeto, lo usamos. Si no, forzamos la mezcla local.
      setJobs((prev) => prev.map((job) => 
        job.id === id ? { ...job, ...(updatedJob || jobData) } : job
      ));
      
      console.log("[JobContext] Éxito: estado local actualizado.");
    } catch (err) {
      console.error("[JobContext] Error crítico en editJob:", err);
      setError('No se pudo actualizar la candidatura en el servidor.');
      throw err; // Lanzamos para que el componente (JobCard) sepa que falló
    }
  };

  const removeJob = async (id: number) => {
    try {
      await jobClient.deleteJob(id);
      setJobs((prev) => prev.filter((job) => job.id !== id));
    } catch (err) {
      console.error("Error al borrar:", err);
      setError('No se pudo borrar.');
      throw err;
    }
  };

  return (
    <JobContext.Provider value={{ jobs, loading, error, addJob, editJob, removeJob, refreshJobs: fetchJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJobContext debe usarse dentro de un JobProvider');
  }
  return context;
};