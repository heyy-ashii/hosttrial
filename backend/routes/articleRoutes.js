const express = require('express');
const Article = require('../models/articleModel');  // Assuming you have an Article model
const articleController =require('../controllers/articleController')
const upload = require('../utilities/multer');

const router = express.Router();

// Home route to display articles
router.get('/admin', async (req, res) => {
  try {
    res.render('createArticle');  // Render the index.ejs template with articles
  } catch (err) {
    res.status(500).json({ message: 'Error fetching articles' });
  }
});

// Route to handle article creation with image upload
router.post('/', upload.single('image'), articleController.createArticle);

// Route to fetch all articles
router.get('/', articleController.getArticles);

// Route to fetch a single article by ID
router.get('/:id', articleController.getArticle);
module.exports = router;