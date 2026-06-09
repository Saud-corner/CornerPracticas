# Documentación de Componentes 

## 1. Tipos de Datos (`src/types/index.ts`)
Se ha creado una interfaz `Job` y un tipo `JobStatus` para tipar estrictamente las props de los componentes y la futura respuesta de la API.

## 2. Componentes Reutilizables

### `StatusBadge.tsx`
* **Descripción:** Etiqueta visual para el estado de la candidatura. Usa un diccionario (`Record<JobStatus, string>`) para aplicar colores dinámicos de Tailwind CSS (ej. verde para Oferta, rojo para Rechazado).
* **Props:** `{ status: JobStatus }`

### `JobCard.tsx`
* **Descripción:** Tarjeta que muestra la información de una candidatura individual. Aplica el concepto de composición de componentes al renderizar internamente un `<StatusBadge />`.
* **Estilos:** Usa Tailwind CSS para sombras (`shadow-md`), flexbox para alineación y bordes suaves.
* **Props:** `{ job: Job }`