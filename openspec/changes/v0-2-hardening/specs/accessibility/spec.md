## MODIFIED Requirements

### Requirement: Form controls expose semantic roles

`u-check` MUST expose `role="checkbox"` with `aria-checked`. `u-toggle` MUST expose `role="switch"` with `aria-checked`. `u-segmented` and `u-tabs` MUST expose `aria-selected` on the active item. `u-select` MUST be built on a real `<select>` element (or an ARIA `combobox` pattern with full keyboard support) so it is operable by keyboard and announced by screen readers.

#### Scenario: Screen reader announces state
- **WHEN** a screen reader focuses a `u-toggle` in the off state
- **THEN** it announces "switch, off" (or equivalent localized string)

#### Scenario: Select is keyboard-operable
- **WHEN** a user opens a `u-select` with the keyboard
- **THEN** they can navigate options with arrow keys and confirm with Enter or Space

### Requirement: Tooltips are keyboard-accessible

`u-tooltip` MUST reveal its content on both `:hover` and `:focus-within`, and MUST link the trigger to the tooltip via `aria-describedby`. The trigger MUST itself be focusable.

#### Scenario: Tooltip without a pointer
- **WHEN** a user tabs to a tooltip trigger
- **THEN** the tooltip text becomes visible and is announced

### Requirement: Toasts are announced

`u-toast` MUST use `role="status"` and `aria-live="polite"` so assistive technologies announce it without stealing focus. The toast MUST NOT auto-dismiss in a way that hides the announcement before screen readers catch it (minimum visible duration of 4s).

#### Scenario: Non-intrusive announcement
- **WHEN** a toast appears
- **THEN** it does not move focus, but it is announced by screen readers

### Requirement: Modals trap focus

`u-modal` MUST trap focus within itself, close on `Escape`, restore focus to the trigger on close, and expose `role="dialog"` and `aria-modal="true"`.

#### Scenario: Modal focus management
- **WHEN** a modal is open
- **THEN** `Tab` cycles within its focusable elements, `Shift+Tab` cycles in reverse, and `Escape` dismisses it; focus returns to the element that opened it

### Requirement: Reduced motion is honored

The system MUST define `@media (prefers-reduced-motion: reduce)` overrides that zero out motion tokens (`--motion-fast: 0ms`, `--motion-normal: 0ms`) while preserving state changes. The override MUST NOT disable transitions for critical accessibility cues such as focus-visible outlines.

#### Scenario: User prefers reduced motion
- **WHEN** the OS-level setting `prefers-reduced-motion: reduce` is active
- **THEN** no transitions or animations run for state changes; the focus outline remains visible