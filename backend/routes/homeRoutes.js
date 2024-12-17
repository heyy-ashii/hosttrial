const express = require('express');
const Article = require('../models/articleModel');  // Assuming you have an Article model

const router = express.Router();

// Home route to display articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();  // Get all articles
    res.render('index', { articles });  // Render the index.ejs template with articles
  } catch (err) {
    res.status(500).json({ message: 'Error fetching articles' });
  }
});

module.exports = router;
