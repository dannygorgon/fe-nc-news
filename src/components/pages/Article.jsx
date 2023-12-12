import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import LoadSpinner from "../LoadSpinner";
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
    <div className="p-4">
      <img
        src={article.article_img_url}
        alt={`A picture of ${article.title}`}
      />
      <h1>{article.title}</h1>
      <p>Written by {article.author}</p>
      <p>
        Posted on
        {new Date(article.created_at).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p>{article.votes} votes</p>
      <p>{article.comment_count} comments</p>

      <div className="article-body">
        <p>
          Category: <a href="">coding</a>
        </p>
      </div>
      <p>{article.body}</p>
    </div>
  );
};

export default Article;
