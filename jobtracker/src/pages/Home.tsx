import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Organiza tu búsqueda de empleo con <span className="text-blue-600">JobTracker</span>
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
        Lleva el control exacto de tus candidaturas, haz seguimiento de las entrevistas y no pierdas ninguna oportunidad. Todo en un panel visual y rápido.
      </p>
      <Link 
        to="/dashboard" 
        className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Ir a mi panel de control
      </Link>
    </div>
  );
}