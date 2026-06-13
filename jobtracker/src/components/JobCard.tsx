import { useState } from 'react';
import { useJobContext } from '../context/JobContext';
import type { Job, JobStatus } from '../types';

const getEstadoStyle = (estado: JobStatus): string => {
  switch (estado) {
    case 'Enviado': return 'bg-blue-100 text-blue-700';
    case 'Entrevista': return 'bg-yellow-100 text-yellow-700';
    case 'Oferta': return 'bg-green-100 text-green-700';
    case 'Rechazado': return 'bg-red-100 text-red-700';
    default: return 'bg-purple-100 text-purple-700';
  }
};

export function JobCard({ job }: { job: Job }) {
  const { editJob, removeJob } = useJobContext();
  const [editando, setEditando] = useState(false);
  const [empresa, setEmpresa] = useState(job.empresa);
  const [puesto, setPuesto] = useState(job.puesto);
  const [url, setUrl] = useState(job.url);
  const [estado, setEstado] = useState<JobStatus>(job.estado);
  const [error, setError] = useState('');

  const handleGuardar = async () => {
    if (!empresa.trim() || !puesto.trim()) {
      setError('Empresa y Puesto son obligatorios.');
      return;
    }
    try {
      await editJob(job.id, { empresa, puesto, url, estado });
      setEditando(false);
      setError('');
    } catch (e) {
      console.error('Error al guardar:', e);
      setError('Error al guardar. Mira la consola (F12)');
    }
  };

  const handleCancelar = () => {
    setEmpresa(job.empresa);
    setPuesto(job.puesto);
    setUrl(job.url);
    setEstado(job.estado);
    setError('');
    setEditando(false);
  };

  const handleDelete = async () => {
    if (confirm('Seguro que quieres eliminar esta candidatura?')) {
      try {
        await removeJob(job.id);
      } catch (e) {
        console.error('Error al borrar:', e);
        alert('Error al borrar. Mira la consola (F12)');
      }
    }
  };

  return (
    <div>
      {editando ? (
        <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-md">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Editar Candidatura</h3>
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Empresa *</label>
                <input
                  type="text"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm"
                  placeholder="Ej. Corner Estudios"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Puesto *</label>
                <input
                  type="text"
                  value={puesto}
                  onChange={(e) => setPuesto(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm"
                  placeholder="Ej. Fullstack Developer"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Enlace</label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm"
                placeholder="https://linkedin.com/jobs/..."
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Estado</label>
              <select
                value={estado}
                onChange={(e) => setEstado(e.target.value as JobStatus)}
                className="w-full px-4 py-2.5 bg-white border-2 border-gray-100 rounded-xl outline-none text-sm"
              >
                <option value="Enviado">Enviado</option>
                <option value="Prueba Tecnica">Prueba Tecnica</option>
                <option value="Entrevista">Entrevista</option>
                <option value="Oferta">Oferta Recibida</option>
                <option value="Rechazado">Descartado</option>
              </select>
            </div>
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={handleGuardar}
                className="flex-1 bg-gray-900 text-white font-bold py-2.5 rounded-xl text-sm">
                Guardar cambios
              </button>
              <button type="button" onClick={handleCancelar}
                className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-lg text-gray-800">{job.puesto}</h3>
              <p className="text-gray-500 text-sm">{job.empresa}</p>
            </div>
            <span className={'text-xs font-semibold px-3 py-1 rounded-full ' + getEstadoStyle(job.estado)}>
              {job.estado}
            </span>
          </div>
          {job.url && (
            <a href={job.url} target="_blank" rel="noopener noreferrer"
              className="text-blue-500 text-xs hover:underline block mb-4 truncate">
              {job.url}
            </a>
          )}
          <p className="text-gray-400 text-xs mb-4">{job.fecha}</p>
          <div className="flex gap-4 border-t border-gray-100 pt-4">
            <button type="button" onClick={() => setEditando(true)}
              className="text-blue-500 text-sm font-medium hover:text-blue-700">
              Editar
            </button>
            <button type="button" onClick={handleDelete}
              className="text-red-400 text-sm font-medium hover:text-red-600">
              Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
