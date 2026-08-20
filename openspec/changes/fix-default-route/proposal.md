## Why

`npm run dev` lands on `/` by default (Vite's default route). Before this change, `/` mounted `<ProductShell/>` — a placeholder with a single Panel ("UMBRAL · Producto") and no components. Users who didn't know to navigate to `/design-system` saw an empty surface and assumed the design system was broken.

There is no real product yet, so the placeholder was actively misleading.

## What Changes

- `src/main.jsx`: `Home()` now redirects any non-`/design-system` path to `/design-system` via `location.replace` and returns `null` during the redirect.
- `src/main.jsx`: remove the unused `ProductShell` component.
- `src/app.css`: change `.token i` border from `var(--line-subtle)` to `var(--line)` so the `--bg` swatch is visible against light backgrounds.
- `openspec/specs/documentation/spec.md`: relax the requirement that `/` MUST mount a distinct product surface — instead, `/` MUST resolve to the design system until a real product exists.

## Capabilities

### Modified Capabilities

- `documentation`: relax routing requirement; `/` resolves to `/design-system` by default.

## Impact

- Affected files: `src/main.jsx`, `src/app.css`, `openspec/specs/documentation/spec.md`.
- No new dependencies.
- Consumers embedding UMBRAL still own their own routing; this change is specific to the in-repo living style guide.