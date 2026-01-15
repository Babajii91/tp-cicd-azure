const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Accueil</title></head>
      <body>
        <h1>Bienvenue</h1>
        <p>Esprit Shonen</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
