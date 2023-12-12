import React, { useState, useEffect } from 'react';

import { getAllArticles } from './utils/api';
function ViewArticles() {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    getAllArticles()
      .then((articlesFromApi) => {
        console.log(articlesFromApi);
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

          <p>Date posted {new Date(article.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>          
          <p>Votes: {article.votes}</p>
          <p>{article.comment_count} comments</p>
          <a href="">coding</a>
        </div>
      ))}
    </div>
  );
}

export default ViewArticles;