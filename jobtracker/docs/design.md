# Diseño y Arquitectura de la Aplicación: JobTracker

Este documento detalla todas las decisiones técnicas tomadas para la estructura, gestión de datos y diseño de red de la aplicación.

## 1. Estructura de Componentes y Reutilización

Para mantener el proyecto limpio y escalable, la interfaz se divide en componentes especializados.

### Componentes Principales (Páginas y Contenedores)
* **App.tsx**: El nodo raíz de React que configura los proveedores de contexto y el enrutador general.
* **Layout.tsx**: Componente estructural que envuelve la aplicación. Contiene la barra de navegación superior (Navbar) y asegura un diseño visual consistente.
* **Dashboard.tsx (`src/pages/`)**: La página principal del usuario. Se encarga de coordinar la lógica de carga de datos desde la API y organizar las secciones de la pantalla.
* **JobForm.tsx (`src/components/`)**: El formulario para añadir nuevas candidaturas. Controla sus propios inputs de texto y desplegables.
* **JobList.tsx (`src/components/`)**: Un contenedor que recibe la lista de ofertas filtradas y hace un mapeo (`.map()`) para renderizarlas en cuadrícula.

### Componentes Reutilizables (UI)
* **JobCard.tsx**: Tarjeta individual que muestra los datos de una candidatura concreta. Es reutilizable porque acepta las propiedades de la oferta (`props`) de forma tipada y se adapta dinámicamente.
* **StatusBadge.tsx**: Pequeña etiqueta visual para el estado de la oferta (*Enviado*, *Entrevista*, *Rechazado*, etc.). Recibe el estado como string y cambia su color de fondo usando clases dinámicas de Tailwind.

---

## 2. Gestión del Estado de la Aplicación

El estado se divide en dos niveles para evitar renderizados innecesarios y mantener el flujo limpio:

* **Estado Local (`useState`)**: Se utiliza exclusivamente dentro de los formularios (`JobForm.tsx`) para capturar lo que escribe el usuario antes de enviarlo, y para controlar estados visuales efímeros.
* **Estado Global (`Context API`)**: Se implementa un contexto (`JobContext`) que envuelve toda la aplicación. Este contexto almacena el array global de candidaturas, el estado de carga (`loading`) y los posibles mensajes de error de red. 

---

## 3. Diseño del Backend y Contratos de la API (REST)

El servidor Express expondrá el recurso principal bajo el prefijo `/api/v1/jobs`. Todos los datos se envían y reciben en formato JSON.

### Endpoints e Intercambio de Datos:

#### 1. Obtener candidaturas
* **Ruta:** `GET /api/v1/jobs`
* **Código HTTP de éxito:** `200 OK`
* **Respuesta (JSON):**
```json
[
  {
    "id": "1a2b3c",
    "empresa": "Corner Estudios",
    "puesto": "Desarrollador Frontend Junior",
    "estado": "Entrevista",
    "url": "[https://oferta.com/corner](https://oferta.com/corner)",
    "fecha": "2026-06-09"
  }
]
```

#### 2. Crear una nueva candidatura
* **Ruta:** `POST /api/v1/jobs`
* **Código HTTP de éxito:** `201 Created`
* **Cuerpo de la petición (JSON):**
```json
{
  "empresa": "Google",
  "puesto": "Android Developer",
  "estado": "Enviado",
  "url": "[https://careers.google.com/job](https://careers.google.com/job)"
}
```
* **Respuesta (JSON):** Devuelve el objeto completo creado con su ID único generado en el servidor.

#### 3. Actualizar el estado de una candidatura
* **Ruta:** `PUT /api/v1/jobs/:id`
* **Código HTTP de éxito:** `200 OK`
* **Cuerpo de la petición (JSON):**
```json
{
  "estado": "Prueba Técnica"
}
```
* **Respuesta (JSON):** El objeto de la candidatura modificado con el nuevo estado.

#### 4. Eliminar una candidatura
* **Ruta:** `DELETE /api/v1/jobs/:id`
* **Código HTTP de éxito:** `200 OK` o `204 No Content`
* **Respuesta (JSON):** Un mensaje de confirmación o cuerpo vacío.

---

## 4. Persistencia de Datos

* **En el Cliente (Frontend):** No se guarda nada permanentemente. Los datos viven en el estado de React en memoria mientras la pestaña esté abierta. La API es la **única fuente de verdad**.
* **En el Servidor (Backend):** Para asegurar que los datos no se borren, el servidor Node.js guardará el JSON de las candidaturas de forma local (usando un array global en memoria o un archivo físico `.json`).

---

## 5. Diagrama del Flujo de Datos

```text
+-------------------------------------------------------------+
|                     1. CAPA DE INTERFAZ                     |
|  Usuario pulsa "Guardar" -> Captura datos con useState      |
+------------------------------+------------------------------+
                               |
                               v 
+-------------------------------------------------------------+
|                     2. ESTADO GLOBAL                        |
|  El componente llama a la función del JobContext            |
+------------------------------+------------------------------+
                               |
                               v 
+-------------------------------------------------------------+
|                     3. CLIENTE DE API                       |
|  src/api/client.ts hace fetch() mapeando tipos TypeScript   |
+------------------------------+------------------------------+
                               |
                               v 
+-------------------------------------------------------------+
|                     4. ENDPOINT (EXPRESS)                   |
|  server/src/routes intercepta -> Llama al Controller        |
+------------------------------+------------------------------+
```

https://trello.com/invite/b/6a277c0e77ca2dba87c99f54/ATTI8fcfee15818659578f58ed3fcb6f34116BA2845B/jobtracker