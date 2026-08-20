## Purpose

Define the living style guide that documents the design system in-product. The guide MUST be renderable from the same codebase without an external docs tool.

## Requirements

### Requirement: Style guide is reachable at `/design-system`

The application MUST mount the documentation page at `/design-system` while preserving a distinct product surface for `/` (or the equivalent root route).

#### Scenario: Routing distinction
- **WHEN** a user navigates to `/design-system`
- **THEN** the documentation page renders
- **WHEN** a user navigates to `/`
- **THEN** a product surface (not the documentation) renders

### Requirement: Sections are anchored and scrollable

The guide MUST expose the sections: Color, Typography, Spacing, Components, Data, Charts, Modes, Motion — each with a stable `id` and reachable via in-page navigation.

#### Scenario: Anchor navigation
- **WHEN** a user clicks any nav item
- **THEN** the browser scrolls to the matching section via `scroll-margin-top` to clear the sticky nav

### Requirement: All components are demonstrated

Every component defined in the components spec MUST appear in the Components section in its primary state and at least one secondary state.

#### Scenario: Coverage
- **WHEN** a new component is added to the design system
- **THEN** it MUST be added to the Components section in the same change

### Requirement: Tokens are inspectable

The Color section MUST render a swatch grid where each swatch shows the token name (`--name`) and a background filled with `var(--name)`.

#### Scenario: Token-to-visual mapping
- **WHEN** a designer views the swatch grid
- **THEN** they can map a token name to its rendered color without opening the source

### Requirement: Accent packs are demoable

The Color section MUST render three accent-pack cards (`caleta`, `operativo`, `parametrico`) using `[data-accent]` on each card.

#### Scenario: Side-by-side comparison
- **WHEN** the three accent packs render
- **THEN** each card has a distinct accent background gradient visible against the same `--bg`