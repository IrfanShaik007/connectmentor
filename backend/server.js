// server.js (or your backend server file)
const express = require('express');
const app = express();
app.use(express.json());

// Example mentor data
const mentors = [
  { id: 1, name: 'John Doe', expertise: 'Software Development' },
  { id: 2, name: 'Jane Smith', expertise: 'Data Science' },
  // Add more mentors as needed
];

app.get('/api/mentors', (req, res) => {
  res.json({ mentors });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
