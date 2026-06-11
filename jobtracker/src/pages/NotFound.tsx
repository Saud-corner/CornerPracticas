import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-black text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Página no encontrada</h2>
      <p className="text-gray-500 mb-8">La ruta a la que intentas acceder no existe.</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
        Volver al inicio
      </Link>
    </div>
  );
}