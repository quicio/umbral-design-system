## 1. Routing

- [x] 1.1 Replace `Home()` body with a redirect: any non-`/design-system` path calls `location.replace('/design-system')` and returns `null`
- [x] 1.2 Remove the unused `ProductShell` component

## 2. Tokens display

- [x] 2.1 Change `.token i` border from `var(--line-subtle)` to `var(--line)` so the `--bg` swatch is visible on light backgrounds

## 3. Specs

- [x] 3.1 Update `openspec/specs/documentation/spec.md` to reflect the relaxed routing requirement
- [x] 3.2 Run `openspec validate --all --strict` and resolve any issues

## 4. Validation

- [x] 4.1 `npm run build` clean
- [ ] 4.2 Commit and push to `quicio/umbral-design-system`