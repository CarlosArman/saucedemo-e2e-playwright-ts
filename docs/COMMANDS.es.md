# Referencia de comandos

<p align="center">
  <a href="../README.es.md">⬅ Volver al README (Español)</a> •
  <a href="../README.md">⬅ Go to README in English</a> •
  <a href="./COMMANDS.md">🇺🇸 View this guide in English</a>
</p>

Este documento contiene el **catálogo completo de comandos** definidos en `package.json`.

> **Importante:** En tu `package.json` real debes usar `&&` en lugar de `&amp;&amp;`.
> La entidad HTML normalmente aparece solo cuando el comando se copia desde contenido renderizado.

---

## 1. Comandos generales

### `report:clean`

```bash
npm run report:clean
```

Elimina la carpeta `reports` antes de una nueva ejecución.

### `test`

```bash
npm run test
```

Es un alias de `npm run test:bdd`.

---

## 2. Ejecución base BDD

### `test:bdd`

```bash
npm run test:bdd
```

Ejecuta Cucumber usando `cucumber.cjs`.

### `test:bdd:steps`

```bash
npm run test:bdd:steps
```

Ejecuta Cucumber con `STEP_SCREENSHOT=true`, habilitando capturas después de cada step.

---

## 3. Comandos por ambiente + navegador

Estos comandos definen `TEST_ENV` y `BROWSER` antes de ejecutar Cucumber.

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

## 4. Ejecución secuencial multi-navegador

Estos comandos ejecutan los 3 navegadores **uno después del otro** en este orden: **chromium → firefox → webkit**.

### `test:dev:all`

```bash
npm run test:dev:all
```

Lógica equivalente:

```bash
npm run test:dev:chrome && npm run test:dev:firefox && npm run test:dev:webkit
```

### `test:uat:all`

```bash
npm run test:uat:all
```

Lógica equivalente:

```bash
npm run test:uat:chrome && npm run test:uat:firefox && npm run test:uat:webkit
```

### `test:prod:all`

```bash
npm run test:prod:all
```

Lógica equivalente:

```bash
npm run test:prod:chrome && npm run test:prod:firefox && npm run test:prod:webkit
```

---

## 5. Ejecución paralela multi-navegador

Estos comandos ejecutan **todos los navegadores en paralelo**: **chromium, firefox y webkit**.

Usan `concurrently` con:

- `--names "CHR,FF,WK"`
- `--kill-others`

Eso significa que si un proceso falla, los demás también se detienen.

### `test:dev:all:parallel`

```bash
npm run test:dev:all:parallel
```

Lógica equivalente:

```bash
concurrently --names "CHR,FF,WK" --kill-others "npm run test:dev:chrome" "npm run test:dev:firefox" "npm run test:dev:webkit"
```

### `test:uat:all:parallel`

```bash
npm run test:uat:all:parallel
```

Lógica equivalente:

```bash
concurrently --names "CHR,FF,WK" --kill-others "npm run test:uat:chrome" "npm run test:uat:firefox" "npm run test:uat:webkit"
```

### `test:prod:all:parallel`

```bash
npm run test:prod:all:parallel
```

Lógica equivalente:

```bash
concurrently --names "CHR,FF,WK" --kill-others "npm run test:prod:chrome" "npm run test:prod:firefox" "npm run test:prod:webkit"
```

---

## 6. Comandos de Allure

### `allure:generate`

```bash
npm run allure:generate
```

Genera el reporte de Allure desde `reports/allure-results` hacia `reports/allure-report`.

### `allure:open`

```bash
npm run allure:open
```

Abre localmente el reporte generado de Allure.

---

## 7. Comandos completos de ejecución + reporte

Estos comandos limpian reportes, ejecutan el flujo secuencial multi-navegador y generan Allure al final.

### `test:dev:report`

```bash
npm run test:dev:report
```

Lógica equivalente:

```bash
npm run report:clean && npm run test:dev:all && npm run allure:generate
```

### `test:uat:report`

```bash
npm run test:uat:report
```

Lógica equivalente:

```bash
npm run report:clean && npm run test:uat:all && npm run allure:generate
```

### `test:prod:report`

```bash
npm run test:prod:report
```

Lógica equivalente:

```bash
npm run report:clean && npm run test:prod:all && npm run allure:generate
```

---

## 8. Comandos recomendados para el README principal

Si quieres mantener el README principal limpio y fácil de consumir, muestra solo estos comandos allí:

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

## 9. Ejemplos típicos de uso

### Ejecución local rápida

```bash
npm run test:dev:chrome
```

### Ejecutar toda la matriz DEV en secuencia

```bash
npm run test:dev:all
```

### Ejecutar toda la matriz UAT en paralelo

```bash
npm run test:uat:all:parallel
```

### Ejecutar pruebas secuenciales y generar reporte

```bash
npm run test:dev:report
```

### Generar y abrir Allure manualmente

```bash
npm run allure:generate
npm run allure:open
```
