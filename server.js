/**
 * Simple Express server for Notion Clone website
 * 
 * This server serves static files from the current directory
 * and provides a simple way to view the website locally.
 */

const express = require('express');
const path = require('path');
const app = express();
const port = 3001; // Changed port from 3000 to 3001

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Handle all routes by serving the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Notion Clone server running at http://localhost:${port}`);
});