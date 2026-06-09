# Documentación de Hooks y Estado 

Para gestionar la lógica de la aplicación de forma limpia y separada de la interfaz, se ha implementado un *Custom Hook* llamado `useJobs` (`src/hooks/useJobs.ts`). Este hook centraliza toda la gestión de estado de las candidaturas.

A continuación se detalla cómo se han aplicado los hooks nativos de React cumpliendo con los requisitos del proyecto:

1. **`useState`**: 
   Se utiliza para manejar el estado local del hook. Controlamos la lista de candidaturas (`jobs`) y un estado booleano de carga (`loading`) para saber cuándo mostrar un spinner en la interfaz.

2. **`useEffect`**: 
   Se usa para manejar los efectos secundarios, concretamente la simulación de una petición de red asíncrona al montar la aplicación (con un array de dependencias vacío `[]`). Más adelante, esto se sustituirá por una llamada real con `fetch` a la API de Express.

3. **`useCallback`**: 
   Aplicado a la función `addJob`. Al envolver la función de añadir candidaturas en un `useCallback`, garantizamos que la referencia de la función no cambie entre renderizados. Esto evita renders innecesarios en los componentes hijos (como formularios) que reciban esta función por *props*.

4. **`useMemo`**: 
   Se ha utilizado para optimizar cálculos derivados del estado principal. La constante `stats` calcula el total de candidaturas y cuántas están en estado de "Entrevista". Gracias a `useMemo`, este filtrado del array solo se ejecuta cuando la variable `jobs` sufre alguna modificación, ahorrando ciclos de CPU.