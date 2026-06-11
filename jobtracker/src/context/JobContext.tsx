import { createContext, useContext, type ReactNode } from 'react';
import { useJobs } from '../hooks/useJobs';
import type { Job } from '../types';


interface JobContextType {
  jobs: Job[];
  loading: boolean;
  addJob: (newJob: Job) => void;
  stats: {
    total: number;
    entrevistas: number;
  };
}


const JobContext = createContext<JobContextType | undefined>(undefined);


export function JobProvider({ children }: { children: ReactNode }) {
  // Consumimos el hook que creamos en el Paso 7
  const jobValues = useJobs();

  return (
    <JobContext.Provider value={jobValues}>
      {children}
    </JobContext.Provider>
  );
}

 
export function useJobContext() {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobContext debe ser utilizado dentro de un JobProvider');
  }
  return context;
}