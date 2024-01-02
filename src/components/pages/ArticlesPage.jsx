import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null); 
  const { topicSlug } = useParams();

  useEffect(() => {
    getArticlesByTopic(topicSlug)
      .then((data) => {
        if (data && data.articles) {
          setArticles(data.articles);
          setError(null); 
        } else {
          setError('No articles found for this topic');
        }
      })
      .catch((error) => {
        setError('Failed to fetch articles'); 
      });
  }, [topicSlug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center  bg-slate-300">
      {articles.map((article) => (
        <div
          className="flex flex-col justify-center items-center border border-black m-5 p-10 rounded-5 bg-gray-200"
          key={article.article_id}
        >
          <Link to={`/articles/${article.article_id}`}>
            <img
              src={article.article_img_url}
              alt={`A picture of ${article.title}`}
            />
            <h2 className="text-center font-extrabold text-2xl ">{article.title}</h2>
          </Link>
             <div className="text-xl ">
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
        </div>
      ))}
    </div>
  );
};

export default ArticlesPage;