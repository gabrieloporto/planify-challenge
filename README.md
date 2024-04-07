# Planify Challenge

## Tabla de contenidos

- [Proyecto](#proyecto)
  - [Ejecutar](#ejecutar)
  - [Descripción](#descripción)
  - [Diseño y responsividad](#diseño-y-responsividad)
    - [Diseño Mobile](#diseño-mobile)
    - [Diseño Desktop](#diseño-desktop)
  - [Interactividad y uso](#interactividad-y-uso)
    - [Seleccionar un servicio](#seleccionar-un-servicio)
    - [Seleccionar un horario](#seleccionar-un-horario)
    - [Confirmar turno](#confirmar-turno)
  - [Pruebas](#pruebas)
  - [Tecnologías y herramientas](#tecnologías-y-herramientas)
- [Autor](#autor)

## Proyecto

### Ejecutar

Para ejecutar el proyecto en tu máquina, primero debes clonar el repositorio. Puedes usar el administrador de paquetes de tu preferencia. En mi caso, utilicé pnpm.

```bash
pnpm clone https://github.com/gabrieloporto/planify-challenge
```

Luego, instala las dependencias.

```bash
pnpm install
```

Finalmente, si deseas correr el proyecto localmente.

```bash
pnpm run dev
```

### Descripción

Esta es mi solución al desafío de Desarrollador Junior para Planify. <br/>
El proyecto consiste en una página de reservas que nos permite seleccionar un servicio, un horario y confirmar nuestro turno.

### Diseño y responsividad

El proyecto fue construido siguiendo el enfoque mobile-first, siendo responsivo para múltiples dispositivos.

#### Diseño Mobile

![Captura de pantalla del proyecto en version mobile](/src/assets/Mobile-design.webp)

#### Diseño Desktop

![Captura de pantalla del proyecto en version desktop](/src/assets/Desktop-design.webp)

### Interactividad y uso

#### Seleccionar un servicio

Esta es la sección principal de la aplicación, donde tenemos un listado de categorías. Cada categoría despliega sus respectivos servicios. Por cada servicio, tenemos un botón que nos permite seleccionar el servicio. Una vez seleccionado el servicio, podemos pasar a la siguiente sección.

![Captura de pantalla del proyecto en la seccion seleccionar servicio](/src/assets/Select-service.webp)

#### Seleccionar un horario

Una vez hayamos seleccionado el servicio, pasaremos a esta sección. Aquí nos encontraremos con los próximos turnos disponibles, que contendrán las fechas disponibles y los respectivos horarios para cada fecha. Una vez hayamos seleccionado un horario, podremos avanzar; de lo contrario, el botón "Siguiente" quedará deshabilitado.

![Captura de pantalla del proyecto en la seccion seleccionar horario](/src/assets/Select-hour.webp)

#### Confirmar turno

Finalmente, en la sección confirmar turno, veremos el servicio, la fecha y hora seleccionados.

![Captura de pantalla del proyecto en la seccion seleccionar horario](/src/assets/Confirm-appointment.webp)

### Pruebas

Para las pruebas, estoy haciendo uso de Vitest en conjunto con react-testing-library.

Implementé las pruebas más esenciales, como:

- Asegurarme de que se haya seleccionado un servicio antes de pasar a la siguiente sección.
- Asegurarme de que se haya seleccionado un horario antes de pasar a la siguiente sección.
- Asegurarme de que los botones de la sección confirmar turno sean correctos.

Para ejecutar las pruebas, en el proyecto debes ejecutar el siguiente comando:

```bash
pnpm test
```

Estoy haciendo uso de una dependencia de Vitest llamada Vitest UI, que nos permitirá correr una interfaz localmente de nuestro test para revisarlos de una manera más sencilla.

La interfaz se abrirá automáticamente luego de ejecutar el comando anteriormente mencionado y se verá de la siguiente manera:

![Captura de pantalla de la interfaz que nos proporciona Vitest UI](/src/assets/Vitest-UI.webp)

A la izquierda veremos los componentes testeados, en el medio los casos y a la derecha el estado de estos.

## Proceso

### Tecnologías y herramientas

Utilicé las siguientes tecnologías y herramientas:

- Desarrollo:
  - [React](https://react.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)

<br>

- Control de versiones:
  - [Git](https://git-scm.com/)
  - [GitHub](https://github.com/)

<br>

- Testing:
  - [Vitest](https://vitest.dev/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

<br>

- Despliegue:
  - [Vercel](https://vercel.com/)

## Autor

- Sitio desarrollado por [Gabriel Oporto](https://gabrieloporto.vercel.app).
