# Documentación de Context y Estado Global 

Para evitar el problema del *prop drilling* (tener que pasar funciones o datos a través de componentes intermedios que no los necesitan), se ha implementado la **Context API** nativa de React para gestionar el estado global.

## 1. Archivo de Implementación (`src/context/JobContext.tsx`)
Se ha unificado la lógica de estado global creando un `JobContext` y un componente proveedor llamado `JobProvider`. Este proveedor utiliza internamente el custom hook `useJobs` y distribuye sus estados (`jobs`, `loading`, `stats`) y sus métodos (`addJob`) por todo el árbol de componentes.

Además, se proporciona el método encapsulado `useJobContext()` para que los componentes hijos consuman el estado global en una sola línea de código, incluyendo un control de errores si se intenta usar fuera del proveedor.

## 2. ¿En qué casos es útil usar Context API?
En el diseño de esta aplicación fullstack, el estado global es fundamental por los siguientes motivos:
* **Centralización de datos:** La lista de candidaturas es la fuente de verdad para múltiples pantallas (el Dashboard principal, listas filtradas o paneles de analíticas).
* **Acceso directo desde formularios:** Componentes como `JobForm.tsx` necesitan disparar la acción `addJob` para guardar nuevas ofertas. Gracias al contexto, el formulario puede invocar esta acción directamente sin que los componentes contenedores tengan que actuar como intermediarios.
* **Consistencia de interfaz:** Las estadísticas del panel superior se actualizan automáticamente en el momento en el que cualquier otra sección añade o modifica una candidatura, manteniendo la interfaz síncrona.