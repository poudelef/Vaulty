const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Correct MongoDB URI
const dbURI = 'mongodb+srv://Sambhav:test123@vaultycluster.kkcd1.mongodb.net/Vaulty?retryWrites=true&w=majority&appName=VaultyCluster';
mongoose.connect(dbURI)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err));

// Simple route
app.get('/', (req, res) => {
  res.json({ message: 'Backend connected successfully' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
