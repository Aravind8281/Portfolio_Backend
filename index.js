const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const portfolioRoutes = require('./route');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mongo:mongo@av.vynrd2r.mongodb.net/que', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/portfolio', portfolioRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
