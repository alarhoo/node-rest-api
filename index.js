const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Routes
app.get('/', (_req, res) => {
  res.send('Home');
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}`;
mongoose.connect(uri, () => {
  console.log(`Connected to mongoose`);
});

const PORT = 3000;
app.listen(PORT);
