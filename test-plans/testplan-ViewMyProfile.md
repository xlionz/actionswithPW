# Test Plan Title: View My Profile

## Scope
This test plan covers the functional validation of the OrangeHRM user profile area accessed from the dashboard. It focuses on the implemented automation for viewing the user profile and verifying the displayed profile information.

- Test type: Functional
- Testing category: Smoke / Regression
- Application area covered: OrangeHRM > View My Profile
- Scenario numbering starts at 001 for this test plan.

## Scenarios

### CA-001-ViewMyProfile-Chromium-ValidateOtherId

**Tag:** @ViewMyProfile

**Test Type:** Functional - Smoke

**Description:** Verify that the user can access the profile section and the Other Id field is displayed with a valid value.

**Preconditions:**
- The user is authenticated in OrangeHRM.
- The application is available and the dashboard is accessible.

**Given:** The user is on the OrangeHRM dashboard and navigates to the profile section.

**When:** The profile page is opened and the Other Id field is evaluated.

**Then:** The profile page displays the Other Id field.

**Expected Result:** The Other Id field is visible and contains a populated value.

**Priority:** High

### CA-002-ViewMyProfile-Firefox-ValidateOtherId

**Tag:** @ViewMyProfile

**Test Type:** Functional - Smoke

**Description:** Verify that the Other Id field is displayed correctly when the profile screen is opened in Firefox.

**Preconditions:**
- The user is authenticated in OrangeHRM.
- The application is available.

**Given:** The user is on the OrangeHRM dashboard and navigates to the profile section in Firefox.

**When:** The profile page loads and the Other Id field is checked.

**Then:** The page renders the profile form successfully.

**Expected Result:** The Other Id input is visible and populated in Firefox.

**Priority:** High

### CA-003-ViewMyProfile-Webkit-ValidateOtherId

**Tag:** @ViewMyProfile

**Test Type:** Functional - Smoke

**Description:** Verify that the Other Id field is displayed correctly when the profile screen is opened in WebKit.

**Preconditions:**
- The user is authenticated in OrangeHRM.
- The application is available.

**Given:** The user is on the OrangeHRM dashboard and navigates to the profile section in WebKit.

**When:** The profile page loads and the Other Id field is checked.

**Then:** The page renders the profile form successfully.

**Expected Result:** The Other Id input is visible and populated in WebKit.

**Priority:** High
