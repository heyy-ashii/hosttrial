import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/articles/${id}`);
      setArticles(response.data);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setError('An unexpected server error occurred. Please try again later.');
      } else {
        setError('Failed to fetch articles.');
      }
    }
  };
  

  useEffect(() => {
    axios.get(`http://localhost:5000/api/articles/${id}`)
      .then(response => setArticle(response.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!article) return <div>Loading...</div>; 

  return (
    <div>
      <h3>{article.title}</h3>
      <img src={`http://localhost:5000/uploads/${article.image}`} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
}


export default ArticleDetail;
