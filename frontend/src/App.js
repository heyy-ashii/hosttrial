import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import CreateArticle from './components/CreateArticle';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/articles/create" element={<CreateArticle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
