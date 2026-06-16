![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

# JobTracker (React + TypeScript)

Proyecto de gestión de candidaturas para las prácticas de DAM en Corner Estudios.

## Enlaces rápidos

| Despliegue | URL |
| :--- | :--- |
| **Frontend** | [Ver en Vercel](corner-practicas-coasguqb8-saud-corners-projects.vercel.app) |
| **Planificaion Trello** | [Ver en Trello](https://trello.com/invite/b/6a277c0e77ca2dba87c99f54/ATTI8fcfee15818659578f58ed3fcb6f34116BA2845B/jobtracker) |

## Características

* 🚀 **Fullstack:** Arquitectura cliente-servidor con React y Express.
* ⚛️ **Gestión de estado:** Uso de React Context API para sincronizar los datos de las candidaturas.
* 🎨 **UI Responsiva:** Interfaz diseñada con Tailwind CSS.
* ⚡ **Despliegue Continuo:** Integración con Vercel para despliegue automático.

## Tecnologías
git commit -m "docs: muevo README a la raíz"
| Frontend | Uso |
| :--- | :--- |
| **React** | Biblioteca UI |
| **TypeScript** | Lenguaje tipado |
| **Vite** | Entorno de desarrollo |
| **Tailwind** | Estilos |

| Backend/Aux | Uso |
| :--- | :--- |
| **Express** | Servidor API |
| **Node.js** | Entorno ejecución |
| **Vercel** | Despliegue |

## Estructura del proyecto

```text
jobtracker/
├── docs/             # Documentación técnica
├── server/           # Backend (Express)
│   └── src/          # Controladores y Rutas
├── src/              # Frontend (React)
│   ├── api/          # Cliente API
│   ├── components/   # Componentes visuales
│   ├── context/      # Estado global
│   ├── hooks/        # Hooks personalizados
│   └── pages/        # Vistas de la aplicación
├── package.json      # Dependencias y scripts
└── vercel.json       # Configuración despliegue
