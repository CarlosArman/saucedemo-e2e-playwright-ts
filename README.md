<h1 align="center">SauceDemo Playwright Cucumber TypeScript Automation</h1>

<p align="center">
  <a href="https://playwright.dev/">
    <img src="https://img.shields.io/badge/Playwright-E2E-45ba4b" />
  </a>
  <a href="https://cucumber.io/">
    <img src="https://img.shields.io/badge/Cucumber-BDD-23D96C" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5%2B-3178C6" />
  </a>
  <a href="https://allurereport.org/">
    <img src="https://img.shields.io/badge/Allure-Report-8E24AA" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Testing-E2E-1E88E5" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Architecture-POM-6A1B9A" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Status-In%20Progress-yellow" />
  </a>
  <a href="https://github.com/CarlosArman/saucedemo-e2e-playwright-ts/commits/main">
    <img src="https://img.shields.io/github/last-commit/CarlosArman/saucedemo-e2e-playwright-ts" />
  </a>
  <a href="https://github.com/CarlosArman/saucedemo-e2e-playwright-ts">
    <img src="https://img.shields.io/github/repo-size/CarlosArman/saucedemo-e2e-playwright-ts" />
  </a>
</p>

<p align="center">
  <a href="https://www.saucedemo.com/">
    <img src="https://img.shields.io/badge/SauceDemo-Web%20App-F57C00" />
  </a>
</p>

---

## 📌 Summary / Resumen

### 🇪🇸 Resumen

Proyecto de automatización de pruebas **E2E** construido con **Playwright + Cucumber + TypeScript** para **SauceDemo**, con una estructura basada en **Page Object Model (POM)** y enfoque **BDD**.

Actualmente incluye escenarios de **login exitoso y fallido**, reportes en **Cucumber HTML / JSON / JUnit**, integración con **Allure Report**, manejo de **screenshots**, soporte para **ambientes y navegadores**, y una estructura preparada para escalar.

### 🇺🇸 Summary

E2E test automation project built with **Playwright + Cucumber + TypeScript** for **SauceDemo**, using a **Page Object Model (POM)** structure and a **BDD** approach.

It currently includes **successful and failed login** scenarios, **Cucumber HTML / JSON / JUnit** reports, **Allure Report** integration, **screenshots**, support for **environments and browsers**, and a structure ready to scale.

---

<p align="center">
  <a href="#english">🇺🇸 English</a> | <a href="#espanol">🇪🇸 Español</a>
</p>

---

<a id="espanol"></a>

## 🇪🇸 Español

### Descripción

Proyecto de automatización E2E para **SauceDemo** usando:

- **Playwright**
- **Cucumber**
- **TypeScript**
- **Allure Report**
- **Cucumber Reports**
- **Page Object Model**

🔗 **Aplicación bajo prueba:** https://www.saucedemo.com/

🔗 **Repositorio:** https://github.com/CarlosArman/saucedemo-e2e-playwright-ts

---

### Alcance actual

Actualmente el proyecto cubre:

- ✅ Login exitoso con usuario estándar
- ✅ Login fallido con usuario bloqueado
- ✅ Flujo de carrito de compras (Shopping Cart) / Checkout básico
- ✅ Estructura con Page Object Model (POM) con pages base y componentes (TopBar)
- ✅ Reporte HTML de Cucumber
- ✅ Reporte JSON de Cucumber
- ✅ Reporte JUnit XML
- ✅ Reporte Allure
- ✅ Screenshots en fallos
- ✅ Screenshots por step (opcional)
- ✅ Ejecución por ambiente
- ✅ Ejecución por navegador

---

### Estructura del proyecto

```bash
.
├── features/                # Escenarios Gherkin
├── src/
│   ├── hooks/               # Hooks Before / After / AfterStep
│   ├── pages/               # Page Object Model
│   ├── steps/               # Step Definitions
│   ├── support/             # World y configuración compartida
│   └── utils/               # Logger y utilidades
├── reports/                 # Reportes y evidencias generadas
├── cucumber.cjs             # Configuración de Cucumber
├── package.json
└── README.md
```

---

### Tecnologías utilizadas

- **Playwright** → automatización E2E
- **Cucumber** → BDD / Gherkin
- **TypeScript** → tipado y mantenibilidad
- **Allure Report** → reporte visual
- **Cucumber HTML / JSON / JUnit** → evidencias y CI/CD

---

### Escenarios actuales

#### Login positivo
- Usuario válido (`standard_user`)
- Validación de navegación a `inventory.html`

#### Login negativo
- Usuario bloqueado (`locked_out_user`)
- Validación de mensaje de error

#### Carrito de compras (Shopping Cart)
- Agregar productos al carrito
- Validaciones del carrito y navegación a `cart.html` / `checkout` (según escenario)

---

### Ejecución del proyecto

#### 1. Instalar dependencias

```bash
npm install
```

#### 2. Ejecutar pruebas

```bash
npm run test:bdd
```

#### 3. Ejecutar por tags

> Cucumber permite filtrar escenarios usando tags (ej: `@login`, `@smoke`).
> Puedes ejecutar uno o varios tags usando la opción `--tags`.

**Forma 1 (directo con cucumber-js):**

```bash
# Un tag
npx cucumber-js --config cucumber.cjs --tags "@login"

# Excluir tag
npx cucumber-js --config cucumber.cjs --tags "not @wip"

# AND / OR
npx cucumber-js --config cucumber.cjs --tags "@smoke and @login"
npx cucumber-js --config cucumber.cjs --tags "@smoke or @regression"
```

**Forma 2 (vía npm script + parámetros extra):**

```bash
npm run test:bdd -- --tags "@smoke"
```

#### 4. Ejecutar con screenshots por step (capturas después de cada step)

```bash
npm run test:bdd:steps
```

> `test:bdd:steps` ejecuta las pruebas tomando capturas automáticamente **después de cada step**.

#### 5. Generar reporte Allure

```bash
npm run allure:generate
```

#### 6. Abrir reporte Allure

```bash
npm run allure:open
```

---

### Reportes disponibles

- **Cucumber HTML**
- **Cucumber JSON**
- **Cucumber JUnit XML**
- **Allure Report**

---

### Características implementadas

- Page Object Model
- Hooks de ejecución
- Screenshots automáticos
- Logging
- Configuración por ambiente
- Configuración por navegador
- Metadata en reportes
- Preparado para integración continua

---

### Mejoras futuras

- [ ] Más escenarios funcionales
- [ ] Integración con CI/CD
- [ ] Soporte para más módulos
- [x] Tags avanzados (`@smoke`, `@regression`)
- [ ] Ejecución paralela
- [ ] Variables y configuración externa por ambiente

---

<a id="english"></a>

## 🇺🇸 English

### Description

E2E automation project for **SauceDemo** using:

- **Playwright**
- **Cucumber**
- **TypeScript**
- **Allure Report**
- **Cucumber Reports**
- **Page Object Model**

🔗 **Application under test:** https://www.saucedemo.com/

🔗 **Repository:** https://github.com/CarlosArman/saucedemo-e2e-playwright-ts

---

### Current scope

The project currently covers:

- ✅ Successful login with standard user
- ✅ Failed login with blocked user
- ✅ Shopping cart flow (Shopping Cart) / basic checkout
- ✅ Page Object Model (POM) with base pages and components (TopBar)
- ✅ Cucumber HTML report
- ✅ Cucumber JSON report
- ✅ Cucumber JUnit XML report
- ✅ Allure report
- ✅ Screenshots on failure
- ✅ Per-step screenshots (optional)
- ✅ Environment-based execution
- ✅ Browser-based execution

---

### Project structure

```bash
.
├── features/                # Gherkin scenarios
├── src/
│   ├── hooks/               # Before / After / AfterStep hooks
│   ├── pages/               # Page Object Model
│   ├── steps/               # Step Definitions
│   ├── support/             # World and shared configuration
│   └── utils/               # Logger and utilities
├── reports/                 # Generated reports and evidence
├── cucumber.cjs             # Cucumber configuration
├── package.json
└── README.md
```

---

### Technologies used

- **Playwright** → E2E automation
- **Cucumber** → BDD / Gherkin
- **TypeScript** → typing and maintainability
- **Allure Report** → visual reporting
- **Cucumber HTML / JSON / JUnit** → evidence and CI/CD support

---

### Current scenarios

#### Positive login
- Valid user (`standard_user`)
- Navigation validation to `inventory.html`

#### Negative login
- Blocked user (`locked_out_user`)
- Error message validation

#### Shopping cart
- Add products to the cart
- Cart validations and navigation to `cart.html` / `checkout` (scenario-dependent)

---

### Run the project

#### 1. Install dependencies

```bash
npm install
```

#### 2. Run tests

```bash
npm run test:bdd
```

#### 3. Run by tags

> Cucumber lets you filter scenarios using tags (e.g. `@login`, `@smoke`).
> You can run one or multiple tags using the `--tags` option.

**Option 1 (direct with cucumber-js):**

```bash
# Single tag
npx cucumber-js --config cucumber.cjs --tags "@login"

# Exclude tag
npx cucumber-js --config cucumber.cjs --tags "not @wip"

# AND / OR
npx cucumber-js --config cucumber.cjs --tags "@smoke and @login"
npx cucumber-js --config cucumber.cjs --tags "@smoke or @regression"
```

**Option 2 (via npm script + extra args):**

```bash
npm run test:bdd -- --tags "@smoke"
```

#### 4. Run with per-step screenshots (screenshots after each step)

```bash
npm run test:bdd:steps
```

> `test:bdd:steps` runs the tests taking screenshots automatically **after each step**.

#### 5. Generate Allure report

```bash
npm run allure:generate
```

#### 6. Open Allure report

```bash
npm run allure:open
```

---

### Available reports

- **Cucumber HTML**
- **Cucumber JSON**
- **Cucumber JUnit XML**
- **Allure Report**

---

### Implemented features

- Page Object Model
- Execution hooks
- Automatic screenshots
- Logging
- Environment configuration
- Browser configuration
- Report metadata
- CI-ready structure

---

### Future improvements

- [ ] More functional scenarios
- [ ] CI/CD integration
- [ ] Support for more modules
- [x] Advanced tags (`@smoke`, `@regression`)
- [ ] Parallel execution
- [ ] External environment-based configuration

---

## 👨‍💻 Author / Autor

**Carlos Ruiz**
