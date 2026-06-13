# Documentación de Formularios e Interacción 

Para cumplir con los requisitos de interacción del usuario, se ha desarrollado un formulario controlado en el componente `<AddJob />`. Esta implementación asegura que React mantenga la única fuente de verdad sobre los datos introducidos.

## Características Técnicas Implementadas:

1. **Componentes Controlados (`useState`):** Cada elemento del formulario (`<input>` y `<select>`) tiene su valor enlazado a una variable de estado individual, actualizada mediante los eventos `onChange`.

2. **Validación Básica en la Frontera (Frontend):** Se ha programado una validación defensiva en la función `handleSubmit`. Se utiliza el método `.trim()` para impedir el envío de campos obligatorios (Empresa y Puesto) compuestos únicamente por espacios en blanco.

3. **Feedback Visual y UX:**
   * **Errores:** Si la validación falla, se interrumpe el ciclo de ejecución y se renderiza un banner rojo (`bg-red-50`) indicando el problema.
   * **Éxito:** Si la validación es correcta, se muestra un banner verde, se deshabilitan todos los inputs para evitar mutaciones accidentales o envíos duplicados, y el botón cambia su estado a "Guardando...".
   * **Navegación:** Se integra `useNavigate` dentro de un `setTimeout` asíncrono para redirigir al usuario al Dashboard (`/`) tras una pausa de 1.5 segundos, mejorando la sensación de persistencia de datos.