# Retrospectiva del Proyecto JobTracker

## 1. Conexión Frontend-Backend-API
He logrado conectar el frontend (React) con el backend (Node.js) para que los datos sean persistentes y la app funcione como un servicio real.
* **Frontend:** He usado React con TypeScript y `JobContext` para manejar el estado global.
* **Backend:** Express funciona como la API principal.
* **Integración:** He creado un `client.ts` para centralizar las peticiones. Esto ha mantenido el código mucho más limpio, evitando repetir `fetch` por los componentes.

## 2. Problemas técnicos
* **Despliegue en Vercel:** Ha sido el mayor dolor de cabeza. Al principio, Vercel no encontraba la carpeta `jobtracker` y el build fallaba. Luego, con TypeScript tuve varios errores y era muy estricto , lo que me obligó a revisar otra y otra vez bien los tipos.
* **Integración:** Me ha costado coordinar los estados de carga y error en la UI para que el usuario siempre sepa qué está pasando, pero al final ha quedado bastante fluido.

## 3. Uso de IA durante el desarrollo
La IA ha sido como tener a alguien al lado ayudándome a depurar, ha sido de gran ayuda.
* **Debugging:** Me ha servido sobre todo para entender por qué fallaban los logs de Vercel cuando yo no veía el problema.
* **Aprendizaje:** No la he usado para que haga el trabajo por mí, sino para salir de bloqueos técnicos, especialmente con TypeScript y las configuraciones de build. Me ha ayudado a aprender qué estaba haciendo mal.

## 4. Reflexión final
La lección es clara: una cosa es que el código funcione en `localhost:5174` y otra muy distinta es que despliegue en un entorno real. La parte de configurar el entorno de despliegue ha sido donde más he aprendido, aunque también donde más tiempo he perdido. Estoy contento con el resultado porque al final la app funciona y los datos se guardan donde deben. Ha sido un proyecto chulo sinceramente vite y react han dado un poco de guerra pero de todo se aprende.