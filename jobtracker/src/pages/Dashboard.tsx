import { useJobContext } from '../context/JobContext';
import { JobCard } from '../components/JobCard';

export function Dashboard() {
  
  const { jobs } = useJobContext();

  
  const total = jobs.length;
  const enviados = jobs.filter(job => job.estado === 'Enviado').length;
  const pruebasTecnicas = jobs.filter(job => job.estado === 'Prueba Técnica').length;
  const entrevistas = jobs.filter(job => job.estado === 'Entrevista').length;
  const ofertas = jobs.filter(job => job.estado === 'Oferta').length;
  const rechazados = jobs.filter(job => job.estado === 'Rechazado').length;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Tus Candidaturas</h2>
        
        <div className="flex flex-wrap gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex-1 min-w-[120px]">
            <p className="text-sm text-gray-500 font-medium">Total</p>
            <p className="text-2xl font-bold text-blue-600">{total}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex-1 min-w-[120px]">
            <p className="text-sm text-gray-500 font-medium">Enviados</p>
            <p className="text-2xl font-bold text-gray-600">{enviados}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex-1 min-w-[120px]">
            <p className="text-sm text-gray-500 font-medium">Prueba Técnica</p>
            <p className="text-2xl font-bold text-purple-600">{pruebasTecnicas}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex-1 min-w-[120px]">
            <p className="text-sm text-gray-500 font-medium">Entrevistas</p>
            <p className="text-2xl font-bold text-yellow-600">{entrevistas}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex-1 min-w-[120px]">
            <p className="text-sm text-gray-500 font-medium">Ofertas</p>
            <p className="text-2xl font-bold text-green-600">{ofertas}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex-1 min-w-[120px]">
            <p className="text-sm text-gray-500 font-medium">Rechazados</p>
            <p className="text-2xl font-bold text-red-600">{rechazados}</p>
          </div>
        </div>
      </div>

      {jobs.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500 text-lg mb-4">Aún no has registrado ninguna candidatura.</p>
          <a href="/add" className="text-blue-600 font-semibold hover:underline">
            + Añadir tu primera oferta
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}