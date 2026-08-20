## Purpose

Define the catalog of reusable UI components exposed by the design system. Each component has a stable class prefix `u-*`, a documented API, and predictable states (default, hover, focus, active, disabled, loading, error).

## Requirements

### Requirement: Naming convention is `u-<component>`

Every component MUST use the `u-` prefix to scope its classes and prevent collisions when the system is embedded in a product.

#### Scenario: Classes are namespaced
- **WHEN** a product embeds the design system alongside its own CSS
- **THEN** no `.button`, `.input`, or `.panel` from the product collides with a design-system class

### Requirement: Buttons expose variant and state

The `u-button` component MUST support `primary`, `secondary`, and `ghost` variants and `disabled` and `loading` states. All variants MUST share `--control-height` and `--radius-sm`.

#### Scenario: Loading state
- **WHEN** a button is rendered with `loading=true`
- **THEN** it MUST be disabled, show "Cargando" label, and render with the same dimensions as its non-loading variant

### Requirement: Inputs share a single primitive

`u-input` and `u-select` MUST share height, padding, border, and radius; only their internal layout differs. Inputs MUST expose a `has-error` modifier that mixes `--error` into the border at 60%.

#### Scenario: Error state is visually distinct
- **WHEN** an input has `has-error`
- **THEN** its border color MUST shift toward `--error` while remaining legible against `--bg`

### Requirement: Controls have consistent affordances

`u-segmented` and `u-tabs` MUST expose an `is-active` modifier. `u-segmented` MUST render a contained group; `u-tabs` MUST render an underline group with accent-colored active indicator.

#### Scenario: Active state is accent-bound
- **WHEN** a control is marked `is-active`
- **THEN** its visual indicator MUST use `var(--accent)`

### Requirement: Signals use a tone model

`u-badge` and `u-status` MUST support `accent`, `success`, `warning`, `error`, `muted` tones. Each tone MUST bind `color` to the matching token.

#### Scenario: Tone palette is reusable
- **WHEN** any consumer uses `tone-*` outside badges
- **THEN** the tone palette resolves to the same colors

### Requirement: Data components are designed for dense interfaces

`u-metric`, `u-data-row`, and `u-table` MUST be usable in dense data contexts (logs, metrics, signals). `u-metric` MUST use `--font-mono` for its value. `u-table` MUST use `--font-mono` for numeric cells.

#### Scenario: Dense data is readable
- **WHEN** a `u-metric` and a `u-table` render side by side
- **THEN** numeric values align on a monospace grid and the rhythm matches `--row-height`

### Requirement: Toast, Modal, EmptyState exist as primitives

`u-toast`, `u-modal`, `u-empty` MUST be defined as primitives (not patterns) so product code can compose them.

#### Scenario: Composability
- **WHEN** a product builds a feature
- **THEN** it MUST be able to compose these primitives without re-implementing their styles

### Requirement: IconButton is square and accessible by label

`u-icon-button` MUST be square (width = height = `--control-height`), use `--radius-sm`, and require an `aria-label`.

#### Scenario: Icon-only button is announced
- **WHEN** an `u-icon-button` renders
- **THEN** its accessible name MUST come from the `aria-label` prop