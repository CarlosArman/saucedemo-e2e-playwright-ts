# Historial de cambios

<p align="center">
  <a href="./README.es.md">⬅ Volver al README (Español)</a> •
  <a href="./README.md">⬅ Go to README in English</a> •
  <a href="./CHANGELOG.md">🇺🇸 View this changelog in English</a>
</p>

Todos los cambios importantes de este proyecto deberían documentarse en este archivo.

Este historial sigue una estructura simple inspirada en versionado semántico y documentación por releases.

---

## [Unreleased / Sin publicar]

### Planeado
- integración de workflows CI/CD
- mayor cobertura funcional
- más módulos de negocio reutilizables
- publicación más sólida de dashboards/reportes
- estrategia de ejecución remota/cloud

---

## [2.0.0] - 2026-04-19

### Agregado
- estructura enterprise-ready del proyecto
- base de automatización con Playwright + Cucumber + TypeScript
- arquitectura Page Object Model
- cobertura de login exitoso y fallido
- cobertura de carrito de compras y checkout básico
- soporte de ejecución multiambiente (`DEV`, `UAT`, `PROD`)
- soporte de ejecución multinavegador (`chromium`, `firefox`, `webkit`)
- estrategia secuencial multi-navegador
- estrategia concurrente multi-navegador
- generación y apertura de reportes Allure
- salidas de reportería Cucumber (HTML / JSON / JUnit)
- soporte de screenshots en fallos
- soporte opcional de screenshot por step
- soporte de Playwright trace para análisis de fallos
- utilitarios de logging estructurado
- documentación separada entre README y guías en `docs/`

### Mejorado
- estructura de README orientada a recruiters y portafolio QA
- estrategia de documentación bilingüe (English / Español)
- separación de documentación de comandos, entorno y arquitectura

---

## Notas

Cuando se cree una nueva release, agrega una nueva sección de versión encima de la release anterior y mueve los ítems futuros fuera de `Unreleased`.
