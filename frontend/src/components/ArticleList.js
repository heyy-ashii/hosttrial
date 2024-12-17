import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/articles')
      .then(response => setArticles(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map(article => (
          <li key={article._id}>
            <Link to={`/articles/${article._id}`}>
              <h3>{article.title}</h3>
              <img src={`http://localhost:5000/uploads/${article.image}`} alt={article.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
