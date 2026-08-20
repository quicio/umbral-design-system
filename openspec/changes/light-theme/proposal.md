## Why

UMBRAL is currently dark-only. This was a deliberate choice for v0.1 (high-contrast monospace-on-dark reads well for technical interfaces), but it locks out:

- Daytime/office usage where dark themes cause eye strain.
- Print/export contexts where light surfaces are expected.
- Any product whose identity is warm/calm and doesn't suit a dark default.

Without a light theme, "UMBRAL for a daylight product" means starting over — which is the exact problem the system is supposed to prevent.

This change introduces a light theme that preserves UMBRAL's character: same spacing scale, radii, type scale, motion tokens, accent *personalities* (caleta/operativo/paramétrico) — only the palette and accent calibrations change. The accent characters stay warm-yellow, hot-orange, and cool-purple — they're not rebranded into different hues.

## What Changes

- `src/design-system/tokens.css`: add a `.theme-light` class that re-binds `--bg`, `--surface`, `--surface-raised`, `--line`, `--line-subtle`, `--text`, `--text-secondary`, `--muted`, `--success`, `--warning`, `--error`. Add light-tuned variants of the three accent packs under `[data-accent="..."]` so they remain legible on light surfaces. The dark defaults stay untouched.
- `src/main.jsx`: add a `ThemeToggle` component (a button group with `aria-pressed`) and wire it into the design system page header so reviewers can flip between themes.
- `src/app.css`: minor — only what the toggle needs.
- `README.md`: document the new theme class and the light-tuned accents.
- `openspec/specs/tokens/spec.md`: add a requirement for theme classes and the contrast guarantee.
- `openspec/specs/documentation/spec.md`: add a requirement that the style guide demonstrates both themes.

## Capabilities

### New Capabilities

None. This is an extension of existing capabilities.

### Modified Capabilities

- `tokens`: add `Requirement: Themes are swappable via class on the root`, `Requirement: Accent packs have light-tuned variants`, and tighten the contrast scenario to cover both themes.
- `documentation`: add `Requirement: Theme is togglable from the style guide`.

## Impact

- Affected files: `src/design-system/tokens.css`, `src/main.jsx`, `src/app.css`, `README.md`, `openspec/specs/tokens/spec.md`, `openspec/specs/documentation/spec.md`.
- No new dependencies.
- No public API change. Consumers opt in by adding `.theme-light` on a root element.
- Risk: an existing component using `color-mix` with hardcoded dark assumptions could shift. Mitigation: every color reference goes through a token, so a `.theme-light` override is sufficient.