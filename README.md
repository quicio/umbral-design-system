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

Abre `/design-system` para ver la living style guide.

## Capas

- `src/design-system/tokens.css`: fuente única de verdad.
- `src/design-system/base.css`: reset, tipografía y fundamentos.
- `src/design-system/components.css`: componentes reutilizables y estados.
- `src/design-system/charts.css`: primitivas de visualización.
- `src/design-system/modes.css`: modos de expresión.
- `src/main.jsx`: documentación viva y ejemplos de componentes.

## Principio estético

Si dudas entre agregar algo o eliminarlo: elimínalo.
