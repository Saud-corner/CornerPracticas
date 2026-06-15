# Fase de Testing y Mejoras

Durante la recta final del desarrollo, se han llevado a cabo pruebas manuales para asegurar la estabilidad de la aplicación y la correcta comunicación entre el frontend (React) y el backend (Node/Express).

## 1. Pruebas Funcionales (Flujo CRUD)
Se ha verificado el correcto funcionamiento del ciclo de vida de los datos sin base de datos (almacenamiento en memoria):
* **Creación (POST):** Las nuevas candidaturas se envían correctamente al servidor y el estado global se sincroniza instantáneamente en el Dashboard.
* **Lectura (GET):** La aplicación recupera el listado actual al cargar la página principal.
* **Actualización (PUT):** Se han solucionado problemas de tipado con los IDs, asegurando que las modificaciones de estado (ej. de "Enviado" a "Entrevista") se guarden con éxito.
* **Borrado (DELETE):** Las tarjetas se eliminan correctamente tanto de la interfaz visual como del array del servidor.

## 2. Comprobación de Diseño Responsive
Se ha diseñado la interfaz utilizando Tailwind CSS, garantizando que la aplicación sea usable en cualquier dispositivo. Se ha implementado un sistema de navegación mediante `flex-col` y `md:flex-row` que adapta los menús y el pie de página de forma dinámica.

### Vista de Escritorio (Desktop)
En resoluciones amplias, el layout utiliza un sistema de *grid* que aprovecha el espacio horizontal y la barra de navegación se mantiene en una sola línea.

![Vista Desktop](./1-desktop.png)

### Vista Móvil (Mobile)
En resoluciones reducidas (móviles y tablets), el *grid* colapsa a una única columna. La barra de navegación superior apila los enlaces de forma ordenada para evitar solapamientos y facilitar el acceso táctil.

![Vista Móvil](./2-movil.png)

## 3. Corrección de Bugs
* **Bug Identificado:** Fallo en peticiones `PUT` devolviendo un error `404 Not Found` en la consola.
* **Causa:** Conflicto de tipos en el backend al comparar IDs generados temporalmente (UUID) frente a IDs numéricos del servidor tras un reinicio.
* **Solución:** Implementación de sanitización de tipos en el archivo `jobService.js`, forzando la comparación de identificadores como cadenas de texto.