# Test Plan Title: Shopping Cart Checkout - Sauce Demo - Functional - Sprint Not Specified/2026

## Scope

This test plan covers the implemented Sauce Demo automation that selects multiple inventory products, validates that the shopping cart total matches the selected products, and completes checkout.

- Test type: Functional
- Testing category: Smoke / Regression / E2E
- Application area covered: Sauce Demo > Inventory > Shopping Cart > Checkout
- Scenario numbering starts at 001 for this test plan.

## Scenarios

### CA-001-ShoppingCart-Chromium-SelectMultipleProducts

**Tags:** @smokeLogin @smoke @regression @e2e @checknow

**Test Type:** Functional - Smoke

**Description:** Verify that an authenticated user can select multiple inventory products.

**Preconditions:**
- The standard Sauce Demo user can authenticate successfully.
- The Sauce Demo inventory page is available.

**Given:** The user is on the Sauce Demo inventory page.

**When:** The user selects multiple products at random.

**Then:** The selected products are added to the shopping cart.

**Expected Result:** Multiple products are selected and available in the shopping cart.

**Priority:** High

### CA-002-ShoppingCart-Chromium-ValidateCartTotal

**Tags:** @smokeLogin @smoke @regression @e2e @checknow

**Test Type:** Functional - Regression

**Description:** Verify that the shopping cart total equals the sum of the selected product prices.

**Preconditions:**
- The user is authenticated in Sauce Demo.
- Multiple products have been selected.

**Given:** The user opens the shopping cart with selected products.

**When:** The cart item prices are calculated.

**Then:** The calculated cart total matches the sum of the selected products.

**Expected Result:** The shopping cart displays a total equal to the selected product total.

**Priority:** High

### CA-003-ShoppingCart-Chromium-CompletePurchase

**Tags:** @smokeLogin @smoke @regression @e2e @checknow

**Test Type:** Functional - E2E

**Description:** Verify that the user can complete checkout for the selected products.

**Preconditions:**
- The user is authenticated in Sauce Demo.
- The shopping cart contains selected products.
- Valid checkout information is available.

**Given:** The user is on the shopping cart page after validating the cart total.

**When:** The user starts checkout, enters checkout information, continues to the order overview, and finishes the order.

**Then:** Sauce Demo confirms that the order was completed.

**Expected Result:** The `Thank you for your order!` confirmation heading is visible.

**Priority:** High
