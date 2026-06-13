import { useJobContext } from '../context/JobContext';
import { JobCard } from '../components/JobCard';

export function Dashboard() {
  const { jobs } = useJobContext();

  const totalJobs = jobs.length;
  const totalEntrevistas = jobs.filter(job => job.estado === 'Entrevista').length;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Tus Candidaturas</h2>
        
        <div className="flex gap-4">
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
            <span className="text-sm text-gray-500 block">Total</span>
            <span className="text-xl font-bold text-blue-600">{totalJobs}</span>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
            <span className="text-sm text-gray-500 block">Entrevistas</span>
            <span className="text-xl font-bold text-green-600">{totalEntrevistas}</span>
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