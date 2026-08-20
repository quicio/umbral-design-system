## MODIFIED Requirements

### Requirement: Three expression modes are global classes

Three mode classes MUST be globally available and re-bind `--accent`:
- `.mode-operativo` (operational density, accent `--accent: #FF6B47`)
- `.mode-humano` (human density, accent `--accent: #E7FF4F`)
- `.mode-lab` (laboratory / parametric, accent `--accent: #C7B6FF`)

The mode-to-accent mapping MUST be documented in the project README. A mode class MUST NOT re-declare a value equal to the default `:root --accent` (no redundant rules).

#### Scenario: Mode class cascades
- **WHEN** an element is nested inside an element with `mode-operativo`
- **THEN** that element resolves `--accent` to `#FF6B47`

#### Scenario: Documentation references the mapping
- **WHEN** a consumer reads the README
- **THEN** the table mapping `humano → caleta`, `operativo → operativo`, `lab → paramétrico` is present