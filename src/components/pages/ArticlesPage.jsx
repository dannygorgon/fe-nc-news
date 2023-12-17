import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const { topicSlug } = useParams();

  useEffect(() => {
    getArticlesByTopic(topicSlug)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error("Failed to fetch articles", error);
      });
  }, [topicSlug]);

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-t from-blue-500 to-neutral-300">
      {articles.map((article) => (
        <div
          className="flex flex-col justify-center items-center border border-black m-10 p-10 rounded-5 bg-gray-200"
          key={article.article_id}
        >
          <Link to={`/articles/${article.article_id}`}>
            <img
              src={article.article_img_url}
              alt={`A picture of ${article.title}`}
            />
            <h2>{article.title}</h2>
          </Link>
          <p>Written by {article.author}</p>
          <p>
            Posted on {"  "}
            {new Date(article.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p>{article.votes} votes</p>
          <p>{article.comment_count} comments</p>
          Category: <a href="">{topicSlug}</a>
        </div>
      ))}
    </div>
  );
};

export default ArticlesPage;