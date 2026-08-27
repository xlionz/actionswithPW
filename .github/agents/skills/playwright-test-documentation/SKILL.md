---
name: playwright-test-documentation
description: Generate and maintain Playwright test plans and test scenarios based on the automated functionality implemented in this project.
---

## Workflow

1. Review the implemented Playwright automation and identify the functionality covered.
2. Review the related Page Objects and test files.
3. Identify the functional scenarios covered by the automation.
4. Identify relevant negative scenarios and non-functional scenarios when applicable.
5. Create the `docs/test-plans/` directory if it does not exist.
6. Create or update the corresponding Markdown test plan.
7. Keep the documentation consistent with the implemented automation.
8. Do not invent functionality that is not present in the application.

## Documentation

After the automated test is successfully implemented and executed:

- Invoke the `playwright-test-documentation` skill.
- Generate or update the corresponding Test Plan.
- Generate the scenarios covered by the automation.
- Save the documentation under `docs/test-plans/`.

## Documentation File

- Create the documentation directory `docs/test-plans/` if it does not exist.
- Create one Markdown file per page or functional area.
- Use the following filename convention:

`testplan-[PAGE_NAME].md`

Examples:
- `testplan-LifeInsurance.md`
- `testplan-Login[page].md`
- `testplan-Checkout.md`

- Use the page or functional area name from the automated test.
- Do not use spaces or special characters in the filename.
- If the file already exists, update it instead of creating a duplicate.

## Test Plan Structure

Each generated test plan must include:

### Test Plan Title
Use the format:

Test Plan Title: [Title] - [WebPage] - [Functional Or Non-Fuctional] - [SprintNumber/Year]

### Scope
Describe what the test plan covers.

Specify:
- Whether the test plan covers Functional or Non-Functional testing.
- The specific type of testing when applicable, such as Smoke, Regression, E2E, Performance, Security, Usability, or Accessibility.
- The application page or functionality covered.
- Each Test Plan starts its scenario numbering at `001` maximum of 5 scenarios.
- Scenario numbers are sequential within the same Test Plan.
- Do not continue numbering from another Test Plan.

### Scenarios
List all scenarios included in the test plan.

Each scenario must follow this naming convention:

CA-[NUMBER]-[PAGE_NAME]-[BROWSER]-[SCENARIO]

Example:

CA-001-LifeInsurance-Chromium-AccessLifeInsurance
CA-002-LifeInsurance-Chromium-ViewInsurancePlans
CA-003-LifeInsurance-Firefox-SelectInsurancePlan

## Scenario Content

Each scenario must include:

- Scenario ID
- Scenario name
- Test type
- Description
- Preconditions
- Given
- When
- Then
- Expected result
- Priority

Use the following structure:

### CA-001-LifeInsurance-Chromium-AccessLifeInsurance

**Test Type:** Functional - Smoke

**Description:** Verify that the user can access the Life Insurance section.

**Preconditions:**
- The user is logged in.
- The application is available.

**Given:** The user is on the Home page.

**When:** The user selects Life Insurance.

**Then:** The Life Insurance page is displayed.

**Expected Result:** The Life Insurance page is displayed successfully.

**Priority:** High

## Scenario Tags

- Every documented scenario must include the Playwright tag associated with the automated test.
- The tag must match an existing tag in the test automation.
- Do not invent new tags.
- If a scenario has multiple tags, include all applicable tags.
- Use the tag to identify which automated test flow covers the scenario.

Example:

### CA-001-LifeInsurance-Chromium-AccessLifeInsurance

**Tag:** @smokeLogin

**Test Type:** Functional - Smoke

**Description:** Verify that the user can access the Life Insurance section.