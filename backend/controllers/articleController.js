// controllers/articleController.js

const Article = require('../models/articleModel');

const createArticle = async (req, res) => {
  try {
    const article = new Article({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
      image: req.file.filename
    });
    await article.save();
    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ message: 'Error creating article' });
  }
};


const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching articles' });
  }
};

const getArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      res.status(404).json({ message: 'Article not found' });
    } else {
      res.json(article);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching article' });
  }
};

module.exports = { createArticle, getArticles, getArticle};
