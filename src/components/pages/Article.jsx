import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import LoadSpinner from "../LoadSpinner";
import Comments from "../Comments";
const Article = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticleById(articleId)
    .then((articleFromApi) => {
        setArticle(articleFromApi);
        setIsLoading(false)
      })
      .catch((err) => console.error(err));
  }, [articleId]);

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
      <p>{article.votes} votes</p>
      <p>{article.comment_count} comments</p>
      </div>

      <div className="article-body">
      </div>
      <p>{article.body}</p>
      <Comments /> 
    </div>
  
  );
};

export default Article;
