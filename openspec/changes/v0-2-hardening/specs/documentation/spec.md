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