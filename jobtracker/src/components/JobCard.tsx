import type { Job } from '../types';
import { StatusBadge } from './StatusBadge';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{job.puesto}</h3>
          <p className="text-gray-500 font-medium">{job.empresa}</p>
        </div>
        {/* Aquí usamos el componente que creamos en el paso anterior */}
        <StatusBadge status={job.estado} />
      </div>
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50">
        <span className="text-xs text-gray-400">Añadido el {job.fecha}</span>
        <a 
          href={job.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:text-blue-800 font-semibold"
        >
          Ver oferta &rarr;
        </a>
      </div>
    </div>
  );
}