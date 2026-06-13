import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useJobContext } from '../context/JobContext';
import type { JobStatus } from '../types';

export function AddJob() {
  const { addJob } = useJobContext();
  const navigate = useNavigate();

  // Estados controlados
  const [empresa, setEmpresa] = useState('');
  const [puesto, setPuesto] = useState('');
  const [url, setUrl] = useState('');
  const [estado, setEstado] = useState<JobStatus>('Enviado');
  
  // Feedback visual
  const [error, setError] = useState('');
  const [exito, setExito] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!empresa.trim() || !puesto.trim()) {
      setError('Asegúrate de rellenar los campos obligatorios (Empresa y Puesto).');
      return;
    }

    const newJob = {
      id: crypto.randomUUID(),
      empresa,
      puesto,
      url,
      estado,
      fecha: new Date().toISOString().split('T')[0],
    };

    addJob(newJob);
    setExito(true);

    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {/* Tarjeta principal con sombras suaves y diseño limpio */}
      <div className="bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
        
        {/* Cabecera del formulario */}
        <div className="mb-8 border-b border-gray-100 pb-5">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Registrar Candidatura
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Añade los detalles de la oferta para llevar un control exacto en tu JobTracker.
          </p>
        </div>
        
        {/* Alertas */}
        {error && (
          <div className="mb-6 p-4 bg-red-50/80 border border-red-200 text-red-700 rounded-xl text-sm font-medium flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
            {error}
          </div>
        )}
        
        {exito && (
          <div className="mb-6 p-4 bg-green-50/80 border border-green-200 text-green-700 rounded-xl text-sm font-medium flex items-center gap-2 animate-pulse">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            ¡Registrado! Volando a tu panel...
          </div>
        )}

        {/* Formulario Estilizado */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Empresa */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Empresa <span className="text-blue-500">*</span></label>
              <input 
                type="text" 
                value={empresa} 
                onChange={(e) => setEmpresa(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                placeholder="Ej. Corner Estudios"
                disabled={exito}
              />
            </div>

            {/* Input Puesto */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Puesto ofertado <span className="text-blue-500">*</span></label>
              <input 
                type="text" 
                value={puesto} 
                onChange={(e) => setPuesto(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                placeholder="Ej. Fullstack Developer"
                disabled={exito}
              />
            </div>
          </div>

          {/* Input URL */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Enlace de la oferta</label>
            <input 
              type="url" 
              value={url} 
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
              placeholder="https://linkedin.com/jobs/..."
              disabled={exito}
            />
          </div>

          {/* Select Estado */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Estado actual del proceso</label>
            <div className="relative">
              <select 
  value={estado} 
  onChange={(e) => setEstado(e.target.value as JobStatus)}
 className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all cursor-pointer shadow-sm hover:border-gray-200"
  disabled={exito}
>
  <option value="Enviado">Enviado</option>
  <option value="Prueba Técnica">Prueba Técnica</option>
  <option value="Entrevista">Entrevista</option>
  <option value="Oferta">Oferta Recibida</option>
  <option value="Rechazado">Descartado</option>
</select>
              
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Botón de Acción */}
          <button 
            type="submit" 
            disabled={exito}
            className="w-full mt-8 bg-gray-900 text-white font-bold py-3.5 px-4 rounded-xl hover:bg-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {exito ? 'Guardando en JobTracker...' : 'Guardar Candidatura'}
          </button>
        </form>
      </div>
    </div>
  );
}