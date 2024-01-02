import React, { useState, useEffect } from "react";
import LoadSpinner from "./LoadSpinner";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getAllArticles } from "./utils/api";

function ViewArticles() {
  const { articleId } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles(articleId)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading) return <LoadSpinner />;
  return (
    <div className="">

<div className="flex flex-col items-center justify-center bg-slate-300 p-10 rounded-lg m-5 w-auto max-w-7xl mx-auto">
        {articles.map((article) => (
          <div
          className="flex flex-col justify-center items-center border rounded-lg  m-5 p-10 rounded-5 bg-gray-200"
            key={article.article_id}
          >
            <Link to={`/articles/${article.article_id}`} className="text-center">
              <img
                src={article.article_img_url}
                alt={`A picture of ${article.title}`}
                className="w-full"
              />
              <h2 className=" text-center  font-extrabold text-2xl ">{article.title}</h2>
            </Link>
            <div className="text-xl ">
              <p className="">Written by {article.author}</p>
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
              Category: <a href="">coding</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewArticles;
