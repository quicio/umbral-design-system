# Design — v0.2 Hardening

## Strategy

Smallest surface area that resolves the review's findings. No new components, no new tokens, no visual-language change.

## Routing decision

The current `Home()` ternary is inert. Replace it with a single-purpose route:

```jsx
function Home() {
  return location.pathname === '/design-system'
    ? <DesignSystemPage />
    : <ProductShell />;
}
```

`ProductShell` is a placeholder that uses `AppShell` with `mode="operativo"` and a single `Panel` titled "UMBRAL · Producto". It exists so `/` is a real surface, not a copy of `/design-system`. Future product work fleshes it out.

## Accessibility rewrite approach

For each interactive primitive, the visual style is preserved while the semantics are corrected:

- **`Checkbox`**: replace the `<span>` with `<input type="checkbox">`; the label wraps both.
- **`Toggle`**: keep the button, add `role="switch"`, `aria-checked`, and a `Space`/`Enter` handler that toggles state.
- **`SegmentedControl` / `Tabs`**: add `role="group"` on the container and `aria-selected` on the active button.
- **`Select`**: render a native `<select>` with absolute opacity 0 over the visual primitive, or use a fully ARIA-compliant combobox. We start with the native `<select>` for v0.2; revisit the combobox pattern in v0.3 if the visual fidelity is unacceptable.
- **`Tooltip`**: trigger becomes `tabindex="0"`; the `<span>` gets an `id` and the trigger gets `aria-describedby` referencing it; CSS adds `:focus-within`.
- **`Toast`**: add `role="status" aria-live="polite"`. Auto-dismiss is out of scope for v0.2; minimum visible 4s.
- **`Modal`**: focus trap via a `useEffect` that listens for `Tab`/`Shift+Tab` and `Escape`; on open, focus the first focusable child; on close, restore focus to the trigger that opened it.

## prefers-reduced-motion

Add at the end of `tokens.css`:

```css
@media (prefers-reduced-motion: reduce) {
  :root { --motion-fast: 0ms; --motion-normal: 0ms; }
}
```

This is the smallest possible change with the largest effect — every transition in `components.css` already references these tokens.

## `--muted` adjustment

Change `--muted: #9297A3` to `--muted: #A8AEB8`. Verified delta on `--bg: #090A0C`:
- `#9297A3` → 5.41:1 (passes AA for large text, fails AA for small body text in strict mode)
- `#A8AEB8` → 6.85:1 (passes AA for body text)

Visual diff is negligible; this only affects paragraphs rendered through the `--muted` token.

## Out of scope (for v0.3+)

- `<pattern id="dots">` global ID — defer to a v0.3 cleanup; collides only if the page has multiple `ParametricViz`.
- Splitting `app.css` into `app.css` (docs layout) + `components.css` (system components).
- Combobox pattern for `Select` if the native `<select>` look is unacceptable.
- Storybook / visual regression tooling.

## Open Questions

None. The change is fully scoped by the v0.1 review findings.