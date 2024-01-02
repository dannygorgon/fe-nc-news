import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getArticleById, patchArticleVotes } from "../utils/api";
import LoadSpinner from "../LoadSpinner";
import Comments from "../Comments";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Article = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    getArticleById(articleId)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setVotes(articleFromApi.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Article not found');
        setIsLoading(false);
      });
  }, [articleId]);

  if (error) {
    return <p>{error}</p>;
  }

  const handleIncrementVote = (increment) => {
    if (hasVoted) {
      setError("You have already voted");
      return;
    }
    setVotes((previousVote) => previousVote + increment);
    setHasVoted(true);
    patchArticleVotes(articleId, increment)
      .then(() => {
        setError(null);
      })
      .catch((err) => {
        setError("Failed to update votes");
        setVotes((previousVote) => previousVote - increment);
        setHasVoted(false);
      });
  };

  if (isLoading) {
    return <LoadSpinner />;
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center  bg-slate-300">
      <img
        className="block mx-auto"
        src={article.article_img_url}
        alt={`A picture of ${article.title}`}
      />
      <h1 className="text-3xl font-bold text-center">{article.title}</h1>
      <div className="detail-text flex justify-evenly items-center">
        <p>Author: {article.author}</p>
        <p>
          Posted: {"  "}
          {new Date(article.created_at).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        {error && <p>{error}</p>}
        <div className="flex items-center">
          <Stack direction="row" spacing={1}>
            <Chip
              icon={<ThumbUpIcon />}
              label={`Votes: ${votes}`}
              clickable
              onClick={() => handleIncrementVote(1)}
            />
          </Stack>
        </div>
      </div>

      <div className="p-4 text-clip flex justify-center">
        <p>{article.body}</p>
      </div>

      <div className="">
        <p>
          Category: <a href="">coding</a>
        </p>
      </div>
      <div className="comment-container bg-orange-100">
        <Comments articleId={articleId} />
      </div>
    </div>
  );
};

export default Article;
