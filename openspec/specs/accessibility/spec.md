## Purpose

Codify the accessibility guarantees the design system promises to consumers. Every component MUST meet these guarantees; deviations are explicit and documented per-component.

## Requirements

### Requirement: Color is never the sole signal

Status, badge, and tone-based components MUST pair color with at least one of: text label, icon, or pattern.

#### Scenario: Status without color
- **WHEN** a user views a `u-status` element
- **THEN** they can distinguish `OK`, `WARN`, and `ERROR` without relying on color alone

### Requirement: Interactive surfaces support keyboard

Buttons, toggles, segmented controls, tabs, checkboxes, and any other interactive element MUST be reachable and operable via `Tab`, `Shift+Tab`, `Enter`, and `Space`.

#### Scenario: Keyboard reachability
- **WHEN** a user tabs through any view that uses design-system components
- **THEN** every interactive element receives focus in DOM order

### Requirement: Form controls expose semantic roles

`u-check` MUST expose `role="checkbox"` with `aria-checked`. `u-toggle` MUST expose `role="switch"` with `aria-checked`. `u-segmented` and `u-tabs` MUST expose `aria-selected` on the active item.

#### Scenario: Screen reader announces state
- **WHEN** a screen reader focuses a `u-toggle` in the off state
- **THEN** it announces "switch, off" (or equivalent localized string)

### Requirement: Tooltips are keyboard-accessible

`u-tooltip` MUST reveal its content on both `:hover` and `:focus-within`, and MUST link the trigger to the tooltip via `aria-describedby`.

#### Scenario: Tooltip without a pointer
- **WHEN** a user tabs to a tooltip trigger
- **THEN** the tooltip text becomes visible and is announced

### Requirement: Toasts are announced

`u-toast` MUST use `role="status"` and `aria-live="polite"` so assistive technologies announce it without stealing focus.

#### Scenario: Non-intrusive announcement
- **WHEN** a toast appears
- **THEN** it does not move focus, but it is announced by screen readers

### Requirement: Modals trap focus

`u-modal` MUST trap focus within itself, close on `Escape`, and expose `role="dialog"` and `aria-modal="true"`.

#### Scenario: Modal focus management
- **WHEN** a modal is open
- **THEN** `Tab` cycles within its focusable elements and `Escape` dismisses it

### Requirement: Reduced motion is honored

The system MUST define `@media (prefers-reduced-motion: reduce)` overrides that zero out motion tokens while preserving state changes.

#### Scenario: User prefers reduced motion
- **WHEN** the OS-level setting `prefers-reduced-motion: reduce` is active
- **THEN** no transitions or animations run; state changes still apply instantly

### Requirement: Contrast meets WCAG 2.1 AA

Every text-on-surface pair reachable through the default palette MUST meet a 4.5:1 ratio for body text and 3:1 for large text (≥18px or ≥14px bold).

#### Scenario: Default palette audit
- **WHEN** a consumer audits the default palette with a contrast tool
- **THEN** every default text token meets the AA threshold against every default surface token it is allowed to appear on