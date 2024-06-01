# Proyecto Agenda Asesoría

Este proyecto es una aplicación para gestionar asesorías, desarrollada utilizando React y React Router, con componentes modulares y navegación para diferentes roles (Cliente y Asesor).



## Requisitos Previos

Antes de instalar y ejecutar la aplicación, asegúrate de tener instalado lo siguiente:

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- Git
- No te olvides de ejecutar el backend antes de inicializar la aplicacion: desde la carpeta backend genera una nueva terminal y ejecuta node server.js

## Instrucciones de Instalación

Sigue estos pasos para instalar y ejecutar la aplicación:

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
2. Navega al directorio del proyecto/si estas en un IDE como Visual Studio puedes abrir una nueva terminal:
    ```bash
    cd ProyHugo/agenda-asesoria
3. Instala las dependencias necesarias:
    ```bash
    npm install

## Instrucciones de Ejecución.
1. Ejecuta la aplicación:
    ```bash
    npm start
    ```

La aplicación estará disponible en `http://localhost:5173/`.

## Prototipos de Vista y Cómo Utilizarlos

### Página de Inicio

La página de inicio (`Home.js`) es la primera vista que verán los usuarios. Aquí pueden encontrar información general sobre la plataforma y botones con la funcionalidad de agendar una cita como cliente o ver las citas agendadas como asesor.

### Dashboard del Cliente

En la vista del cliente se puede acceder a su panel de control donde puede agendar una cita ingresando datos sobre la misma en los campos disponibles.

### Dashboard del Asesor

En la vista deñ asesor se hace uso del metodo get para obtener todas las citas que han agendado los usuarios.

# ClienteForm - Pruebas y Ejecución

## Introduccion a las pruebas

Este proyecto incluye un componente de formulario llamado `ClienteForm` que permite a los usuarios agendar citas proporcionando detalles como el título de la cita, la prioridad, el número de teléfono, los enlaces de las prendas a evaluar y una descripción. Además, se proporciona un archivo de pruebas que verifica la correcta renderización de los elementos del formulario utilizando la biblioteca `@testing-library/react`.

## Como ejecutar las pruebas

1. Asegúrate de estar en el directorio del proyecto.
2. Ejecuta el comando de pruebas:
    ```bash
    npm test
    ```
## Descripcion de las pruebas

El archivo de pruebas __tests__/ClienteForm.test.tsx contiene una prueba básica que verifica que todos los elementos del formulario ClienteForm se renderizan correctamente. Se utilizan las siguientes funciones y métodos de @testing-library/react y @testing-library/jest-dom:

render: Renderiza el componente en un entorno de prueba.
screen.getByLabelText: Selecciona los elementos del formulario por su etiqueta.
screen.getByRole: Selecciona el botón de envío por su rol.
expect: Verifica que los elementos estén presentes en el documento.

### Detalles de las Pruebas
Verifica que el campo de entrada para el título de la cita (Título para tu cita:) se renderiza correctamente.
Verifica que el campo de selección para la prioridad (Pagar para ser prioridad:) se renderiza correctamente.
Verifica que el campo de entrada para el número de teléfono (Número de teléfono:) se renderiza correctamente.
Verifica que el campo de entrada para los enlaces (Links de prendas a evaluar:) se renderiza correctamente.
Verifica que el área de texto para la descripción (Descripción:) se renderiza correctamente.
Verifica que el botón para agendar la cita (Agendar Cita) se renderiza correctamente.



"# frontend" 
