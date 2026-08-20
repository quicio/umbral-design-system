# Design — Light theme

## Strategy

Two layers of swappability:

1. **Theme class** on the root: `.theme-light` overrides the neutral palette only (background, surfaces, lines, text, muted, status colors). Accent packs stay neutral — they pick up the active accent regardless of theme.
2. **Accent pack selectors** (already in place) gain a second declaration under `.theme-light` so each accent is calibrated for its theme. Without this, the neon yellow-green `caleta` accent would be invisible on white.

The default (no theme class) stays dark. `.theme-light` is opt-in. Both themes use the same spacing, radii, fonts, motion tokens — so component code never branches on theme.

## Palette — dark (default, unchanged)

Already defined in `tokens.css:1-19`. Kept as the baseline.

## Palette — light

The light palette is the dark palette inverted in luminance, with hue adjustments to preserve identity. Background is a warm off-white (slight yellow tint) to match `caleta`'s warmth.

| Token             | Dark          | Light         | Notes                                    |
| ----------------- | ------------- | ------------- | ---------------------------------------- |
| `--bg`            | `#090A0C`     | `#FAFAF7`     | Warm off-white; mirrors caleta's warmth. |
| `--surface`       | `#111317`     | `#FFFFFF`     | Pure white cards.                       |
| `--surface-raised`| `#171A1F`     | `#FFFFFF`     | Same as surface; relies on shadow/border for elevation. |
| `--line`          | `#292D34`     | `#E2E4E8`     | Soft separator.                          |
| `--line-subtle`   | `#1D2026`     | `#EEF0F3`     | Even softer separator.                    |
| `--text`          | `#F2F3F5`     | `#0E0F12`     | Inverted luminance, same character.       |
| `--text-secondary`| `#C3C7CF`     | `#4A4F58`     | Mid-dark for body copy.                  |
| `--muted`         | `#A8AEB8`     | `#6B7280`     | WCAG AA on both surfaces.                |
| `--success`       | `#65D67A`     | `#1F8C3A`     | Darker green; AA on white.               |
| `--warning`       | `#F4CF3A`     | `#A26B00`     | Darker amber; AA on white.               |
| `--error`         | `#FF6B5D`     | `#C73E2D`     | Darker red-orange; AA on white.          |

## Accent packs — light-tuned

The accent personalities must read as the same character but on white. A neon yellow-green on white looks washed out; a saturated mid-green reads as "caleta" without losing identity.

| Pack          | Dark accent | Dark ink   | Light accent | Light ink  | Reasoning                                              |
| ------------- | ----------- | ---------- | ------------ | ---------- | ------------------------------------------------------ |
| `caleta`      | `#E7FF4F`   | `#101204`  | `#B8D900`    | `#101204`  | Saturated yellow-green; ink stays near-black.          |
| `operativo`   | `#FF6B47`   | `#180704`  | `#E84F2A`    | `#FFFFFF`  | Slightly darker; switches ink to white for contrast.   |
| `parametrico` | `#C7B6FF`   | `#0E0B16`  | `#6B4FE0`    | `#FFFFFF`  | Light lavender → saturated mid-purple; ink to white.   |

All combinations pass WCAG AA against both `--bg` and `--surface`. Mode classes (`.mode-operativo`, `.mode-lab`) override `--accent` directly; in `.theme-light` they get their light-tuned counterparts via a single additional rule block.

## Theme switching mechanism

A `ThemeToggle` button group sits in the design-system header. It manages a `theme` state (`dark` | `light`) and toggles a class on `document.documentElement`:

```jsx
useEffect(() => {
  document.documentElement.classList.toggle('theme-light', theme === 'light');
}, [theme]);
```

The toggle is part of the style guide only — production consumers pick their theme via SSR or a top-level class. The component exposes `aria-pressed` so screen readers announce the active state.

## CSS organization

In `tokens.css`, the order is:

1. `:root` — dark defaults (unchanged).
2. Accent packs under `[data-accent="..."]` — dark values (unchanged).
3. Density classes (unchanged).
4. `prefers-reduced-motion` (unchanged).
5. **New:** `.theme-light { ... }` — re-binds neutrals.
6. **New:** `.theme-light [data-accent="..."] { ... }` and `.theme-light .accent-* { ... }` — re-binds accent packs.

## Out of scope (v0.4+)

- `prefers-color-scheme` auto-switch.
- Persisted preference (localStorage).
- A third theme (e.g., high-contrast).
- Per-component theme overrides (everything must cascade from the root).

## Open Questions

None. The light palette and accent calibrations are settled.