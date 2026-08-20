## 1. Cleanup dead code and bug fixes

- [ ] 1.1 Remove unused `Moon` and `X` imports from `src/main.jsx`
- [ ] 1.2 Resolve the `Home()` ternary into a real routing decision: `/design-system` → `<DesignSystemPage/>`, `/` → a new `<ProductShell/>` placeholder
- [ ] 1.3 Remove the redundant `.mode-humano { --accent: #E7FF4F }` rule from `src/design-system/modes.css`

## 2. Tokens and primitives

- [ ] 2.1 Adjust `--muted` from `#9297A3` to `#A8AEB8` in `src/design-system/tokens.css` to clear WCAG AA for body text on `--bg`
- [ ] 2.2 Add `@media (prefers-reduced-motion: reduce)` block at the end of `src/design-system/tokens.css` that zeros out motion tokens
- [ ] 2.3 Add explicit `transition: border-color var(--motion-normal)` to `.u-panel` base rule in `src/design-system/components.css`

## 3. Accessibility — interactive primitives

- [ ] 3.1 Rewrite `Checkbox` to render an `<input type="checkbox">` with associated `<label>`, removing the fake span
- [ ] 3.2 Rewrite `Toggle` to use `role="switch"` and `aria-checked`; keyboard handler for `Space`
- [ ] 3.3 Rewrite `SegmentedControl` and `Tabs` to expose `aria-selected` on active button
- [ ] 3.4 Rewrite `Select` to use a real `<select>` element wrapped in the visual primitive
- [ ] 3.5 Update `Tooltip` to also reveal on `:focus-within` and link via `aria-describedby`
- [ ] 3.6 Add `role="status"` and `aria-live="polite"` to `Toast`
- [ ] 3.7 Add focus trap, `Escape` handler, `role="dialog"`, `aria-modal="true"`, and focus restoration on close for `Modal`

## 4. Documentation

- [ ] 4.1 Add a mode-to-accent mapping table to `README.md` (`humano → caleta`, `operativo → operativo`, `lab → paramétrico`)
- [ ] 4.2 Add a short accessibility statement to `README.md` referencing the `accessibility` spec

## 5. Validation

- [ ] 5.1 Run `openspec validate v0-2-hardening --strict` and resolve any reported issues
- [ ] 5.2 Run `npm run build` to confirm no regressions
- [ ] 5.3 Manual keyboard sweep of the style guide: tab through every interactive component in the Components and Data sections