## MODIFIED Requirements

### Requirement: Style guide is reachable at `/design-system`

The application MUST mount the documentation page at `/design-system`. The root route (`/`) MUST resolve to the documentation page until a real product surface exists; once a product is added, `/` MUST mount that product and MUST NOT collapse into the documentation page.

#### Scenario: Default route is the documentation
- **WHEN** a user navigates to `/` and no product surface exists
- **THEN** the browser is redirected to `/design-system` and the documentation page renders

#### Scenario: Documentation is at `/design-system`
- **WHEN** a user navigates directly to `/design-system`
- **THEN** the documentation page renders without a redirect

### Requirement: Theme is togglable from the style guide

The documentation page MUST expose a theme toggle (dark / light) that flips a class on the document root. The active theme MUST be visually marked and announced via `aria-pressed`. The toggle MUST NOT be required to view any section — default is dark.

#### Scenario: Switching to light
- **WHEN** a user activates the light option on the theme toggle
- **THEN** `document.documentElement` gains the `theme-light` class and every component on the page re-resolves its colors within the same render frame

#### Scenario: Switching back to dark
- **WHEN** a user activates the dark option
- **THEN** `document.documentElement` loses `theme-light` and every component re-resolves to the dark default