import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllArticles } from './utils/api';
function ViewArticles() {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    getAllArticles()
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>View Articles</h1>
      {articles.map(article => (
    
        <div key={article.article_id}>
          <img src={article.article_img_url} alt={`A picture of ${article.title}`} />
          <h2>{article.title}</h2>
          <p>Written by {article.author}</p>
          <a href="">coding</a>
        </div>
      ))}
    </div>
  );
}

export default ViewArticles;