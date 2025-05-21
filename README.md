# Proyecto de construcción y evolución del software

Aplicación web sencilla para la compra de acciones a través de una API de broker.  
Este proyecto pone en práctica conocimientos de **construcción y evolución de software**, con un enfoque en:

- Estándares de commits (Conventional Commits)
- Flujo de trabajo con ramas Git (Git Flow / Trunk-based)
- Versionado semántico (SemVer)
- Control de código fuente (SCM)
- Desarrollo incremental y entrega continua de nuevas funcionalidades



## Descripción

CE-Proyecto es una SPA estática que se conecta a una API externa para **comprar acciones** en un broker simulado.  
El valor principal del proyecto radica en demostrar buenas prácticas de ingeniería de software: desde el control de versiones y la gestión de ramas, hasta el versionado y la entrega continua de incrementos funcionales.


## Estructura del proyecto

```
CE-Proyecto/
├─ assets/           # Imágenes y estilos estáticos
├─ controllers/      # Lógica de controladores de UI
├─ pages/            # Plantillas HTML de vistas
├─ services/         # Módulos de interacción con la API
├─ utils/            # Utilidades y configuración (e.g. URLs, helpers)
├─ test/             # Pruebas unitarias
├─ index.html        # Punto de entrada de la aplicación
├─ .gitignore        # Archivos y carpetas ignorados por Git
└─ README.md         # Documentación del repositorio
````



## Requisitos

- Un navegador moderno (Chrome, Firefox, Edge)



## Instalación

1. Clonar el repositorio  
   ```bash
   git clone https://github.com/JeffersonDaviid/CE-Proyecto.git
   cd CE-Proyecto
    ```

   > abrir el archivo index.html en algún navegador.



## Uso

1. Abre la aplicación en el navegador.
2. En la sección de “Comprar acciones”, elige el símbolo y la cantidad.
3. Confirma la operación y visualiza el estado de tu portafolio.



## Arquitectura y carpetas

* **assets/**: Imágenes, fuentes, CSS globales.
* **controllers/**: Controladores que manejan eventos de usuario y actualizan vistas.
* **pages/**: Archivos HTML parciales por “página” de la SPA.
* **services/**: Clases o funciones que hacen `fetch`/`axios` a la API del broker.
* **utils/**: Constantes, configuración, helpers compartidos.
* **test/**: Tests unitarios con Jest (o tu framework preferido).



## Flujo de trabajo con Git

Se recomienda seguir un enfoque de **Git Flow** o **Trunk-Based Development**:

* **main**: rama de producción, siempre estable.
* **develop**: integración de features para la próxima versión.
* **feature/**\*: ramas para cada nueva funcionalidad (ej. `feature/login`).
* **release/**\*: ramas de preparación de versión (Bugfixes menores, docs).
* **hotfix/**\*: correcciones urgentes en producción.

Al finalizar un feature:

1. Hacer pull de `develop`.
2. Merge de tu rama `feature/X` a `develop` vía Pull Request.
3. Revisar código y aprobar, cumplir pipeline de CI.



## Estándares de commits

Utilizamos **Conventional Commits** para mantener un historial claro:

```
<tipo>(ámbito?): <descripción breve>

[Opcional: cuerpo más detallado]

[Opcional: footer con referencias a issues, breaking changes]
```

* **feat**: nueva funcionalidad
* **fix**: corrección de bug
* **docs**: cambios en documentación
* **style**: formateo, sin cambios funcionales
* **refactor**: refactorizaciones de código
* **test**: añadir o modificar tests
* **chore**: tareas de mantenimiento, sin cambios en src

Ejemplo:

```
feat(services): agregar método buyStock para la compra de acciones
fix(utils): corregir parseo de respuesta de la API
```



## Versionado

Se aplica **Semantic Versioning (SemVer)**:

```
MAJOR.MINOR.PATCH

- MAJOR: cambios incompatibles en la API
- MINOR: nuevas funcionalidades compatibles
- PATCH: correcciones y mejoras menores
```

Etiquetas en Git:

```bash
git tag -a v1.2.0 -m "Release 1.2.0: añadida gestión de portafolio"
git push origin --tags
```



## Desarrollo incremental

El proyecto se construyó en **iteraciones**:

1. **v1.0.0** – Configuración inicial, estructura básica, conexión a la API.
2. **v1.1.0** – Implementación de “compra de acciones”.
3. **v1.2.0** – Visualización de portafolio y estado de órdenes.
4. **v2.0.0** – Nuevas funcionalidades (gráficos históricos).

Cada incremento fue entregado como una Release (tag) tras la aprobación en la rama `release/`.



## Pruebas

En la carpeta `test/` encontrarás tests unitarios manuales:

* Servicios de API (`services/`)
* Utilidades (`utils/`)
* Controladores (`controllers/`)

