import { Link, Outlet } from 'react-router-dom';
import { useJobContext } from '../context/JobContext';

export function Layout() {
  const { stats } = useJobContext();

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Barra de navegación superior */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-black text-blue-600 tracking-tight">
            JobTracker
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Dashboard</Link>
            <Link to="/add" className="text-gray-600 hover:text-blue-600 font-medium">Añadir Oferta</Link>
            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
              Total: {stats.total}
            </div>
          </nav>
        </div>
      </header>

      {/* Aquí es donde React Router inyecta la página activa */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}