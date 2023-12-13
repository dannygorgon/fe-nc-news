import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { getArticleById, patchArticleVotes } from "../utils/api";
import LoadSpinner from "../LoadSpinner";
import Comments from "../Comments";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
const Article = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(articleId)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setVotes(articleFromApi.votes);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [articleId]);

const handleIncrementVote = (increment) => {
  setVotes((previousVote) => previousVote + increment);
  patchArticleVotes(articleId, increment)
    .then(() => {
      setError(null);
    })
    .catch((err) => {
      setError('Failed to update votes');
      setVotes((previousVote) => previousVote - increment);
    });
};

  if (isLoading) {
    return <LoadSpinner />;
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="article-container p-4 m-4 bg-gradient-to-t from-blue-500 to-neutral-300">
      <img
        src={article.article_img_url}
        alt={`A picture of ${article.title}`}
      />
      <h1 className="text-3xl font-bold text-center">{article.title}</h1>
      <div className="detail-text flex justify-around">
          <p>Written by {article.author}</p>
          <p>
            Posted on
            {new Date(article.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        <p>
          Category: <a href="">coding</a>
        </p>
      <p>{votes} votes</p>
      {error && <p>{error}</p>}
      <button onClick={() => handleIncrementVote(1)}> 
      <ThumbUpAltIcon />
 </button>
      <p>{article.comment_count} comments</p>
 

      </div>

      <div className="article-body">
      </div>
      <p>{article.body}</p>
      <Comments articleId={articleId} />
    </div>
  
  );
};

export default Article;