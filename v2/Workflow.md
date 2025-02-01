# Git Workflow

Este documento describe el flujo de trabajo de Git definido para el proyecto y tener una colaboración efectiva. Utilizamos ramas separadas para desarrollo de funcionalidades, la rama principal (`main`), una rama para integración (`develop`), una rama para documentación (`docs`), y ramas para características específicas.

## Estructura de Ramas

- **`main`**: Rama principal donde se encuentra el código listo para producción.
- **`develop`**: Rama de desarrollo donde se integran las funcionalidades completadas antes de ser fusionadas con `main`.
- **`feature/<nombre-de-feature>`**: Ramas de características individuales donde los desarrolladores trabajan en nuevas funcionalidades o mejoras.
- **`hotfix/<nombre-de-hotfix>`**: Ramas para solucionar errores críticos directamente en `main` o `develop`.
- **`docs`**: Rama dedicada exclusivamente a la documentación del proyecto.

## Asignación de Roles

### 1. Desarrollador 1 (Dev 1): API Services

#### Responsabilidades:

- Trabajar en el archivo `stock-service.js` dentro de la carpeta `services`.
- Mantener y mejorar la lógica de llamadas a la API (como `fetchStockData` y `fetchCurrentPrice`).
- Asegurar que las respuestas de la API se integren correctamente con los controladores.

#### Tareas específicas:

- Verificar que la API esté devolviendo los datos necesarios para el ordenamiento y la consolidación.
- Implementar mejoras en la eficiencia de las llamadas a la API.

### 2. Desarrollador 2 (Dev 2): Controllers

#### Responsabilidades:

- Trabajar en el archivo `dashboard-ctrl.js` dentro de la carpeta `controllers`.
- Gestionar la interacción entre la UI y los datos, especialmente en las funciones de ordenamiento y consolidación.
- Implementar y mantener las funciones de ordenamiento (`sortStocks`) y consolidación (`calculateResumen`).

#### Tareas específicas:

- Refactorizar y optimizar las funciones de ordenamiento y consolidación.
- Asegurar que los datos se guarden y recuperen correctamente del `localStorage`.
- Coordinar con Dev 1 para manejar los datos provenientes de la API.

### 3. Desarrollador 3 (Dev 3): Views y UI/UX

#### Responsabilidades:

- Trabajar en los archivos `HTML` y `CSS` dentro de las carpetas `dashboard` y `home`.
- Diseñar y mantener las vistas para garantizar una experiencia de usuario óptima.
- Implementar el diseño responsive utilizando `media queries`.

#### Tareas específicas:

- Asegurar que la interfaz sea responsive y funcione correctamente en diferentes dispositivos.
- Implementar los cambios visuales necesarios para reflejar el ordenamiento y la consolidación de datos.
- Coordinar con Dev 2 para asegurar que los eventos de la UI se manejen correctamente en los controladores.

### 4. Desarrollador 4 (Dev 4): Utils y Testing

#### Responsabilidades:

- Trabajar en el archivo `utils.js` dentro de la carpeta `utils`.
- Desarrollar y mantener funciones reutilizables y helpers (como `calculateStockValues`).
- Implementar pruebas unitarias y de integración para asegurar la calidad del código.

#### Tareas específicas:

- Crear pruebas para las funciones de ordenamiento, consolidación y cálculo de valores.
- Optimizar las funciones utilitarias para mejorar el rendimiento.
- Documentar las funciones y asegurar que el código sea mantenible.

---

### Responsabilidad Compartida: Documentación (rama `docs`)

#### Responsabilidades:

- Todo el equipo será responsable de actualizar y mantener la documentación en la rama `docs`.
- Asegurar que los cambios en el código se reflejen en la documentación.

---

### Resumen de la Repartición del Trabajo

- **Dev 1:** Enfocado en `stock-service.js` (API y servicios relacionados).
- **Dev 2:** Enfocado en `dashboard-ctrl.js` (controladores y lógica de ordenamiento y consolidación).
- **Dev 3:** Enfocado en los archivos `HTML` y `CSS` dentro de `dashboard` y `home` (UI/UX y diseño responsive).
- **Dev 4:** Enfocado en `utils.js` (funciones utilitarias y pruebas).

---

## Flujo de Trabajo Detallado

### Crear una rama de `feature` desde `develop`

Cada desarrollador creará una rama `feature` a partir de `develop` para trabajar en nuevas funcionalidades. Por ejemplo:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/api-service
```
