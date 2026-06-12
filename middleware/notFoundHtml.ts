const NOT_FOUND_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Page not found | TMaaS</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        font-family: system-ui, -apple-system, sans-serif;
        background: #f8fafc;
        color: #1a2744;
      }
      main {
        text-align: center;
        padding: 2rem;
        max-width: 28rem;
      }
      h1 {
        margin: 0 0 0.75rem;
        font-size: 2rem;
      }
      p {
        margin: 0 0 1.5rem;
        line-height: 1.6;
        color: #64748b;
      }
      a {
        color: #e85d2c;
        font-weight: 600;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>404</h1>
      <p>The page you requested could not be found.</p>
      <a href="/">Return to TMaaS home</a>
    </main>
  </body>
</html>`;

export default NOT_FOUND_HTML;
