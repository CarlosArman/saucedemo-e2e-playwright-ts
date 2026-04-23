<h1 align="center">SauceDemo Playwright Cucumber TypeScript Automation</h1>

<p align="center">
  <a href="https://github.com/CarlosArman/saucedemo-e2e-playwright-ts">
    <img src="https://img.shields.io/badge/Version-v2.0.0-blue" alt="Version" />
  </a>
  <img src="https://img.shields.io/badge/Architecture-Enterprise%20Ready-success" alt="Architecture" />
  <a href="https://playwright.dev/">
    <img src="https://img.shields.io/badge/Playwright-E2E-45ba4b" alt="Playwright" />
  </a>
  <a href="https://cucumber.io/">
    <img src="https://img.shields.io/badge/Cucumber-BDD-23D96C" alt="Cucumber" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5%2B-3178C6" alt="TypeScript" />
  </a>
  <a href="https://allurereport.org/">
    <img src="https://img.shields.io/badge/Allure-Report-8E24AA" alt="Allure" />
  </a>
</p>
<hr/>

<p align="center"><b>🌐 Idioma</b></p>
<p align="center">
  <a href="./README.md">🇬🇧 English</a> &nbsp; | &nbsp;
  🇪🇸 Español
</p>

<p align="center">
  Framework enterprise-ready de automatización QA para SauceDemo, creado para demostrar diseño escalable de pruebas E2E, mantenibilidad, observabilidad y flexibilidad de ejecución con Playwright + Cucumber + TypeScript.
</p>

---

## 🎯 Por qué este proyecto importa

Este repositorio está pensado como un **proyecto de portafolio QA Automation** que demuestra mucho más que casos de prueba automatizados. Muestra cómo estructurar un framework mantenible con:

- **BDD con Cucumber** para escenarios legibles por negocio
- **Page Object Model (POM)** para mantenibilidad y reutilización
- **Ejecución multiambiente** (`DEV`, `UAT`, `PROD`)
- **Cobertura multinavegador** (`chromium`, `firefox`, `webkit`)
- **Reportes Allure + Cucumber** para evidencia y trazabilidad
- **Tracing, screenshots y logs** para análisis de fallos
- **Estrategias de ejecución secuencial y paralela**
- **Estructura escalable** lista para crecer hacia CI/CD

Este proyecto demuestra buenas prácticas de automatización QA con Playwright, Cucumber y TypeScript, incluyendo arquitectura mantenible, soporte para debugging, reportería, diseño de automatización reutilizable y escalabilidad del framework.

---

## 🚀 Resumen del proyecto

Este repositorio contiene un framework de automatización end-to-end para **SauceDemo** usando:

- **Playwright**
- **Cucumber**
- **TypeScript**
- **Allure Report**
- **Page Object Model**
- **Logging estructurado y hooks de ejecución**

🔗 **Aplicación bajo prueba:** https://www.saucedemo.com/  
🔗 **Repositorio:** https://github.com/CarlosArman/saucedemo-e2e-playwright-ts

---

## ✨ Qué demuestra este framework

### Cobertura funcional
- ✅ Login exitoso
- ✅ Login fallido
- ✅ Flujo de carrito de compras
- ✅ Validación básica de checkout

### Prácticas de ingeniería
- ✅ Arquitectura Page Object Model
- ✅ Ejecución por ambiente
- ✅ Ejecución por navegador
- ✅ Generación de evidencia ante fallos
- ✅ Reportería con Allure
- ✅ Ejecución preparada para retries y paralelo
- ✅ Separación clara entre hooks, configuración, pages, steps y utilitarios

### Valor para portafolio QA
- ✅ Diseño de pruebas con foco en mantenibilidad
- ✅ Estrategia práctica de reportes
- ✅ Flexibilidad de ejecución por ambiente y navegador
- ✅ Documentación clara y organización profesional
- ✅ Preparado para evolucionar hacia CI/CD

---

## 🏗 Estructura del proyecto

```bash
saucedemo-e2e-playwright-ts
├── features/                # Archivos feature en Gherkin y escenarios legibles por negocio
├── src/
│   ├── config/              # Configuración por ambiente y ajustes de ejecución
│   ├── hooks/               # Hooks del ciclo de vida del navegador, screenshots, tracing y reportería
│   ├── pages/               # Page Object Model y componentes reutilizables de UI
│   ├── steps/               # Step definitions que conectan los pasos de Gherkin con la lógica de automatización
│   ├── support/             # World personalizado, setup compartido y gestión del contexto de pruebas
│   └── utils/               # Logger, helpers y funciones utilitarias reutilizables
├── reports/                 # Reportes generados, screenshots, traces y evidencia de ejecución
├── docs/                    # Documentación adicional del proyecto
├── cucumber.cjs             # Archivo de configuración de Cucumber
├── CHANGELOG.md             # Historial de cambios del proyecto
├── CONTRIBUTING.md          # Guía de contribución
├── package.json             # Scripts del proyecto, dependencias y configuración de npm
├── README.md                # Documentación principal en inglés
└── README.es.md             # Documentación principal en español
```

---

## ⚙ Inicio rápido

### 1. Clonar el repositorio

```bash
git clone https://github.com/CarlosArman/saucedemo-e2e-playwright-ts.git
cd saucedemo-e2e-playwright-ts
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Instalar navegadores de Playwright

```bash
npx playwright install
```

### 4. Configurar variables de entorno

Ver:
- **[docs/ENVIRONMENT.es.md](./docs/ENVIRONMENT.es.md)**
- **[docs/ENVIRONMENT.md](./docs/ENVIRONMENT.md)**

### 5. Ejecutar pruebas

```bash
npm run test:bdd
```

---

## ▶ Comandos principales

El README principal debería mostrar solo los comandos más importantes.
Para el catálogo completo, revisa **[docs/COMMANDS.es.md](./docs/COMMANDS.es.md)** y **[docs/COMMANDS.md](./docs/COMMANDS.md)**.

```bash
npm install
npx playwright install
npm run test:bdd
npm run test:bdd:steps
npm run test:dev:chrome
npm run test:dev:all
npm run test:dev:all:parallel
npm run test:dev:report
npm run allure:generate
npm run allure:open
```

---

## 📊 Reportería y observabilidad

Este framework incluye múltiples capas de evidencia de ejecución:

- **Cucumber HTML report**
- **Cucumber JSON report**
- **Cucumber JUnit XML report**
- **Allure Report**
- **Screenshots en fallos**
- **Screenshots por step (opcional)**
- **Playwright trace files**
- **Logging estructurado**
- **Soporte de correlación por escenario**

Comandos comunes:

```bash
npm run allure:generate
npm run allure:open
```

---

## 🧠 Resumen de arquitectura

El framework está organizado alrededor de una separación clara de responsabilidades:

- **`features/`** → escenarios legibles por negocio
- **`steps/`** → definiciones de steps
- **`pages/`** → abstracción de interacción UI
- **`hooks/`** → ciclo de vida del navegador y del reporting
- **`config/`** → configuración por ambiente
- **`support/`** → contexto compartido / world
- **`utils/`** → logging y helpers reutilizables

Para ver el detalle completo de arquitectura, revisa:
- **[docs/ARCHITECTURE.es.md](./docs/ARCHITECTURE.es.md)**
- **[docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)**

---

## 🔗 Proyecto relacionado

Si quieres ver un proyecto relacionado dentro del **ecosistema Java**, revisa:

### [PlaywrightJava](https://github.com/CarlosArman/PlaywrightJava)

Proyecto relacionado implementado con:

- **Java**
- **Maven**
- **JUnit 5**
- **Allure Report**
- **Page Object Model (POM)**

Esto ayuda a mostrar el mismo enfoque de automatización en distintos stacks: **TypeScript + Cucumber** en este repositorio y **Java + JUnit 5** en el proyecto relacionado.

---

## 📚 Índice de documentación

### Documentación principal
- **[docs/COMMANDS.es.md](./docs/COMMANDS.es.md)** → Referencia de comandos (Español)
- **[docs/COMMANDS.md](./docs/COMMANDS.md)** → Commands reference (English)
- **[docs/ENVIRONMENT.es.md](./docs/ENVIRONMENT.es.md)** → Guía de entorno (Español)
- **[docs/ENVIRONMENT.md](./docs/ENVIRONMENT.md)** → Environment guide (English)
- **[docs/ARCHITECTURE.es.md](./docs/ARCHITECTURE.es.md)** → Guía de arquitectura (Español)
- **[docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)** → Architecture guide (English)

### Documentación del repositorio
- **[CHANGELOG.es.md](./CHANGELOG.es.md)** → Historial de cambios (Español)
- **[CHANGELOG.md](./CHANGELOG.md)** → Project changelog (English)
- **[CONTRIBUTING.es.md](./CONTRIBUTING.es.md)** → Guía de contribución (Español)
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** → Contribution guide (English)

---

## 🛣 Roadmap

- [ ] Integración completa con CI/CD
- [ ] Mayor cobertura funcional
- [ ] Estrategia de ejecución remota/cloud
- [ ] Dashboards de ejecución
- [ ] Convenciones de observabilidad más robustas
- [ ] Más módulos de negocio reutilizables

---

## 👨‍💻 Autor

**Carlos R.**  
QA | Test Automation Engineer
<br/>
🔗 GitHub: https://github.com/CarlosArman


---

## ⭐ Nota final

Este proyecto está documentado y organizado para reflejar no solo capacidad técnica en automatización, sino también **madurez de ingeniería en diseño de QA Automation**.
