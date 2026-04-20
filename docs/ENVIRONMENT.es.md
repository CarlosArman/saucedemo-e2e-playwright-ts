# Guía de entorno

<p align="center">
  <a href="../README.es.md">⬅ Volver al README (Español)</a> •
  <a href="../README.md">⬅ Go to README in English</a> •
  <a href="./ENVIRONMENT.md">🇺🇸 View this guide in English</a>
</p>

Este documento describe las variables de entorno usadas por el framework y muestra ejemplos prácticos de ejecución.

---

## 1. Ambientes soportados

El framework soporta los siguientes ambientes:

- `TEST_ENV=dev`
- `TEST_ENV=uat`
- `TEST_ENV=prod`

Si `TEST_ENV` no se define explícitamente, el framework debería usar el ambiente por defecto definido en tu configuración.

---

## 2. Variables requeridas por ambiente

### DEV

```bash
DEV_USERNAME
DEV_PASSWORD
DEV_BASE_URL
```

`DEV_BASE_URL` es opcional si la URL base ya está definida en la configuración.

### UAT

```bash
UAT_USERNAME
UAT_PASSWORD
UAT_BASE_URL
```

`UAT_BASE_URL` es opcional si la URL base ya está definida en la configuración.

### PROD

```bash
PROD_USERNAME
PROD_PASSWORD
PROD_BASE_URL
```

`PROD_BASE_URL` es opcional si la URL base ya está definida en la configuración.

---

## 3. Overrides globales opcionales

```bash
BASE_URL
BROWSER
HEADLESS
CUCUMBER_RETRY
CUCUMBER_PARALLEL
STEP_SCREENSHOT
```

### Propósito de cada variable

- `BASE_URL` → sobreescribe la URL base del ambiente
- `BROWSER` → selecciona el navegador de Playwright (`chromium`, `firefox`, `webkit`)
- `HEADLESS` → ejecuta el navegador en modo headless cuando vale `true`
- `CUCUMBER_RETRY` → reintenta escenarios fallidos
- `CUCUMBER_PARALLEL` → controla la ejecución paralela a nivel de escenarios si tu configuración lo soporta
- `STEP_SCREENSHOT` → toma capturas después de cada step cuando vale `true`

---

## 4. Valores posibles para `BROWSER`

Usa uno de estos valores en `BROWSER`:

```bash
chromium
firefox
webkit
```

---

## 5. Ejemplos de ejecución

### Mac / Linux

Ejecutar DEV por defecto con credenciales:

```bash
DEV_USERNAME=standard_user DEV_PASSWORD=secret_sauce npm run test:bdd
```

Ejecutar UAT en Firefox:

```bash
TEST_ENV=uat UAT_USERNAME=user UAT_PASSWORD=pass BROWSER=firefox npm run test:bdd
```

Ejecutar en modo headless con reintentos:

```bash
HEADLESS=true CUCUMBER_RETRY=2 npm run test:bdd
```

Ejecutar con screenshots por step:

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

## 6. Recomendaciones de seguridad

- Nunca subas credenciales reales al repositorio.
- Usa variables de entorno locales para desarrollo.
- Usa secretos del pipeline en CI/CD.
- Evita hardcodear usuarios y contraseñas en el código de pruebas.

---

## 7. Recomendación práctica

Para mantener limpio el README, deja solo los comandos principales en `README.md` / `README.es.md` y coloca aquí la explicación detallada del entorno.
