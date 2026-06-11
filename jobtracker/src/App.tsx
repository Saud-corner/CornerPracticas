import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { AddJob } from './pages/AddJob';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <JobProvider>
      <BrowserRouter>
        <Routes>
          {/* El Layout envuelve todas las rutas principales */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add" element={<AddJob />} />
          </Route>
          {/* Ruta comodín para el 404, fuera del layout si quieres, o dentro */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </JobProvider>
  );
}

export default App;