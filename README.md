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

<p align="center"><b>🌐 Language / Idioma</b></p>
<p align="center">
  🇬🇧 English &nbsp; | &nbsp;
  <a href="./README.es.md">🇪🇸 Español</a>
</p>

<p align="center">
  Enterprise-ready QA automation framework for SauceDemo, built to showcase scalable E2E test design, maintainability, observability, and execution flexibility with Playwright + Cucumber + TypeScript.
</p>

---

## 🎯 Why This Project Matters

This repository is designed as a **QA Automation portfolio project** that demonstrates more than just automated test cases. It shows how to structure a maintainable framework with:

- **BDD with Cucumber** for readable business scenarios
- **Page Object Model (POM)** for maintainability and reuse
- **Multi-environment execution** (`DEV`, `UAT`, `PROD`)
- **Multi-browser coverage** (`chromium`, `firefox`, `webkit`)
- **Allure + Cucumber reporting** for evidence and traceability
- **Tracing, screenshots, and logs** for failure analysis
- **Parallel and sequential execution strategies**
- **Scalable project structure** ready for CI/CD growth

This project demonstrates QA automation best practices with Playwright, Cucumber, and TypeScript, including maintainable architecture, debugging support, reporting, reusable automation design, and framework scalability.

---

## 🚀 Project Overview

This repository contains an end-to-end automation framework for **SauceDemo** using:

- **Playwright**
- **Cucumber**
- **TypeScript**
- **Allure Report**
- **Page Object Model**
- **Structured logging and execution hooks**

🔗 **Application under test:** https://www.saucedemo.com/  
🔗 **Repository:** https://github.com/CarlosArman/saucedemo-e2e-playwright-ts

---

## ✨ What This Framework Demonstrates

### Functional Coverage
- ✅ Successful login
- ✅ Failed login
- ✅ Shopping cart flow
- ✅ Basic checkout validation

### Engineering Practices
- ✅ Page Object Model architecture
- ✅ Environment-aware execution
- ✅ Browser-aware execution
- ✅ Failure evidence generation
- ✅ Allure reporting
- ✅ Retry-ready and parallel-ready execution
- ✅ Clear separation of hooks, configuration, pages, steps, and utilities

### QA Portfolio Value
- ✅ Test design with maintainability in mind
- ✅ Practical reporting strategy
- ✅ Execution flexibility across environments and browsers
- ✅ Clean documentation and project organization
- ✅ Ready to evolve into CI/CD pipelines

---

## 🏗 Project Structure

```bash
saucedemo-e2e-playwright-ts
├── features/                # Gherkin feature files and business-readable scenarios
├── src/
│   ├── config/              # Environment configuration and runtime settings
│   ├── hooks/               # Browser lifecycle, screenshots, tracing, and reporting hooks
│   ├── pages/               # Page Object Model and reusable UI components
│   ├── steps/               # Step definitions that map Gherkin steps to automation logic
│   ├── support/             # Custom World, shared setup, and test context management
│   └── utils/               # Logger, helpers, and reusable utility functions
├── reports/                 # Generated reports, screenshots, traces, and execution evidence
├── docs/                    # Additional project documentation
├── cucumber.cjs             # Cucumber configuration file
├── CHANGELOG.md             # Project changelog
├── CONTRIBUTING.md          # Contribution guide
├── package.json             # Project scripts, dependencies, and npm configuration
├── README.md                # Main documentation in English
└── README.es.md             # Main documentation in Spanish
```

---

## ⚙ Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/CarlosArman/saucedemo-e2e-playwright-ts.git
cd saucedemo-e2e-playwright-ts
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Configure environment variables

See:
- **[docs/ENVIRONMENT.md](./docs/ENVIRONMENT.md)**
- **[docs/ENVIRONMENT.es.md](./docs/ENVIRONMENT.es.md)**

### 5. Run tests

```bash
npm run test:bdd
```

---

## ▶ Main Commands

The primary README should expose only the most important commands.
For the full catalog, see **[docs/COMMANDS.md](./docs/COMMANDS.md)** and **[docs/COMMANDS.es.md](./docs/COMMANDS.es.md)**.

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

## 📊 Reporting and Observability

This framework includes multiple layers of execution evidence:

- **Cucumber HTML report**
- **Cucumber JSON report**
- **Cucumber JUnit XML report**
- **Allure Report**
- **Screenshots on failure**
- **Optional step-by-step screenshots**
- **Playwright trace files**
- **Structured logging**
- **Scenario-level correlation support**

Common commands:

```bash
npm run allure:generate
npm run allure:open
```

---

## 🧠 Architecture Snapshot

The framework is organized around separation of concerns:

- **`features/`** → business-readable scenarios
- **`steps/`** → step definitions
- **`pages/`** → UI interaction abstraction
- **`hooks/`** → browser lifecycle and reporting lifecycle
- **`config/`** → environment-based configuration
- **`support/`** → shared test context / world
- **`utils/`** → logging and reusable helpers

For full architecture details, see:
- **[docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)**
- **[docs/ARCHITECTURE.es.md](./docs/ARCHITECTURE.es.md)**

---

## 🔗 Related Project

If you would like to see a related automation project built in the **Java ecosystem**, check out:

### [PlaywrightJava](https://github.com/CarlosArman/PlaywrightJava)

A related automation project implemented with:

- **Java**
- **Maven**
- **JUnit 5**
- **Allure Report**
- **Page Object Model (POM)**

This helps show the same automation mindset across different stacks: **TypeScript + Cucumber** in this repository and **Java + JUnit 5** in the related one.

---

## 📚 Documentation Index

### Core docs
- **[docs/COMMANDS.md](./docs/COMMANDS.md)** → Commands reference (English)
- **[docs/COMMANDS.es.md](./docs/COMMANDS.es.md)** → Commands reference (Spanish)
- **[docs/ENVIRONMENT.md](./docs/ENVIRONMENT.md)** → Environment guide (English)
- **[docs/ENVIRONMENT.es.md](./docs/ENVIRONMENT.es.md)** → Environment guide (Spanish)
- **[docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)** → Architecture guide (English)
- **[docs/ARCHITECTURE.es.md](./docs/ARCHITECTURE.es.md)** → Architecture guide (Spanish)

### Repository docs
- **[CHANGELOG.md](./CHANGELOG.md)** → Project changelog (English)
- **[CHANGELOG.es.md](./CHANGELOG.es.md)** → Historial de cambios (Español)
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** → Contribution guide (English)
- **[CONTRIBUTING.es.md](./CONTRIBUTING.es.md)** → Guía de contribución (Español)

---

## 🛣 Roadmap

- [ ] Complete CI/CD pipeline integration
- [ ] Broader functional coverage
- [ ] Remote/cloud execution strategy
- [ ] Execution dashboards
- [ ] Stronger observability conventions
- [ ] More reusable business modules

---

## 👨‍💻 Author

**Carlos R.**  
QA | Test Automation Engineer
<br/>
🔗 GitHub: https://github.com/CarlosArman


---

## ⭐ Final Note

This project is intentionally documented and organized to reflect not only test automation capability, but also **engineering maturity in QA automation design**.
