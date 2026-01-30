// server.js

// Load environment variables from .env file
require('dotenv').config();
const { connectToDatabase } = require('./mongodb/server.js');

// Now you can access process.env.PORT
const PORT = process.env.PORT || 8000; // Use the value from .env, or a fallback (e.g., 8000)

const express = require('express');
const app = express();

// ... your other server configurations ...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});