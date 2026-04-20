# Environment Guide

<p align="center">
  <a href="../README.md">⬅ Back to README (English)</a> •
  <a href="../README.es.md">⬅ Ir al README en Español</a> •
  <a href="./ENVIRONMENT.es.md">🇪🇸 Ver esta guía en Español</a>
</p>

This document describes the environment variables used by the framework and shows practical execution examples.

---

## 1. Supported Environments

The framework supports the following environments:

- `TEST_ENV=dev`
- `TEST_ENV=uat`
- `TEST_ENV=prod`

If `TEST_ENV` is not explicitly set, the framework should use the default environment defined in your configuration.

---

## 2. Required Variables by Environment

### DEV

```bash
DEV_USERNAME
DEV_PASSWORD
DEV_BASE_URL
```

`DEV_BASE_URL` is optional if the base URL is already provided by configuration.

### UAT

```bash
UAT_USERNAME
UAT_PASSWORD
UAT_BASE_URL
```

`UAT_BASE_URL` is optional if the base URL is already provided by configuration.

### PROD

```bash
PROD_USERNAME
PROD_PASSWORD
PROD_BASE_URL
```

`PROD_BASE_URL` is optional if the base URL is already provided by configuration.

---

## 3. Optional Global Overrides

```bash
BASE_URL
BROWSER
HEADLESS
CUCUMBER_RETRY
CUCUMBER_PARALLEL
STEP_SCREENSHOT
```

### Purpose of each variable

- `BASE_URL` → overrides the environment base URL
- `BROWSER` → selects the Playwright browser (`chromium`, `firefox`, `webkit`)
- `HEADLESS` → runs the browser in headless mode when set to `true`
- `CUCUMBER_RETRY` → retries failed scenarios
- `CUCUMBER_PARALLEL` → controls scenario-level parallel execution if supported by your configuration
- `STEP_SCREENSHOT` → captures screenshots after each step when set to `true`

---

## 4. Browser Values

Use one of these values in `BROWSER`:

```bash
chromium
firefox
webkit
```

---

## 5. Execution Examples

### Mac / Linux

Run default DEV execution with credentials:

```bash
DEV_USERNAME=standard_user DEV_PASSWORD=secret_sauce npm run test:bdd
```

Run UAT in Firefox:

```bash
TEST_ENV=uat UAT_USERNAME=user UAT_PASSWORD=pass BROWSER=firefox npm run test:bdd
```

Run in headless mode with retries:

```bash
HEADLESS=true CUCUMBER_RETRY=2 npm run test:bdd
```

Run with step screenshots:

```bash
STEP_SCREENSHOT=true npm run test:bdd
```

### Windows CMD

```bash
set DEV_USERNAME=standard_user
set DEV_PASSWORD=secret_sauce
npm run test:bdd
```

### PowerShell

```powershell
$env:DEV_USERNAME="standard_user"
$env:DEV_PASSWORD="secret_sauce"
npm run test:bdd
```

---

## 6. Security Recommendations

- Never commit real credentials to the repository.
- Use local environment variables for development.
- Use CI/CD secret stores in pipelines.
- Avoid hardcoding usernames and passwords in test code.

---

## 7. Practical Recommendation

For a clean README, keep only the main commands in `README.md` and place the detailed environment explanation here.
