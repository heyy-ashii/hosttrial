// models/articleModel.js

const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  image: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
