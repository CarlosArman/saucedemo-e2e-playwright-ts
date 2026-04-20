# Commands Reference

<p align="center">
  <a href="../README.md">⬅ Back to README (English)</a> •
  <a href="../README.es.md">⬅ Ir al README en Español</a> •
  <a href="./COMMANDS.es.md">🇪🇸 Ver esta guía en Español</a>
</p>

This document contains the **complete command catalog** defined in `package.json`.

> **Important:** In your real `package.json`, use `&&` instead of `&amp;&amp;`.
> The HTML entity usually appears only when commands are copied from rendered content.

---

## 1. General Commands

### `report:clean`

```bash
npm run report:clean
```

Deletes the `reports` folder before a new execution.

### `test`

```bash
npm run test
```

Alias for `npm run test:bdd`.

---

## 2. Core BDD Execution

### `test:bdd`

```bash
npm run test:bdd
```

Runs Cucumber using `cucumber.cjs`.

### `test:bdd:steps`

```bash
npm run test:bdd:steps
```

Runs Cucumber with `STEP_SCREENSHOT=true`, enabling screenshots after each step.

---

## 3. Environment + Browser Commands

These commands set both `TEST_ENV` and `BROWSER` before running Cucumber.

### DEV

```bash
npm run test:dev:chrome
npm run test:dev:firefox
npm run test:dev:webkit
```

### UAT

```bash
npm run test:uat:chrome
npm run test:uat:firefox
npm run test:uat:webkit
```

### PROD

```bash
npm run test:prod:chrome
npm run test:prod:firefox
npm run test:prod:webkit
```

---

## 4. Sequential Multi-Browser Execution

These commands run the 3 browsers **one after another** in this order: **chromium → firefox → webkit**.

### `test:dev:all`

```bash
npm run test:dev:all
```

Equivalent logic:

```bash
npm run test:dev:chrome && npm run test:dev:firefox && npm run test:dev:webkit
```

### `test:uat:all`

```bash
npm run test:uat:all
```

Equivalent logic:

```bash
npm run test:uat:chrome && npm run test:uat:firefox && npm run test:uat:webkit
```

### `test:prod:all`

```bash
npm run test:prod:all
```

Equivalent logic:

```bash
npm run test:prod:chrome && npm run test:prod:firefox && npm run test:prod:webkit
```

---

## 5. Parallel Multi-Browser Execution

These commands run **all browsers concurrently**: **chromium, firefox, and webkit**.

They use `concurrently` with:

- `--names "CHR,FF,WK"`
- `--kill-others`

That means if one process fails, the others are stopped as well.

### `test:dev:all:parallel`

```bash
npm run test:dev:all:parallel
```

Equivalent logic:

```bash
concurrently --names "CHR,FF,WK" --kill-others "npm run test:dev:chrome" "npm run test:dev:firefox" "npm run test:dev:webkit"
```

### `test:uat:all:parallel`

```bash
npm run test:uat:all:parallel
```

Equivalent logic:

```bash
concurrently --names "CHR,FF,WK" --kill-others "npm run test:uat:chrome" "npm run test:uat:firefox" "npm run test:uat:webkit"
```

### `test:prod:all:parallel`

```bash
npm run test:prod:all:parallel
```

Equivalent logic:

```bash
concurrently --names "CHR,FF,WK" --kill-others "npm run test:prod:chrome" "npm run test:prod:firefox" "npm run test:prod:webkit"
```

---

## 6. Allure Commands

### `allure:generate`

```bash
npm run allure:generate
```

Generates the Allure report from `reports/allure-results` into `reports/allure-report`.

### `allure:open`

```bash
npm run allure:open
```

Opens the generated Allure report locally.

---

## 7. Full Execution + Report Commands

These commands clean reports, run the sequential multi-browser flow, and generate Allure at the end.

### `test:dev:report`

```bash
npm run test:dev:report
```

Equivalent logic:

```bash
npm run report:clean && npm run test:dev:all && npm run allure:generate
```

### `test:uat:report`

```bash
npm run test:uat:report
```

Equivalent logic:

```bash
npm run report:clean && npm run test:uat:all && npm run allure:generate
```

### `test:prod:report`

```bash
npm run test:prod:report
```

Equivalent logic:

```bash
npm run report:clean && npm run test:prod:all && npm run allure:generate
```

---

## 8. Recommended Commands for the Main README

If you want to keep the main README clean and recruiter-friendly, expose only these commands there:

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

## 9. Typical Usage Examples

### Quick local execution

```bash
npm run test:dev:chrome
```

### Run the full DEV matrix sequentially

```bash
npm run test:dev:all
```

### Run the full UAT matrix concurrently

```bash
npm run test:uat:all:parallel
```

### Run sequential tests and generate report

```bash
npm run test:dev:report
```

### Generate and open Allure manually

```bash
npm run allure:generate
npm run allure:open
```
