# Andel

Web-based code editor component written in Clojure/ClojureScript (JetBrains). Work in progress.

## Quick Reference

| Task | Command |
|------|---------|
| Dev server (hot reload) | `lein figwheel` (port 3450, app at 3449) |
| Production build + run | `lein cljsbuild once min && lein run` (port 3000) |
| Run tests | `lein test` |
| REPL | nREPL on port 7002 during figwheel |

## Tech Stack

- **Language:** Clojure 1.9 / ClojureScript 1.9.908
- **Build:** Leiningen (min 2.5.0), Java 1.8
- **UI:** Reagent 0.7 (React 16 wrapper)
- **Styling:** Garden (CSS-in-Clojure)
- **Async:** core.async
- **Testing:** clojure.test + test.check (property-based)
- **Syntax highlighting:** Bundled CodeMirror modes

## Project Structure

```
src/cljc/andel/   -- Shared Clojure/ClojureScript code (core data structures)
  text.cljc         Rope-based text storage (B-tree, branching factor 32)
  tree.cljc         B-tree implementation
  fast_zip.cljc     Functional zipper for tree navigation
  controller.cljc   Editor commands and state transitions
  intervals.cljc    Interval tree for markers/highlighting
  utils.cljc        Coordinate conversion utilities

src/cljs/andel/   -- ClojureScript-only code (browser/UI)
  editor.cljs       Main React editor component
  core.cljs         Core editor API
  keybind.cljs      Keyboard handling
  lexer.cljs        Tokenization and syntax highlighting
  styles.cljs       Dynamic styling
  theme.cljs        Zenburn theme colors

app/cljs/andel/   -- Application entry point
  app.cljs          Init and demo app

tests/clj/andel/  -- Tests (property-based)
  text_test.clj     Text operations (insert, delete, retain)
  intervals_test.clj  Interval tree operations
```

## Architecture

- **Immutable state:** Single atom holds entire editor state; all updates via pure functions
- **Rope data structure:** B-tree with 64-char leaf blocks, branching factor 32; stores metrics (char count, line count) in nodes
- **Virtual scrolling:** CSS translate3d, no DOM reads (monospace fonts only)
- **Background lexing:** Throttled tokenization using CodeMirror modes
- **Coordinate systems:** offset, line/column, pixels -- conversion utilities in `utils.cljc`

## Code Conventions

- `.cljc` files for portable code (CLJ + CLJS), `.cljs` for browser-only
- Records for typed data (`Node`, `Leaf`, `Marker`, `ZipperLocation`)
- Pure functions; side effects only at edges (rendering, I/O)
- Reagent atoms for reactive UI state
