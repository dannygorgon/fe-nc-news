import React, { useState, useEffect } from 'react';
import LoadSpinner from './LoadSpinner';
import { Link } from 'react-router-dom';

import { getAllArticles } from './utils/api';
function ViewArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getAllArticles()
      .then((articlesFromApi) => {

        setArticles(articlesFromApi);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading)
  return <LoadSpinner/>;
  return (
    <div className='article-list-container'>
 
        <h1>View Articles</h1>
        {articles.map(article => (
        
          <div className="article-card" key={article.article_id}>
                <Link to={`/api/articles/${article.article_id}`}>
            <img src={article.article_img_url} alt={`A picture of ${article.title}`} />
            <h2>
    
          {article.title}

      </h2>
      </Link>
            <p>Written by {article.author}</p>
            <p>Posted on {new Date(article.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p>{article.votes} votes</p>
            <p>{article.comment_count} comments</p>
            Category: <a href="">coding</a>
          </div>
        ))}
   
    </div>
  );
}

export default ViewArticles;