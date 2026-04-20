# Architecture Guide

<p align="center">
  <a href="../README.md">⬅ Back to README (English)</a> •
  <a href="../README.es.md">⬅ Ir al README en Español</a> •
  <a href="./ARCHITECTURE.es.md">🇪🇸 Ver esta guía en Español</a>
</p>

This document explains the architectural design of the framework and the responsibilities of each layer.

---

## 1. Architecture Goal

The goal of this framework is to provide a **maintainable, scalable, and observable** UI automation solution for SauceDemo using Playwright + Cucumber + TypeScript.

The architecture is designed to:

- separate business intent from UI interaction details
- isolate environment and browser configuration
- centralize browser lifecycle and reporting concerns
- generate strong execution evidence for debugging and reporting
- support growth toward CI/CD and broader scenario coverage

---

## 2. Core Design Principles

- **Separation of concerns**
- **Readability of business scenarios**
- **Reusability of page interactions**
- **Environment-aware execution**
- **Observability-first failure analysis**
- **Scalability for future modules**

---

## 3. High-Level Flow

```text
Feature file (Gherkin)
   ↓
Step definitions
   ↓
Page Objects / Components
   ↓
Playwright browser actions
   ↓
Hooks capture screenshots, traces, logs, and report artifacts
```

---

## 4. Folder Responsibilities

### `features/`
Contains the business-readable Gherkin scenarios.

### `src/steps/`
Maps Gherkin steps to automation logic.

### `src/pages/`
Encapsulates selectors and page behavior using Page Object Model.

### `src/hooks/`
Contains execution lifecycle logic such as browser setup, teardown, screenshots, tracing, and reporting behavior.

### `src/config/`
Stores environment-dependent configuration such as base URLs, credentials strategy, or runtime defaults.

### `src/support/`
Contains the shared World / context used across scenario execution.

### `src/utils/`
Contains shared utilities such as logging or helper functions.

---

## 5. Page Object Model Strategy

The framework follows a Page Object Model strategy to keep UI selectors and actions outside the test flow definitions.

Benefits:

- cleaner step definitions
- easier maintenance when the UI changes
- better reuse across scenarios
- clearer separation between business intent and technical implementation

---

## 6. Hooks Strategy

Hooks are separated by responsibility.

Typical responsibilities include:

- browser lifecycle initialization and cleanup
- context/page creation
- screenshot capture on failure
- optional screenshot capture after each step
- trace start/stop and export on failure
- report metadata and scenario-level diagnostics

This separation makes the framework easier to maintain and evolve.

---

## 7. Reporting and Observability Layer

The framework is designed with observability in mind.

It supports:

- Cucumber HTML / JSON / JUnit outputs
- Allure results and Allure HTML report generation
- screenshots on failure
- optional step screenshots
- Playwright trace files
- structured logs
- correlation-ready scenario tracking

This helps speed up debugging and improves test execution traceability.

---

## 8. Environment Strategy

Execution is environment-aware through variables such as:

- `TEST_ENV`
- `BASE_URL`
- `DEV_USERNAME`, `UAT_USERNAME`, `PROD_USERNAME`
- `DEV_PASSWORD`, `UAT_PASSWORD`, `PROD_PASSWORD`

This makes the same framework reusable across multiple target environments without changing test logic.

---

## 9. Browser Strategy

The framework supports multiple browsers:

- `chromium`
- `firefox`
- `webkit`

Execution can be:

- **single-browser**
- **multi-browser sequential**
- **multi-browser concurrent**

This enables broader compatibility validation and flexible execution time trade-offs.

---

## 10. Scalability Notes

The current structure is suitable for extending into:

- more business modules
- reusable shared components
- tag-based smoke/regression strategies
- CI/CD pipeline integration
- richer test data strategies
- dashboard/report publishing

---

## 11. Recommended Future Enhancements

- dedicated test data management layer
- API/service abstraction for hybrid UI/API flows
- CI/CD workflow templates
- execution metrics dashboard
- stronger quality gates and reporting governance
