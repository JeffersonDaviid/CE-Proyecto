# Flujo de Prueba

Este documento describe el flujo de test para probar el funcionamiento de la pagina web, en donde se describen los pasos a seguir de forma numerada, indicando las entradas, salidas, resultados esperados y resultados obtenidos en cada test realizado.

---

## Caso de Prueba 1

**Objetivo de la Prueba:** Verificar el correcto funcionamiento del proceso de registro de la compra de una acción

**Fecha de realización de la prueba:** 28/11/2024

**Procedimiento realizado:**

1. Se ejecuta el aplicativo y se accede a la pantalla de inicio.
2. Se ingresa el parámetro del nombre de la acción.
3. Se ingresa el parámetro de cantidad de acciones de la compra.
4. Se ingresa la fecha de realización de la compra de las acciones.
5. Dar clic en el botón de **Registrar Compra**

   - **Tipo de Entrada:** Texto, Numero y Fecha respectivamente.
   - **Tipo de Salida:** Texto, Numero, Fecha y Valores calculados.
   - **Resultado esperado:** Registro correcto de la compra de las acciones.
   - **Resultado obtenido:** Registro correcto de los valores de prueba de un ejemplo de una compra de acción.

### Resultado de la Prueba: **EXITOSO**

---

## Caso de Prueba 2

**Objetivo de la Prueba:** Verificar el correcto funcionamiento del proceso de obtención del precio de compra de las acciones.

**Fecha de realización de la prueba:** 28/11/2024

**Procedimiento realizado:**

1. Se ejecuta el aplicativo y se accede a la pantalla de inicio.
2. Se ingresa el parámetro del nombre de la acción.
3. Se ingresa el parámetro de cantidad de acciones de la compra.
4. Se ingresa la fecha de realización de la compra de las acciones.
5. Dar clic en el botón de **Registrar Compra**

   - **Tipo de Entrada:** Texto, Numero y Fecha respectivamente.
   - **Tipo de Salida:** Texto, Numero, Fecha y Valor recuperado.
   - **Resultado esperado:** Obtención correcta del Precio de Compra de la acción ingresada.
   - **Resultado obtenido:** Recuperación correcta por parte de la API del valor de la acción ingresada.

### Resultado de la Prueba: **EXITOSO**

---

## Caso de Prueba 3

**Objetivo de la Prueba:** Verificar el correcto funcionamiento del proceso de recuperación del Valor Actual de una acción especificada.

**Fecha de realización de la prueba:** 28/11/2024

**Procedimiento realizado:**

1. Se ejecuta el aplicativo y se accede a la pantalla de inicio.
2. Se ingresa el parámetro del nombre de la acción.
3. Se ingresa el parámetro de cantidad de acciones de la compra.
4. Se ingresa la fecha de realización de la compra de las acciones.
5. Dar clic en el botón de **Registrar Compra**

   - **Tipo de Entrada:** Texto, Numero y Fecha respectivamente.
   - **Tipo de Salida:** Texto, Numero, Fecha y Valor recuperado.
   - **Resultado esperado:** Obtención correcta del último valor de cierre de la acción ingresada.
   - **Resultado obtenido:** Recuperación correcta por parte de la API del Valor Actual de la acción ingresada.

### Resultado de la Prueba: **EXITOSO**

---

## Caso de Prueba 4

**Objetivo de la Prueba:** Verificar el correcto funcionamiento del proceso de cálculo del valor de Ganancia/Pérdida de una compra de acciones especificada.

**Fecha de realización de la prueba:** 28/11/2024

**Procedimiento realizado:**

1. Se ejecuta el aplicativo y se accede a la pantalla de inicio.
2. Se ingresa el parámetro del nombre de la acción.
3. Se ingresa el parámetro de cantidad de acciones de la compra.
4. Se ingresa la fecha de realización de la compra de las acciones.
5. Dar clic en el botón de **Registrar Compra**

   - **Tipo de Entrada:** Texto, Numero y Fecha respectivamente.
   - **Tipo de Salida:** Texto, Numero, Fecha y Valor calculado.
   - **Resultado esperado:** Cálculo correcto del valor de gainLoss de la compra registrada, por medio de la comparación del valor actual contra el invertido o Precio de Compra.
   - **Resultado obtenido:** Cálculo correcto usando los parámetros recuperados por la API.

### Resultado de la Prueba: **EXITOSO**

---

## Caso de Prueba 5

**Objetivo de la Prueba:** Verificar el correcto funcionamiento del proceso de cálculo del valor de Porcentaje de una compra de acciones especificada.

**Fecha de realización de la prueba:** 28/11/2024

**Procedimiento realizado:**

1. Se ejecuta el aplicativo y se accede a la pantalla de inicio.
2. Se ingresa el parámetro del nombre de la acción.
3. Se ingresa el parámetro de cantidad de acciones de la compra.
4. Se ingresa la fecha de realización de la compra de las acciones.
5. Dar clic en el botón de **Registrar Compra**

   - **Tipo de Entrada:** Texto, Numero y Fecha respectivamente.
   - **Tipo de Salida:** Texto, Numero, Fecha y Valor calculado.
   - **Resultado esperado:** Cálculo correcto del porcentaje de la compra de acciones registrada, siendo este ya sea a favor o en contra.
   - **Resultado obtenido:** Cálculo correcto usando los parámetros recuperados por la API.

### Resultado de la Prueba: **EXITOSO**

---
