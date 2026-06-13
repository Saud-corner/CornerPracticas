export type JobStatus = 'Enviado' | 'Prueba Técnica' | 'Entrevista' | 'Oferta' | 'Rechazado';

export interface Job {
  id: number;
  empresa: string;
  puesto: string;
  estado: JobStatus;
  url: string;
  fecha: string;
  createdAt?: string;
  updatedAt?: string;
}