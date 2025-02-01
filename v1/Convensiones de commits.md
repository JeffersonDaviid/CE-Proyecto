# Documento de Convenciones de Commits

## Estructura del Mensaje de Commit

Un mensaje de commit debe seguir el siguiente formato:

```
<tipo>(<área opcional>): <descripción corta>
<blanco opcional>
<explicación opcional>
```

### Componentes del Mensaje:

- **Tipo**: El tipo del commit debe ser uno de los siguientes: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `build`, `revert`.
- **Área (opcional)**: Indica el área del proyecto que se ve afectada por el commit, como `auth`, `core`, `ui`, etc. Este campo es opcional.
- **Descripción corta**: Un resumen conciso del cambio, en tiempo presente y sin exceder los 72 caracteres.
- **Explicación opcional**: Si es necesario, se puede proporcionar una explicación más detallada del cambio.

### Ejemplo de Mensaje de Commit

- **Añadir una nueva funcionalidad**:
  ```bash
  feat(auth): agregar inicio de sesión con Google
  ```

## Tipos de Commit

A continuación, se detallan los tipos de commit que deben ser utilizados:

### `feat` (feature)

Utilizado cuando se introduce una nueva característica al proyecto.

**Ejemplo**: 
```bash
feat(auth): agregar inicio de sesión con Google
```

### `fix`

Utilizado para corregir errores en el código.

**Ejemplo**: 
```bash
fix(api): corregir error en endpoint de login
```

### `docs`

Utilizado para cambios relacionados con la documentación.

**Ejemplo**: 
```bash
docs(readme): actualizar instrucciones de instalación
```

### `style`

Utilizado para cambios que no afectan el funcionamiento del código, como la corrección de estilo o formato (espacios en blanco, saltos de línea, etc.).

**Ejemplo**: 
```bash
style(auth): corregir indentación de código
```

### `refactor`

Utilizado cuando se realiza una refactorización de código que no cambia el comportamiento del sistema, pero mejora su estructura interna.

**Ejemplo**: 
```bash
refactor(core): simplificar función de validación
```

### `perf`

Utilizado cuando se realizan mejoras en el rendimiento.

**Ejemplo**: 
```bash
perf(api): optimizar consulta en la base de datos
```

### `test`

Utilizado para cambios relacionados con las pruebas del código, como la adición de nuevas pruebas o la modificación de las existentes.

**Ejemplo**: 
```bash
test(auth): agregar pruebas para inicio de sesión con Google
```

### `chore`

Utilizado para tareas de mantenimiento y configuraciones que no afectan el funcionamiento del código, como actualizaciones de dependencias o configuraciones de herramientas.

**Ejemplo**: 
```bash
chore(deps): actualizar dependencias de producción
```

### `ci`

Utilizado para cambios en la configuración de herramientas de integración continua (CI/CD).

**Ejemplo**: 
```bash
ci(jenkins): actualizar configuración de pipeline
```

### `build`

Utilizado para cambios en el sistema de construcción o despliegue del proyecto.

**Ejemplo**: 
```bash
build(webpack): agregar configuración para soporte de ES6
```

### `revert`

Utilizado para revertir un commit previo.

**Ejemplo**: 
```bash
revert: feat(auth): agregar inicio de sesión por medio de credenciales
```

## Control de Versiones

Las Convenciones de Commits se basan en el Versionado Semántico (SemVer) para determinar cómo se deben incrementar las versiones del producto. El formato de versión es el siguiente:

```
MAJOR.MINOR.PATCH
```

### Componentes de la versión:

- **MAJOR**: Se incrementa cuando se introducen cambios incompatibles con versiones anteriores (breaking changes).
- **MINOR**: Se incrementa cuando se añaden nuevas funcionalidades compatibles con versiones anteriores.
- **PATCH**: Se incrementa cuando se corrigen errores sin introducir cambios incompatibles.

### Incremento de la Versión

El número de versión se incrementa automáticamente en función del tipo de commit:

- **Breaking Change**: Si el commit contiene un cambio incompatible, se incrementa el número `MAJOR`.
- **Nueva Funcionalidad**: Si el commit introduce una nueva característica compatible con versiones anteriores, se incrementa el número `MINOR`.
- **Corrección de Error**: Si el commit corrige un error, se incrementa el número `PATCH`.

### Ejemplos de Incremento de Versión

- **Nuevo feature**: 
  ```bash
  feat(auth): agregar inicio de sesión por medio de credenciales
  ```
  Versión: `1.1.0` (se incrementa la versión `MINOR`).

- **Corrección de error**: 
  ```bash
  fix(api): corregir error en el endpoint de login
  ```
  Versión: `1.0.1` (se incrementa la versión `PATCH`).

- **Cambio incompatible**:
  ```bash
  BREAKING CHANGE: cambiar la estructura de la API de autenticación
  ```
  Versión: `2.0.0` (se incrementa la versión `MAJOR`).


Este documento resume las convenciones de commits, cómo se deben escribir los mensajes y cómo se debe manejar el versionado dentro del proyecto.
