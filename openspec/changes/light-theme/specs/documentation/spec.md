## MODIFIED Requirements

### Requirement: Style guide is reachable at `/design-system`

The application MUST mount the documentation page at `/design-system`. The root route (`/`) MUST mount a product surface distinct from the documentation page; routing MUST NOT collapse both routes into the same component.

#### Scenario: Routing distinction
- **WHEN** a user navigates to `/design-system`
- **THEN** the documentation page renders
- **WHEN** a user navigates to `/`
- **THEN** a product surface (not the documentation) renders

#### Scenario: Dead routing is rejected
- **WHEN** the application source is reviewed
- **THEN** the `Home()` entry point MUST NOT contain a ternary that returns the same component on both branches

### Requirement: Theme is togglable from the style guide

The documentation page MUST expose a theme toggle (dark / light) that flips a class on the document root. The active theme MUST be visually marked and announced via `aria-pressed`. The toggle MUST NOT be required to view any section — default is dark.

#### Scenario: Switching to light
- **WHEN** a user activates the light option on the theme toggle
- **THEN** `document.documentElement` gains the `theme-light` class and every component on the page re-resolves its colors within the same render frame

#### Scenario: Switching back to dark
- **WHEN** a user activates the dark option
- **THEN** `document.documentElement` loses `theme-light` and every component re-resolves to the dark default