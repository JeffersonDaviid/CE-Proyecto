# Convenciones de Nombres para el Proyecto

Este documento describe las convenciones de nombres utilizadas en el proyecto. Las siguientes convenciones se aplican para variables, constantes, funciones y otros elementos del código en JavaScript.

## 1. Variables

Las variables deben usar la convención de **camelCase**, comenzando con minúscula y utilizando mayúsculas para las palabras subsiguientes.

### Ejemplos:

- `stockName` — Nombre de la acción.
- `purchaseDate` — Fecha de compra.
- `quantity` — Cantidad de acciones compradas.
- `totalCost` — Costo total de las acciones compradas.

---

## 2. Constantes

Las constantes deben estar en **UPPER_SNAKE_CASE**, con todas las letras en mayúsculas y palabras separadas por guiones bajos.

### Ejemplos:

- `API_KEY` — Clave de la API.
- `API_URL` — URL de la API.

---

## 3. Funciones

Las funciones deben seguir la convención **camelCase**, comenzando con un verbo que describa su acción. Las funciones que actúan como constructores deben seguir la convención **PascalCase**.

### Ejemplos:

#### Funciones de Lógica de Negocio:

- `calculateTotalCost()` — Calcula el costo total de las acciones compradas.
- `fetchStockPrice()` — Obtiene el precio de la acción desde la API.

#### Funciones de Interacción con el DOM:

- `clearForm()` — Limpia el formulario de registro.
- `handleApiError()` — Maneja errores de la API.

---

## 4. Nombres de Archivos

Vamos a usar kebab-case (nombres en minúsculas separados por guiones) para los `archivos

### Ejemplos:

- Archivos de servicios: `stock-service.js`
- Archivos de controladores: `dashboard-controller.js`
- Archivos de utilidades: `dom-utils.js`

---

## 5. Clases (Si aplica)

Cuando se utilicen clases en el proyecto, estas deben seguir la convención **PascalCase**, comenzando con mayúscula.

### Ejemplos:

- `Stock` — Clase que representa una acción comprada.
- `StockTransaction` — Clase que representa una transacción de compra de acciones.
- `Dashboard` — Clase que maneja el renderizado y la lógica del dashboard.
- `ApiService` — Clase que maneja las solicitudes a la API.

---

## 6. Nombres de Parámetros

Los nombres de los parámetros deben ser descriptivos, en **camelCase**.

### Ejemplos:

- `symbol` — El símbolo de la acción (por ejemplo, `AAPL`).
- `quantity` — Cantidad de acciones.
- `price` — Precio de la acción.

---

## 7. Eventos

Los eventos deben seguir la convención de **camelCase** y deben describir lo que ocurre cuando se dispara el evento.

### Ejemplos:

- `submitFormEvent` — Evento disparado cuando el formulario de compra es enviado.
- `clickButtonEvent` — Evento disparado cuando un botón es presionado.

---

## 8. Comentarios

Los comentarios deben ser claros, concisos y estar en inglés, siguiendo las buenas prácticas de documentación.

### Ejemplos:

```javascript
// Fetch stock data from the API
const stockData = await fetchStockPrice(symbol);
```

---

## 9. HTMIL

- Al momento de trabajar con HTML, usar correctamente las etiquetas semánticas como `<header>`, `<main>` y `<section>`.
- Agregar comentarios para secciones importantes.

---

## 9. CSS

- Usar variables CSS para colores: - Ejemplo: `--primary-color: #007BFF;`, aplicándolas con `var(--primary-color)`.
- Evitar estilos inline, asegurándose de que todo esté en archivos CSS dedicados.

---
