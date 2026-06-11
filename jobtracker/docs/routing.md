# Documentación de Rutas y Navegación 

Se ha implementado `react-router-dom` (v6) para gestionar la navegación del lado del cliente (SPA), garantizando transiciones rápidas sin recarga de página.

## Estructura del Enrutador (`App.tsx`)
El enrutador está envuelto por el `JobProvider` para que todas las rutas tengan acceso al contexto global.

* **`/` (Index):** Renderiza el componente `<Dashboard />`. Es la vista principal donde se listarán las ofertas.
* **`/add`:** Renderiza `<AddJob />`. Pantalla dedicada a la inserción de nuevas candidaturas.
* **`*` (Catch-all):** Ruta comodín que captura cualquier URL no definida y renderiza el componente `<NotFound />` (Página 404 personalizada).

## Diseño Estructural (`Layout.tsx`)
Se utiliza el patrón de diseño Layout mediante el componente `<Outlet />` de React Router. Esto permite mantener una barra de navegación superior (Navbar) persistente en toda la aplicación, en la cual se han implementado componentes `<Link>` para la navegación interna, mejorando el rendimiento general.