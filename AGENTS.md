# Playwright QA Automation Framework

## Project Purpose

This repository contains an end-to-end test automation framework built with Playwright and TypeScript.

The framework follows the Page Object Model (POM) pattern and is designed to support maintainable, reusable, and scalable automated tests.

## Project Structure

```text
firstProjectPW/
├── .github/
├── docs/
├── src/
│   ├── data/
│   ├── fixtures/
│   ├── pages/
│   └── utils/
├── tests/
├── playwright-report/
├── test-results/
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── AGENTS.md

## Architecture Rules

- Use the Page Object Model (POM) for UI automation.
- Keep locators and UI interactions inside Page Objects.
- Keep test scenarios and test flow inside `tests/`.
- Reuse existing Page Objects before creating new ones.
- Keep reusable utilities inside `src/utils/`.
- Keep test data inside `src/data/`.
- Keep custom Playwright fixtures inside `src/fixtures/`.
- Do not duplicate existing functionality.
- Follow the existing project structure and naming conventions.

## Locator Strategy

- Prefer Playwright's semantic locators whenever possible.
- Prefer `getByRole()` for accessible UI elements.
- Use `getByLabel()` for form fields.
- Use `getByPlaceholder()` when appropriate.
- Use `getByTestId()` when a stable test ID is available.
- Use CSS locators when semantic locators are not suitable.
- Use XPath only as a last resort.
- Avoid fragile locators based on DOM hierarchy or generated CSS classes.

## Assertions

- Use Playwright's built-in `expect` assertions.
- Prefer web-first assertions such as `toBeVisible()`, `toHaveText()`, `toContainText()`, `toHaveURL()`, and `toBeChecked()`.
- Do not use manual polling or unnecessary `waitForTimeout()`.
- Keep assertions outside Page Objects unless the assertion is intentionally part of a reusable component or assertion class.

## Waiting and Synchronization

- Prefer Playwright's built-in auto-waiting.
- Prefer web-first assertions instead of manual waits.
- Do not use `waitForTimeout()` unless there is a specific technical reason.
- Use explicit waits only when the application requires synchronization that Playwright cannot infer automatically.
- Avoid arbitrary sleeps or fixed delays.

## Test Naming and Tags

- Use descriptive test names that clearly describe the business behavior being tested.
- Use tags to categorize tests by execution flow.
- Keep tags consistent with the existing project conventions.
- Tags must start with `@`.
- Prefer tags such as `@smokeLogin`, `@regression`, and `@e2e`.
- Use Playwright's `--g` option to execute tests by tag.

## Test Data

- Keep test data inside `src/data/`.
- Prefer external data files when the same data is reused across multiple tests.
- Use CSV files for data-driven testing when appropriate.
- Use TypeScript types or interfaces when structured test data is shared across the framework.
- Do not hard-code reusable test data directly inside test cases.
- Do not store sensitive credentials in the repository.

## Page Objects

- Create one Page Object for each main application page or functional area.
- Keep locators and UI interactions inside the corresponding Page Object.
- Use private or readonly locators when appropriate.
- Keep Page Object methods focused on a single business action.
- Do not duplicate locators across Page Objects.
- Reuse existing Page Objects before creating new ones.
- Pass the Playwright `Page` through the Page Object constructor.
- When a new browser tab or popup represents a different page, create a dedicated Page Object for it.

## Running Playwright Tests

- The project uses PowerShell as the default VS Code terminal on Windows.
- Always run Playwright from the project root, where `package.json` and `playwright.config.ts` are located.
- All E2E automations that access external pages or applications must run with normal network access. When the execution environment is isolated, request the required elevated network permission before running the automation; use it once granted.
- After every Playwright execution, provide a concise summary in the chat that includes the command run, browsers/projects executed, and passed, failed, and skipped test totals. If a test fails, include the failing test name and the primary error.
- Do not use `cd /d` because it is CMD syntax and is not valid PowerShell syntax.
- If changing directories is necessary in PowerShell, use `Set-Location` or `cd "path"`.
- Prefer using the current working directory instead of changing directories unnecessarily.
- Use the complete Playwright CLI option `--grep` when filtering by tag.
- The correct command format is:

## Before to run the Automation
- Agents must use the Playwright skills available in `agents/skills` before running automation.
- Validate playright-test-documentatio skills
- Validate playright-test-creation

```powershell
npx playwright test --grep "@tag"
