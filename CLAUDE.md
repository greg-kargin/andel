# Andel

Code editor component for web apps, built with ClojureScript and Clojure.

## Tech Stack

- **Language**: Clojure 1.9 / ClojureScript 1.9
- **UI**: React 16 via Reagent 0.7
- **Build**: Leiningen + lein-cljsbuild
- **Dev server**: Figwheel (port 3450, nREPL on 7002)
- **CSS**: Garden (CSS-in-ClojureScript)
- **Testing**: clojure.test + test.check (property-based/generative)

## Project Structure

- `src/cljc/andel/` — shared Clojure/ClojureScript code (data structures, controller, utils)
- `src/cljs/andel/` — ClojureScript-only code (editor UI, keybindings, lexer, styles)
- `app/cljs/andel/` — demo application entry point
- `tests/clj/andel/` — test suite (generative tests for text and intervals)
- `resources/public/` — static assets, HTML entry point, CodeMirror modes

## Common Commands

```sh
lein figwheel          # Start dev server with hot reload (localhost:3450)
lein test              # Run generative tests
lein cljsbuild once min  # Production build (advanced optimizations)
lein clean             # Remove compiled artifacts
```

## Architecture

- **Rope-like tree** (`tree.cljc`): balanced 32-way branching tree with 64-char leaves for text storage
- **Interval tree** (`intervals.cljc`): manages overlapping markup/markers
- **Custom zipper** (`fast_zip.cljc`): optimized tree traversal
- **Immutable state**: single atom holds all editor state; UI is a pure function of state
- **Async lexing**: syntax highlighting runs in background via core.async channels
- **Virtual scrolling**: only visible lines rendered; translate3d for smooth scroll

## Conventions

- kebab-case for namespaces and functions
- `.cljc` for platform-agnostic code, `.cljs` for browser-only code
- Platform-specific code uses reader conditionals: `#?(:clj ... :cljs ...)`
- Namespaces mirror directory structure (e.g., `andel.tree` → `src/cljc/andel/tree.cljc`)