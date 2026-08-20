## Why

The v0.1 review surfaced concrete defects that undermine the system's promise of being a reusable, professional design system:

1. A real bug in `Home()` (the ternary returns the same component on both branches), making routing inert.
2. Accessibility gaps that violate the system's own implicit contract: a select that's not a `<select>`, toggles without `role="switch"`, tooltips unreachable by keyboard, modals without focus trap, toasts without `aria-live`, badges/statuses relying on color alone.
3. Missing `prefers-reduced-motion` support.
4. Unused imports (`Moon`, `X`) and redundant declarations (`.mode-humano` re-declaring the default `--accent`).
5. The mapping between `mode-*` classes and `accent-*` packs is not documented.
6. `--muted` (#9297A3) passes AA on `--bg` only at large text sizes; body text usage is borderline.

This change resolves these issues without altering the visual language or adding new components.

## What Changes

- `src/main.jsx`: remove unused `Moon`, `X` imports; resolve the `Home()` ternary into a real routing decision between a `<DesignSystemPage/>` (mounted at `/design-system`) and a distinct product shell at `/`.
- `src/design-system/modes.css`: remove the redundant `.mode-humano` rule (it re-declares the default `--accent`).
- `src/design-system/components.css`: add `prefers-reduced-motion` overrides via motion tokens; adjust `--muted` to a slightly lighter shade (`#A8AEB8`) to clear AA for body text; declare an explicit `transition` on `.u-panel` in its base state so the existing `:hover` border change animates predictably.
- `src/main.jsx` (interactive primitives): rewrite `Checkbox`, `Toggle`, `SegmentedControl`, `Tabs`, `Select`, `Tooltip`, `Toast`, `Modal` to satisfy the `accessibility` spec — add ARIA roles, keyboard handlers, and (for `Modal`) focus trap + `Escape` close.
- `openspec/specs/primitives/spec.md`: add a requirement that mode-to-accent mapping is documented.
- `README.md`: document the mode ↔ accent pack mapping (`humano → caleta`, `operativo → operativo`, `lab → paramétrico`).

## Capabilities

### New Capabilities

None. This is a hardening change that closes gaps in existing specs.

### Modified Capabilities

- `accessibility`: requirements on interactive primitives become enforceable; new requirement `Reduced motion is honored` moves from proposal to spec.
- `primitives`: new requirement `Mode-to-accent mapping is documented`.
- `documentation`: clarify that `/` MUST mount a product surface distinct from `/design-system`.

## Impact

- Affected files: `src/main.jsx`, `src/design-system/modes.css`, `src/design-system/components.css`, `src/design-system/base.css`, `README.md`, `openspec/specs/primitives/spec.md`, `openspec/specs/accessibility/spec.md`, `openspec/specs/documentation/spec.md`.
- No new dependencies.
- No public API changes for consumers; the visual language is preserved.
- Risk: the `Modal` rewrite introduces a real focus trap; verify with keyboard in the style guide.