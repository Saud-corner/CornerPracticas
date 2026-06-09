import type { JobStatus } from '../types';

interface StatusBadgeProps {
  status: JobStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  // Diccionario de colores Tailwind
  const colorMap: Record<JobStatus, string> = {
    'Enviado': 'bg-blue-100 text-blue-800',
    'Prueba Técnica': 'bg-yellow-100 text-yellow-800',
    'Entrevista': 'bg-purple-100 text-purple-800',
    'Oferta': 'bg-green-100 text-green-800',
    'Rechazado': 'bg-red-100 text-red-800',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colorMap[status]}`}>
      {status}
    </span>
  );
}