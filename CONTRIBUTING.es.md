# Guía de contribución

<p align="center">
  <a href="./README.es.md">⬅ Volver al README (Español)</a> •
  <a href="./README.md">⬅ Go to README in English</a> •
  <a href="./CONTRIBUTING.md">🇺🇸 View this guide in English</a>
</p>

Gracias por tu interés en contribuir.

Este proyecto busca mantener una arquitectura de QA Automation limpia, escalable y legible. Las contribuciones deben preservar esa intención.

---

## 1. Principios de contribución

Procura que tus contribuciones sigan estos principios:

- legibilidad primero
- mantenibilidad por encima de atajos
- separación clara de responsabilidades
- diseño de automatización reutilizable
- cambios de comportamiento documentados
- mínima sorpresa en el flujo de pruebas y en la estructura del proyecto

---

## 2. Tipos de contribución útiles

Son especialmente útiles contribuciones como:

- nuevos escenarios funcionales
- mejores abstracciones de páginas
- componentes compartidos reutilizables
- mejoras de documentación
- corrección de bugs
- mejoras de reportería/observabilidad
- mejoras orientadas a CI/CD

---

## 3. Flujo sugerido

1. Haz fork del repositorio
2. Crea una rama dedicada
3. Implementa el cambio con alcance claro
4. Actualiza documentación si aplica
5. Valida la ejecución localmente
6. Abre un pull request con una descripción clara

---

## 4. Sugerencia de nombres de rama

Ejemplos:

```bash
feature/add-checkout-validation
fix/login-error-handling
docs/update-readme-structure
chore/improve-reporting-hooks
```

---

## 5. Expectativas para un Pull Request

Un buen pull request debería explicar:

- qué cambió
- por qué cambió
- áreas impactadas
- cómo fue validado
- qué documentación se actualizó

Si el cambio afecta comandos, configuración o arquitectura, actualiza los archivos de documentación relacionados.

---

## 6. Responsabilidades de documentación

Actualiza la documentación cuando corresponda:

- `README.md` / `README.es.md` para cambios importantes de uso
- `docs/COMMANDS*.md` para cambios de scripts
- `docs/ENVIRONMENT*.md` para cambios de variables o ambientes
- `docs/ARCHITECTURE*.md` para cambios estructurales
- `CHANGELOG*.md` para cambios a nivel release

---

## 7. Guías de estilo para QA Automation

Prácticas recomendadas:

- mantener selectores y acciones UI dentro de Page Objects
- mantener step definitions enfocadas en mapear comportamiento
- evitar mezclar demasiada lógica dentro de los steps
- preferir utilitarios reutilizables en vez de código duplicado
- usar nombres explícitos y orientados a intención
- preservar separación clara entre ambiente y navegador

---

## 8. Antes de abrir un PR

Valida como mínimo que:

- las pruebas relevantes ejecuten correctamente
- no haya regresiones evidentes en la estructura
- la documentación esté actualizada cuando sea necesario
- la nomenclatura sea consistente
- el nuevo código encaje con el diseño actual del framework

---

## 9. Nota final

Las mejores contribuciones son las que mejoran el framework sin volverlo más difícil de entender o mantener.
