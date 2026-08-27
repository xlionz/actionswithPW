---
name: playwright-test-creation
description: Create Playwright tests following this project's POM architecture, conventions, locators, assertions, fixtures, and tagging strategy.
---

## Workflow

1. Inspect the existing project structure before creating files.
2. Search for an existing Page Object, fixture, utility, or test that can be reused.
3. Reuse existing components whenever possible.
4. Create the test inside the appropriate `tests/` directory.
5. Use the existing Page Objects instead of interacting directly with locators in the test.
6. Apply the appropriate Playwright tag.
7. Use Playwright `expect` assertions for validations.
8. Run the relevant test after creating it.

## Test Structure

- Use `test.describe()` to group related scenarios.
- Use descriptive test names focused on business behavior.
- Keep the test focused on orchestration and business flow.
- Do not define complex locators directly inside the test.
- Use Page Objects for UI interactions.
- Use `await` for all asynchronous Playwright actions.
- Use `expect` for validations.

Example:

```typescript
test.describe('View My Profile @ViewMyProfile', () => {
    test('Select An Option', async ({ pageAuthOrange : page}) => {
        await selectAnOption(page);
        await checkMyNameFromMyInfo(page);
    })

    test('Validate Other Id', async ({ pageAuthOrange : page}) => {
        await selectAnOption(page);
        await checkMyOtherIdFromMyInfo(page);
    })
})

## Tags

- Apply tags using the existing project convention.
- Tags must start with `@`.
- Use the following tags when applicable:
  - `@smokeLogin`
  - `@regression`
  - `@e2e`
- Prefer placing the tag in the `test.describe()` title when the tag applies to all tests in the group.
- Use a test-level tag when only one specific test requires it.
- Do not create new tags without a clear reason.

## Page Objects

- Reuse existing Page Objects whenever possible.
- Create a new Page Object only when the page or functional area is not already represented.
- Keep locators and UI interactions inside Page Objects.
- Do not place raw locators inside test files.
- Pass the Playwright `Page` through the Page Object constructor.
- Keep Page Object methods focused on a single business action.
- Use descriptive method names based on the business action.
- When a new tab or popup represents a different page, use a dedicated Page Object for that page.
- Pass the new `Page` instance to the new Page Object.

## Assertions and Validation

- Place assertions in dedicated assertion classes under `src/assertions/`.
- Before creating an assertion, search `src/assertions/` for one that already covers the validation.
- Reuse an existing assertion and edit it only when the requested validation requires a change; create a new assertion only when no suitable assertion exists.
- Keep test files focused on orchestration: invoke the relevant assertion class instead of defining assertions directly in the test.
- Use Playwright `expect` for test validations.
- Prefer web-first assertions such as:
  - `toBeVisible()`
  - `toHaveText()`
  - `toContainText()`
  - `toHaveURL()`
  - `toBeChecked()`
- Prefer assertions against user-visible behavior or business outcomes.
- Do not use `textContent()` or `innerText()` only to compare values when a Playwright assertion can perform the validation directly.
- Do not use manual `if` statements for standard UI assertions.
- Avoid unnecessary assertions that do not provide meaningful validation.
- Do not place assertions inside Page Objects unless explicitly required by the framework.
