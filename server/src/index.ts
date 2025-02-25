import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from React's production build
app.use(express.static(path.join(__dirname, '../client')));

// Endpoint to serve environment variables
app.get('/env', (req, res) => {
  res.json({
    BUILD_NUMBER: process.env.BUILD_NUMBER,
    GIT_COMMIT: process.env.GIT_COMMIT,
    BUILD_DATE: process.env.BUILD_DATE
  });
});

// Example API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Example API route
app.get('/service/gastro-app/authenticate', (req, res) => {
  res.json({ message: 'Hello from Authentication!' });
});

// Catch-all route to serve React's index.html for SPA routing support
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
