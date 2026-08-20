## Purpose

Define the single source of truth for visual and structural values used by every layer above the token layer. Tokens are pure CSS custom properties declared in `src/design-system/tokens.css`; they MUST NOT embed behavior or component logic.

## Requirements

### Requirement: Color tokens are declared in `:root`

The system MUST declare all color tokens in `:root` with the following names: `--bg`, `--surface`, `--surface-raised`, `--line`, `--line-subtle`, `--text`, `--text-secondary`, `--muted`, `--success`, `--warning`, `--error`, `--accent`, `--accent-ink`.

#### Scenario: Default palette is dark
- **WHEN** a consumer renders the system without overrides
- **THEN** all components resolve to the default dark palette declared in `:root`

#### Scenario: Foreground/background pairs meet contrast minimums
- **WHEN** any text token is composed against any surface token
- **THEN** the resulting pair MUST meet WCAG 2.1 AA (4.5:1 for body text, 3:1 for large text)

### Requirement: Spacing scale uses a discrete 4-pt ladder

Spacing MUST be exposed as `--space-1`, `--space-2`, `--space-3`, `--space-4`, `--space-6`, `--space-8`, `--space-12` with values 4, 8, 12, 16, 24, 32, 48 px respectively.

#### Scenario: Components reference spacing via tokens
- **WHEN** any component or layout needs a gap, padding, or margin
- **THEN** it MUST reference a `--space-*` token; raw px values MUST NOT appear in `components.css`, `charts.css`, or `modes.css`

### Requirement: Radius scale is limited to three sizes

Three radii MUST exist: `--radius-sm` (8px), `--radius-md` (12px), `--radius-lg` (16px). Pill shapes MAY use `999px` only on inline elements such as badges and toggles.

#### Scenario: No ad-hoc radii
- **WHEN** a new shape is added
- **THEN** it MUST pick one of the three radii or, for pill-shaped controls, `999px`

### Requirement: Typography families are split by intent

Two font stacks MUST exist: `--font-ui` for interface text and `--font-mono` for data, parameters, and metadata.

#### Scenario: Mono is reserved for non-prose
- **WHEN** a component renders tabular data, timestamps, code, or parameter values
- **THEN** it MUST use `--font-mono`

### Requirement: Motion tokens are reused everywhere

All transitions MUST reference `--motion-fast` (120ms) or `--motion-normal` (180ms), both with `cubic-bezier(.2,.8,.2,1)`.

#### Scenario: No raw durations
- **WHEN** a CSS rule defines `transition` or `animation`
- **THEN** the duration MUST come from a motion token; raw ms MUST NOT appear

### Requirement: Density tokens control vertical rhythm

Two density modes MUST exist via `--row-height` and `--control-height` plus `--panel-pad`:
- `compact`: row 34px, control 34px, panel 16px
- `comfortable` (default): row 44px, control 40px, panel 24px

#### Scenario: Density class overrides defaults
- **WHEN** the root has class `density-compact`
- **THEN** rows, controls, and panels resolve to the compact dimensions

### Requirement: Accent packs are swappable

Three accent packs MUST be available via `[data-accent="caleta|operativo|parametrico"]` or matching `.accent-*` classes, each redefining `--accent` and `--accent-ink` only.

#### Scenario: Accent pack overrides accent without touching other tokens
- **WHEN** an element sets `data-accent="operativo"`
- **THEN** only `--accent` and `--accent-ink` are overridden; `--bg`, `--surface`, spacing, radii, fonts, and motion remain unchanged