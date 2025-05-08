import express from 'express';
import { join } from 'path';

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files
app.use(express.static(join(__dirname, 'dist')));

// Handle SPA routing - send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});