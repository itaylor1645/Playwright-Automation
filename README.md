# Playwright Showcase Suite

A polished Playwright + TypeScript automation framework built to showcase modern test automation practices on GitHub.

## What this project demonstrates

- UI automation with Playwright
- API testing with Playwright's built-in request client
- Page Object Model structure
- Cross-browser execution
- Mobile browser coverage
- CI execution with GitHub Actions
- Automatic screenshots, videos, and traces on failure

## Tech stack

- Playwright
- TypeScript
- GitHub Actions
- Page Object Model

## Project structure

```text
playwright-showcase-suite/
├── .github/workflows/
│   └── playwright.yml
├── src/
│   ├── pages/
│   │   ├── CartPage.ts
│   │   ├── InventoryPage.ts
│   │   └── LoginPage.ts
│   └── utils/
│       └── test-data.ts
├── tests/
│   ├── api/
│   │   └── api-health.spec.ts
│   └── ui/
│       ├── cart.spec.ts
│       └── login.spec.ts
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

## Why this is GitHub-worthy

This repo is intentionally designed to communicate test automation maturity to hiring managers and engineering leads. It shows that you understand:

- framework organization
- maintainable selectors and reusable page objects
- separation between UI and API coverage
- CI integration
- artifact generation for debugging
- multi-browser strategy

## Quick start

```bash
npm install
npx playwright install
npm test
```

## Useful commands

```bash
npm run test:ui
npm run test:api
npm run test:headed
npm run test:debug
npm run report
npm run lint
```

## Repo description

> Playwright + TypeScript automation framework showcasing UI testing, API validation, page objects, CI integration, and cross-browser execution.

## Suggested improvements for version 2

- Add custom fixtures
- Add environment config by target system
- Add data factories
- Add test tagging strategy
- Add accessibility checks with axe
- Add visual regression examples
- Add Allure or custom reporting
- Add Docker support

## Good portfolio talking points

- Why Playwright over Selenium for modern web apps
- How trace viewer speeds up debugging
- Why page objects should stay thin and readable
- How CI artifacts help root-cause failed runs
- When to combine UI and API coverage in the same suite

## Demo target

UI examples target [Sauce Demo](https://www.saucedemo.com/), which is commonly used for automation practice. API examples use JSONPlaceholder.
