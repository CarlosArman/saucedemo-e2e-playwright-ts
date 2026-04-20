# Guía de arquitectura

<p align="center">
  <a href="../README.es.md">⬅ Volver al README (Español)</a> •
  <a href="../README.md">⬅ Go to README in English</a> •
  <a href="./ARCHITECTURE.md">🇺🇸 View this guide in English</a>
</p>

Este documento explica el diseño arquitectónico del framework y la responsabilidad de cada capa.

---

## 1. Objetivo de la arquitectura

El objetivo de este framework es proveer una solución de automatización UI **mantenible, escalable y observable** para SauceDemo usando Playwright + Cucumber + TypeScript.

La arquitectura está diseñada para:

- separar la intención de negocio de los detalles de interacción UI
- aislar la configuración por ambiente y navegador
- centralizar el ciclo de vida del navegador y las preocupaciones de reporting
- generar evidencia sólida de ejecución para debugging y reportes
- soportar crecimiento hacia CI/CD y mayor cobertura funcional

---

## 2. Principios de diseño

- **Separación de responsabilidades**
- **Legibilidad de escenarios de negocio**
- **Reutilización de interacciones de página**
- **Ejecución sensible al ambiente**
- **Observabilidad como prioridad ante fallos**
- **Escalabilidad para futuros módulos**

---

## 3. Flujo de alto nivel

```text
Archivo feature (Gherkin)
   ↓
Step definitions
   ↓
Page Objects / Components
   ↓
Acciones del navegador con Playwright
   ↓
Hooks capturan screenshots, traces, logs y artefactos de reporte
```

---

## 4. Responsabilidad de carpetas

### `features/`
Contiene los escenarios Gherkin legibles por negocio.

### `src/steps/`
Relaciona los steps de Gherkin con la lógica de automatización.

### `src/pages/`
Encapsula selectores y comportamiento de páginas usando Page Object Model.

### `src/hooks/`
Contiene la lógica del ciclo de vida de ejecución, como setup/teardown del navegador, screenshots, tracing y reporting.

### `src/config/`
Guarda configuración dependiente del ambiente, como URLs base, estrategia de credenciales o defaults de ejecución.

### `src/support/`
Contiene el World / contexto compartido usado durante la ejecución de escenarios.

### `src/utils/`
Contiene utilitarios compartidos como logging o helpers reutilizables.

---

## 5. Estrategia Page Object Model

El framework sigue una estrategia de Page Object Model para mantener los selectores UI y acciones fuera de las definiciones del flujo de prueba.

Beneficios:

- step definitions más limpias
- mantenimiento más simple cuando cambia la UI
- mejor reutilización entre escenarios
- separación más clara entre intención de negocio e implementación técnica

---

## 6. Estrategia de hooks

Los hooks están separados por responsabilidad.

Responsabilidades típicas:

- inicialización y cierre del navegador
- creación de context/page
- captura de screenshots en fallos
- captura opcional de screenshots por step
- inicio/fin de trace y exportación ante fallos
- metadata de reportes y diagnóstico por escenario

Esta separación hace que el framework sea más fácil de mantener y evolucionar.

---

## 7. Capa de reportes y observabilidad

El framework está diseñado con observabilidad en mente.

Soporta:

- salidas Cucumber HTML / JSON / JUnit
- resultados Allure y generación de reporte HTML
- screenshots en fallos
- screenshots opcionales por step
- Playwright trace files
- logs estructurados
- seguimiento preparado para correlación por escenario

Esto ayuda a acelerar el debugging y mejora la trazabilidad de la ejecución.

---

## 8. Estrategia de ambientes

La ejecución es sensible al ambiente mediante variables como:

- `TEST_ENV`
- `BASE_URL`
- `DEV_USERNAME`, `UAT_USERNAME`, `PROD_USERNAME`
- `DEV_PASSWORD`, `UAT_PASSWORD`, `PROD_PASSWORD`

Esto permite reutilizar el mismo framework en múltiples ambientes sin cambiar la lógica de prueba.

---

## 9. Estrategia de navegadores

El framework soporta múltiples navegadores:

- `chromium`
- `firefox`
- `webkit`

La ejecución puede ser:

- **single-browser**
- **multi-browser secuencial**
- **multi-browser concurrente**

Esto permite una validación de compatibilidad más amplia y flexibilidad en tiempos de ejecución.

---

## 10. Notas de escalabilidad

La estructura actual es adecuada para extenderse hacia:

- más módulos de negocio
- componentes compartidos reutilizables
- estrategias smoke/regression por tags
- integración con pipelines CI/CD
- estrategias más ricas de datos de prueba
- publicación de dashboards/reportes

---

## 11. Mejoras futuras recomendadas

- capa dedicada para gestión de datos de prueba
- abstracción API/service para flujos híbridos UI/API
- plantillas de workflows CI/CD
- dashboard de métricas de ejecución
- quality gates más sólidos y gobierno de reportería
