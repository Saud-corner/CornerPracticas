# Definición del Proyecto: JobTracker

## 1. Problema que intenta resolver
Cuando terminas el ciclo y empiezas a echar currículums para puestos Junior, acabas aplicando a un montón de sitios (LinkedIn, InfoJobs, páginas de empresas...). Al final es súper fácil perder la cuenta de dónde has echado el CV, si te han contestado o si tienes una prueba técnica pendiente. JobTracker sirve para organizar todo ese caos en un solo sitio.

## 2. Usuario Objetivo
Estudiantes que acaban de graduarse de DAM/DAW o programadores Junior que están en búsqueda activa de trabajo y quieren tener un control claro de sus candidaturas.

## 3. Funcionalidades Principales (MVP)
* **Dashboard:** Una pantalla limpia donde ver todas tus candidaturas en forma de tarjetas.
* **Formulario de Registro:** Un apartado para meter una nueva oferta (Empresa, puesto y el link de la oferta).
* **Estados:** Poder cambiar en qué fase está cada oferta (Enviado, Prueba técnica, Entrevista o Rechazado).
* **Backend propio:** Un servidor hecho con Node.js y Express para guardar todas las ofertas en una API REST, en lugar de usar solo LocalStorage.

## 4. Mejoras Futuras
* **Buscador:** Poder filtrar rápido para ver solo las empresas que te han llamado para hacer entrevista.
* **Notas extra:** Un campo de texto para apuntarte cuánto pagan o qué te han preguntado en las reuniones.
* **Estadísticas:** Un gráfico sencillo que te calcule qué porcentaje de empresas te acaban llamando o rechazando.