const http = require('http');
const port = 3000;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anděl — High-Performance Code Editor</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #0f1117;
      color: #c9d1d9;
      line-height: 1.6;
    }
    header {
      background: linear-gradient(135deg, #161b22, #1a1e2e);
      border-bottom: 1px solid #30363d;
      padding: 3rem 2rem;
      text-align: center;
    }
    header h1 {
      font-size: 2.8rem;
      color: #e6edf3;
      margin-bottom: 0.5rem;
      letter-spacing: -0.5px;
    }
    header p {
      font-size: 1.2rem;
      color: #8b949e;
      max-width: 600px;
      margin: 0 auto;
    }
    .badge {
      display: inline-block;
      background: #238636;
      color: #fff;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.8rem;
      margin-top: 1rem;
    }
    main { max-width: 900px; margin: 0 auto; padding: 2rem; }
    section { margin-bottom: 2.5rem; }
    h2 {
      font-size: 1.5rem;
      color: #e6edf3;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #21262d;
    }
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
    .tech-stack span {
      background: #21262d;
      border: 1px solid #30363d;
      padding: 0.3rem 0.8rem;
      border-radius: 0.5rem;
      font-size: 0.9rem;
      color: #79c0ff;
    }
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.2rem;
    }
    .feature-card {
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 0.75rem;
      padding: 1.25rem;
    }
    .feature-card h3 {
      color: #e6edf3;
      font-size: 1.05rem;
      margin-bottom: 0.5rem;
    }
    .feature-card p { font-size: 0.9rem; color: #8b949e; }
    .arch-detail { margin-bottom: 1rem; }
    .arch-detail h3 { color: #79c0ff; margin-bottom: 0.3rem; }
    .arch-detail p { font-size: 0.9rem; }
    code {
      background: #21262d;
      padding: 0.15rem 0.4rem;
      border-radius: 0.25rem;
      font-size: 0.85rem;
      color: #f0883e;
    }
    footer {
      text-align: center;
      padding: 2rem;
      color: #484f58;
      font-size: 0.85rem;
      border-top: 1px solid #21262d;
    }
  </style>
</head>
<body>
  <header>
    <h1>Anděl</h1>
    <p>A high-performance, universal code editor component designed for embedding in web applications</p>
    <span class="badge">Work in Progress</span>
  </header>
  <main>
    <section>
      <h2>About</h2>
      <p>
        Anděl is a code editor built from the ground up for speed and scalability.
        It uses a purely functional, immutable architecture written in ClojureScript,
        rendering through React via Reagent. The editor is designed to handle documents
        of unlimited size with smooth virtual scrolling and background syntax highlighting.
      </p>
    </section>

    <section>
      <h2>Tech Stack</h2>
      <div class="tech-stack">
        <span>ClojureScript</span>
        <span>Reagent / React</span>
        <span>Leiningen</span>
        <span>Figwheel</span>
        <span>core.async</span>
        <span>Garden CSS</span>
        <span>CodeMirror Modes</span>
      </div>
    </section>

    <section>
      <h2>Key Features</h2>
      <div class="features">
        <div class="feature-card">
          <h3>Rope-like Tree Structure</h3>
          <p>Document text is stored in a 32-way branching tree with 64-character leaf nodes, enabling efficient edits and metric lookups on large files.</p>
        </div>
        <div class="feature-card">
          <h3>Virtual Scrolling</h3>
          <p>Uses <code>translate3d</code> transforms and a custom wheel handler for buttery-smooth scrolling with no layout thrashing.</p>
        </div>
        <div class="feature-card">
          <h3>Background Lexing</h3>
          <p>Syntax highlighting runs asynchronously via <code>core.async</code>, keeping the UI responsive even on large files.</p>
        </div>
        <div class="feature-card">
          <h3>Zero DOM Reads</h3>
          <p>All measurements are done upfront (monospaced fonts only). The editor never reads from the DOM during operation.</p>
        </div>
        <div class="feature-card">
          <h3>Immutable State</h3>
          <p>Purely functional design with a single mutable atom holding the entire immutable editor state.</p>
        </div>
        <div class="feature-card">
          <h3>Extensible Markup</h3>
          <p>Interval-based marker system for annotations, highlights, and decorations layered on top of the document.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>Architecture</h2>
      <div class="arch-detail">
        <h3>Data Model</h3>
        <p>The core text buffer is a balanced tree (similar to a B-tree / rope) that maintains character counts and line break metrics at every node, allowing O(log n) positional lookups.</p>
      </div>
      <div class="arch-detail">
        <h3>Rendering Pipeline</h3>
        <p>Lines are rendered as real DOM elements (not through React's virtual DOM) for maximum performance. Only visible lines are in the DOM at any time.</p>
      </div>
      <div class="arch-detail">
        <h3>Syntax Highlighting</h3>
        <p>Standalone CodeMirror language modes are reused for tokenization. Tokens are stored per-line and updated incrementally in the background.</p>
      </div>
    </section>

    <section>
      <h2>Getting Started</h2>
      <p>Clone the repo and start the Figwheel dev server:</p>
      <p style="margin-top:0.75rem">
        <code>lein figwheel</code> &mdash; starts the dev server on port <strong>3450</strong> with live reloading.
      </p>
    </section>
  </main>
  <footer>
    Anděl &mdash; A code editor that scales.
  </footer>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(port, () => {
  console.log('Server running at http://localhost:' + port);
});
