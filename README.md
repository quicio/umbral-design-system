# UMBRAL Design System

UMBRAL es un lenguaje visual reusable para construir múltiples productos sin rediseñar la identidad en cada aplicación.

## Arquitectura

```txt
tokens → primitives → components → patterns → product
```

Los productos consumen el sistema definiendo solamente:

- accent pack
- modo de expresión: `operativo`, `humano`, `lab`
- densidad: `compact`, `comfortable`
- contenido propio
- ilustraciones o visualizaciones propias

## Ejecutar

```bash
npm install
npm run dev
```

Abre `/design-system` para ver la living style guide, o `/` para la superficie de producto placeholder.

## Capas

- `src/design-system/tokens.css`: fuente única de verdad.
- `src/design-system/base.css`: reset, tipografía y fundamentos.
- `src/design-system/components.css`: componentes reutilizables y estados.
- `src/design-system/charts.css`: primitivas de visualización.
- `src/design-system/modes.css`: modos de expresión.
- `src/main.jsx`: documentación viva y ejemplos de componentes.

## Modos y accent packs

Cada modo reasigna `--accent` a uno de los accent packs. La elección de modo + accent pack debe ser deliberada por producto.

| Modo        | Accent pack    | Uso                                       |
| ----------- | -------------- | ----------------------------------------- |
| `humano`    | `caleta`       | Tareas, notas, narrativa, vida cotidiana. |
| `operativo` | `operativo`    | Métricas, logs, tablas, decisiones.       |
| `lab`       | `parametrico`  | Retículas, coordenadas, datos técnicos.   |

Los accent packs también pueden usarse directamente vía `[data-accent="caleta|operativo|parametrico"]` sin cambiar de modo.

## Accesibilidad

El sistema cumple los requisitos definidos en `openspec/specs/accessibility/spec.md`:

- WCAG 2.1 AA en la paleta por defecto.
- Roles ARIA correctos en `u-check`, `u-toggle`, `u-segmented`, `u-tabs`, `u-select`, `u-tooltip`, `u-toast`, `u-modal`.
- Foco visible con outline accent en todos los elementos interactivos.
- `prefers-reduced-motion` desactiva transiciones sin afectar cambios de estado.
- Modales con focus trap, cierre en `Escape` y restauración de foco al disparador.

## Specs y cambios

Las capacidades del sistema y los cambios en curso viven en `openspec/`:

- `openspec/specs/` — capacidades (estado actual).
- `openspec/changes/` — propuestas de cambio activas.

```bash
openspec list                 # ver capacidades y cambios
openspec validate --all --strict
openspec change <nombre>      # inspeccionar un cambio
openspec archive <nombre>     # promover deltas a specs principales
```

## Principio estético

Si dudas entre agregar algo o eliminarlo: elimínalo.