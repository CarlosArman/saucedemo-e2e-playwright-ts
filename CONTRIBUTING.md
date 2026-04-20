# Contributing Guide

<p align="center">
  <a href="./README.md">⬅ Back to README (English)</a> •
  <a href="./README.es.md">⬅ Ir al README en Español</a> •
  <a href="./CONTRIBUTING.es.md">🇪🇸 Ver esta guía en Español</a>
</p>

Thank you for your interest in contributing.

This project aims to maintain a clean, scalable, and readable QA automation architecture. Contributions should preserve that intent.

---

## 1. Contribution Principles

Please keep contributions aligned with these principles:

- readability first
- maintainability over shortcuts
- clear separation of concerns
- reusable automation design
- documented behavior changes
- minimal surprise in test flow and project structure

---

## 2. Typical Contribution Types

Useful contributions include:

- new functional scenarios
- better page abstractions
- reusable shared components
- documentation improvements
- bug fixes
- reporting/observability improvements
- CI/CD enhancements

---

## 3. Suggested Workflow

1. Fork the repository
2. Create a dedicated branch
3. Implement the change with clear scope
4. Update documentation if needed
5. Validate execution locally
6. Open a pull request with a clear description

---

## 4. Branch Naming Suggestions

Examples:

```bash
feature/add-checkout-validation
fix/login-error-handling
docs/update-readme-structure
chore/improve-reporting-hooks
```

---

## 5. Pull Request Expectations

A good pull request should explain:

- what changed
- why it changed
- impacted areas
- how it was validated
- any documentation updated

If the change affects commands, configuration, or architecture, update the related documentation files.

---

## 6. Documentation Responsibilities

Please update documentation when relevant:

- `README.md` / `README.es.md` for major usage changes
- `docs/COMMANDS*.md` for script changes
- `docs/ENVIRONMENT*.md` for variable or environment changes
- `docs/ARCHITECTURE*.md` for structural changes
- `CHANGELOG*.md` for release-level changes

---

## 7. Test Automation Style Guidelines

Recommended practices:

- keep selectors and UI actions inside Page Objects
- keep step definitions focused on behavior mapping
- avoid mixing too much logic inside steps
- prefer reusable utilities over duplicated code
- keep names explicit and intention-revealing
- preserve clear environment/browser separation

---

## 8. Before Opening a PR

Validate, at minimum:

- relevant tests run correctly
- no obvious regression in structure
- documentation is updated when necessary
- naming is consistent
- new code fits the existing framework design

---

## 9. Final Note

The best contributions are the ones that improve the framework without making it harder to understand or maintain.
