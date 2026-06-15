# Documentación de la API

El backend de la aplicación está hecho con Node.js y Express. He seguido una arquitectura por capas (rutas, controladores y servicios) para tener el código ordenado. Es una API REST que se comunica en formato JSON.

**URL Base:** `http://localhost:3000/api/v1/jobs`

## Endpoints

### 1. Obtener todas las candidaturas
* **Método:** `GET`
* **Ruta:** `/`
* **Descripción:** Devuelve un array con todas las candidaturas que hay en la base de datos.
* **Ejemplo de respuesta (200 OK):**
```json
  [
    {
      "id": "0cd45020-...",
      "empresa": "Corner Estudios",
      "puesto": "Desarrollador Frontend",
      "estado": "Enviado",
      "url": "https://...",
      "fecha": "2024-06-15"
    }
  ]
  ```

### 2. Crear una candidatura
* **Método:** `POST`
* **Ruta:** `/`
* **Descripción:** Añade una nueva candidatura.
* **Ejemplo de lo que hay que enviar (Body):**
```json
  {
    "empresa": "Nueva Empresa",
    "puesto": "Backend Developer",
    "estado": "Enviado",
    "url": ""
  }
  ```
* **Respuesta:** Devuelve un `201 Created` con el objeto de la candidatura y su ID generado.

### 3. Actualizar una candidatura
* **Método:** `PUT`
* **Ruta:** `/:id`
* **Descripción:** Actualiza los datos de una candidatura en concreto, pasándole su ID en la URL. Se usa sobre todo para cambiar el estado de la candidatura.
* **Ejemplo de lo que se envía (Body):**
```json
  {
    "estado": "Entrevista"
  }
  ```
* **Respuesta:** Devuelve un `200 OK` con la candidatura actualizada.

### 4. Eliminar una candidatura
* **Método:** `DELETE`
* **Ruta:** `/:id`
* **Descripción:** Borra una candidatura usando su ID.
* **Respuesta:** Devuelve un `200 OK` si se ha borrado bien.