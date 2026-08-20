## Purpose

Establish the visual and behavioral primitives that sit between tokens and components. Primitives are global styles that any component MAY consume without re-declaring them.

## Requirements

### Requirement: Reset is minimal and global

`base.css` MUST include a minimal reset: `box-sizing: border-box`, body margin reset, and a consistent form-control font inheritance (`button, input, select, textarea { font: inherit }`).

#### Scenario: Inputs match surrounding typography
- **WHEN** a `<button>`, `<input>`, `<select>`, or `<textarea>` renders inside the system
- **THEN** its font matches the surrounding UI font unless `--font-mono` is required by the component

### Requirement: Three expression modes are global classes

Three mode classes MUST be globally available and re-bind `--accent`:
- `.mode-operativo` (operational density)
- `.mode-humano` (human density)
- `.mode-lab` (laboratory / parametric)

#### Scenario: Mode class cascades
- **WHEN** an element is nested inside an element with `mode-operativo`
- **THEN** that element resolves `--accent` to the operativo accent

### Requirement: Type scale is defined in base.css

Headings MUST be defined globally: `h1` (`clamp(48px, 9vw, 124px)`, line-height 0.82, weight 700), `h2` (`clamp(28px, 5vw, 64px)`, line-height 0.92, weight 650), `h3` (20px, line-height 1.08, letter-spacing -0.03em).

#### Scenario: Heading hierarchy
- **WHEN** any `h1`/`h2`/`h3` renders
- **THEN** it MUST inherit these dimensions without per-component overrides

### Requirement: Focus is always visible

`:focus-visible` MUST render a 1px outline in `var(--accent)` with 3px offset on every interactive surface.

#### Scenario: Keyboard focus
- **WHEN** any interactive element receives focus via keyboard
- **THEN** the accent outline is visible against the current background

### Requirement: Selection uses accent

`::selection` MUST use `color-mix(in srgb, var(--accent) 28%, transparent)` as background and `var(--text)` as foreground.

#### Scenario: Selected text is legible
- **WHEN** text is selected anywhere in the system
- **THEN** the selection is visible against any surface in the palette