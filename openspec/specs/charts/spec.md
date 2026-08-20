## Purpose

Define the data-visualization primitives that are reusable across products without redesigning them per feature.

## Requirements

### Requirement: Line and sparkline use accent stroke

`u-chart` and `u-spark` MUST render their primary polyline with `stroke: var(--accent)`, `stroke-width: 1.6`, `vector-effect: non-scaling-stroke`, and `fill: none`.

#### Scenario: Scales predictably
- **WHEN** the SVG is resized by the parent container
- **THEN** stroke weight is preserved at 1.6px because of `non-scaling-stroke`

### Requirement: Grid lines use subtle token

Grid lines, axis lines, and tick marks MUST use `stroke: var(--line-subtle)`.

#### Scenario: Hierarchy between data and chrome
- **WHEN** a chart renders
- **THEN** grid lines are visually subordinate to the accent stroke

### Requirement: Bar chart uses a vertical accent gradient

`u-bars` MUST render bars with `linear-gradient(to top, var(--accent), color-mix(in srgb, var(--accent) 30%, transparent))` and `opacity: .86`.

#### Scenario: Consistent bar visual
- **WHEN** any product uses `u-bars`
- **THEN** bars share the same gradient and opacity regardless of count

### Requirement: Radial uses conic-gradient with explicit angle

`u-radial` MUST render a conic gradient with an angle exposed as the CSS custom property `--p` (default `244deg`), allowing per-instance control without re-styling.

#### Scenario: Per-instance override
- **WHEN** a consumer renders `<div class="u-radial" style={{'--p': '180deg'}}>`
- **THEN** the conic gradient uses 180deg without changing other styles

### Requirement: Parametric visualization is built from accent paths on a subtle dot grid

`u-parametric` MUST use a `<pattern>` of circles filled with `--line-subtle` as background and `stroke: var(--accent)` paths at 1.15px width.

#### Scenario: Pattern background is unobtrusive
- **WHEN** a parametric chart renders
- **THEN** the dot grid is visible but subordinate to the accent paths

### Requirement: Activity graph uses a 14-column grid

`u-activity` MUST use `grid-template-columns: repeat(14, 1fr)` with a 5px gap. Cells MUST be square via `aspect-ratio: 1`.

#### Scenario: Predictable grid
- **WHEN** any number of cells is rendered inside `u-activity`
- **THEN** they align to a 14-column grid with square cells