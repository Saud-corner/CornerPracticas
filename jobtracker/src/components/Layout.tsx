import { Link } from 'react-router-dom';
import { useJobContext } from '../context/JobContext';

export function Layout({ children }: { children: React.ReactNode }) {
  
  const { jobs } = useJobContext();

  return (
    
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-4">

            <Link to="/" className="text-2xl font-black text-blue-600 tracking-tight">
              JobTracker
            </Link>
            
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
            
              <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Dashboard</Link>
              <Link to="/add" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Añadir Oferta</Link>
              <span className="bg-blue-50 text-blue-700 py-1 px-4 rounded-full text-sm font-bold">
                
                Total: {jobs.length}
              </span>
            </div>
          </div>
        </div>
      </nav>
      
      
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500 mt-auto">
        <p>© 2026 JobTracker. Saud Tofique.</p>
      </footer>
    </div>
  );
}