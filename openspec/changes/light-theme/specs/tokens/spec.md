## MODIFIED Requirements

### Requirement: Color tokens are declared in `:root`

The system MUST declare all color tokens in `:root` with the following names: `--bg`, `--surface`, `--surface-raised`, `--line`, `--line-subtle`, `--text`, `--text-secondary`, `--muted`, `--success`, `--warning`, `--error`, `--accent`, `--accent-ink`.

#### Scenario: Default palette is dark
- **WHEN** a consumer renders the system without a theme class
- **THEN** all components resolve to the default dark palette declared in `:root`

#### Scenario: Foreground/background pairs meet contrast minimums
- **WHEN** any text token is composed against any surface token under either theme
- **THEN** the resulting pair MUST meet WCAG 2.1 AA (4.5:1 for body text, 3:1 for large text)

### Requirement: Themes are swappable via class on the root

The system MUST expose a `.theme-light` class that re-binds the neutral palette only: `--bg`, `--surface`, `--surface-raised`, `--line`, `--line-subtle`, `--text`, `--text-secondary`, `--muted`, `--success`, `--warning`, `--error`. The default (no class) is dark. Spacing, radii, fonts, motion, density, and accent packs are NOT theme-dependent.

#### Scenario: Theme class switches palette
- **WHEN** the root has class `theme-light`
- **THEN** neutrals resolve to the light palette and the visual rhythm (spacing, type, motion) is unchanged from the dark default

#### Scenario: Accent packs inherit theme calibration
- **WHEN** `theme-light` is active and `data-accent="caleta"` is set
- **THEN** `--accent` resolves to the light-tuned caleta value, not the dark one

### Requirement: Accent packs are swappable

Three accent packs MUST be available via `[data-accent="caleta|operativo|parametrico"]` or matching `.accent-*` classes, each redefining `--accent` and `--accent-ink` only. Each pack MUST have a default (dark) and a `.theme-light` variant; both MUST meet AA contrast against their respective backgrounds.

#### Scenario: Accent pack overrides accent without touching other tokens
- **WHEN** an element sets `data-accent="operativo"`
- **THEN** only `--accent` and `--accent-ink` are overridden; `--bg`, `--surface`, spacing, radii, fonts, and motion remain unchanged

#### Scenario: Light-tuned accents are legible on white
- **WHEN** `theme-light` is active and an accent pack is selected
- **THEN** the resulting `--accent` against `--bg` (light) MUST meet at least 4.5:1, and `--accent-ink` against `--accent` MUST meet at least 4.5:1