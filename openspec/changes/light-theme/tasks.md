## 1. Tokens — light palette

- [x] 1.1 Add `.theme-light { ... }` block at the end of `src/design-system/tokens.css` re-binding `--bg`, `--surface`, `--surface-raised`, `--line`, `--line-subtle`, `--text`, `--text-secondary`, `--muted`, `--success`, `--warning`, `--error`
- [x] 1.2 Add light-tuned accent variants under `.theme-light [data-accent="caleta|operativo|parametrico"]` and matching `.theme-light .accent-*` selectors
- [x] 1.3 Verify every text/surface pair in light mode passes WCAG AA with an automated check or manual contrast tool

## 2. Components and demo

- [x] 2.1 Add `ThemeToggle` component (stateful, two buttons with `aria-pressed`) to `src/main.jsx`
- [x] 2.2 Apply `.theme-light` class to `document.documentElement` via `useEffect` when `light` is selected
- [x] 2.3 Mount `ThemeToggle` in the design system header so the living guide demonstrates both themes
- [x] 2.4 Confirm all components render legibly in light mode (especially `u-bars` gradient, `.u-modal` overlay, `u-radial` conic gradient)

## 3. Specs

- [x] 3.1 Update `openspec/specs/tokens/spec.md` with `Requirement: Themes are swappable via class on the root` and `Requirement: Accent packs have light-tuned variants`
- [x] 3.2 Update `openspec/specs/documentation/spec.md` with `Requirement: Theme is togglable from the style guide`
- [x] 3.3 Run `openspec validate --all --strict` and resolve any issues

## 4. Documentation

- [x] 4.1 Add a "Themes" section to `README.md` explaining `.theme-light` and the light-tuned accents
- [x] 4.2 Update the "Modos y accent packs" table with light-mode accent values

## 5. Validation

- [x] 5.1 `npm run build` clean
- [ ] 5.2 Commit and push to `quicio/umbral-design-system`