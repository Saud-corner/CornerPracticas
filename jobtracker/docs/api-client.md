# Capa de red y Tipado

Para no ensuciar los componentes de React con llamadas directas a la API, he sacado toda esa lógica a un archivo propio (`src/api/client.ts`). 

## 1. Cliente API Tipado
He usado `fetch` para hacer las peticiones al backend. Para no liarla con los tipos de datos, he definido una interfaz que marca exactamente qué entra y qué sale en cada función:

```typescript
export interface JobClient {
  getJobs: () => Promise<Job[]>;
  createJob: (jobData: any) => Promise<Job>;
  updateJob: (id: number | string, jobData: any) => Promise<Job>;
  deleteJob: (id: number | string) => Promise<void>;
}
```
Así, cuando llamo a estas funciones desde React, TypeScript me avisa si me falta algún dato que requiere la interfaz `Job`.

## 2. Fuera LocalStorage
Cumpliendo con lo que pedía el ejercicio, he quitado la persistencia de datos en el `LocalStorage`. Ahora todo depende del backend; la API es la única fuente de verdad.

## 3. Gestión de los estados de red
En el Contexto (`JobContext.tsx`), he configurado tres estados para controlar cómo se muestran las cosas al usuario cuando hace una petición:
* **Loading:** Un estado `true`/`false` que sirve para mostrar que la página está cargando los datos iniciales.
* **Data:** Si el fetch va bien (`response.ok`), los datos se guardan en el estado `jobs` y se pintan en pantalla.
* **Error:** Si el servidor devuelve un error o se cae la conexión, el bloque `catch` lo pilla y guardo el mensaje en un estado `error` para poder mostrar un aviso en la interfaz en lugar de que la app se rompa.