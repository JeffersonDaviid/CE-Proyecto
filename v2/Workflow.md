# Git Workflow

Este documento describe el flujo de trabajo de Git definido para el proyecto y tener una colaboración efectiva. Utilizamos ramas separadas para desarrollo de funcionalidades, la rama principal (`main`), una rama para integración (`develop`), una rama para documentación (`docs`), y ramas para características específicas.

## Estructura de Ramas

- **`main`**: Rama principal donde se encuentra el código listo para producción.
- **`develop`**: Rama de desarrollo donde se integran las funcionalidades completadas antes de ser fusionadas con `main`.
- **`feature/<nombre-de-feature>`**: Ramas de características individuales donde los desarrolladores trabajan en nuevas funcionalidades o mejoras.
- **`hotfix/<nombre-de-hotfix>`**: Ramas para solucionar errores críticos directamente en `main` o `develop`.
- **`docs`**: Rama dedicada exclusivamente a la documentación del proyecto.

## Asignación de Roles

1. **Desarrollador 1 (Dev 1)**: Trabaja en la **API Services** (lógica de llamadas a la API y servicios generales).
2. **Desarrollador 2 (Dev 2)**: Trabaja en **Controllers** (gestiona las interacciones entre la UI y los datos).
3. **Desarrollador 3 (Dev 3)**: Trabaja en **Views** y **UI/UX** (diseño, vistas, interacciones y eventos en la interfaz).
4. **Desarrollador 4 (Dev 4)**: Trabaja en **Utils** (funciones reutilizables y helpers) y en la parte de **Testing**.

Todo el equipo será responsable de la rama `docs` para la actualización y mantenimiento de la documentación.

---

## Flujo de Trabajo Detallado

### Crear una rama de `feature` desde `develop`

Cada desarrollador creará una rama `feature` a partir de `develop` para trabajar en nuevas funcionalidades. Por ejemplo:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/api-service
