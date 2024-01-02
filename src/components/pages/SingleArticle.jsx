import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getArticleById, patchArticleVotes } from "../utils/api";
import LoadSpinner from "../LoadSpinner";
import Comments from "../Comments";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Link } from 'react-router-dom';


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
    <div className="flex flex-col items-center justify-center bg-slate-300 p-10 rounded-lg m-5 w-auto max-w-7xl mx-auto">
      <img
        className="w-full h-64 object-cover rounded-lg"
        src={article.article_img_url}
        alt={`A picture of ${article.title}`}
      />
      <h1 className="text-3xl font-bold text-center mt-5 text-black">{article.title}</h1>
      <div className="detail-text flex items-center mt-5 text-black">
  <p className="mr-5">Author: {article.author}</p>
  <p className="mr-5">
    Posted: {"  "}
    {new Date(article.created_at).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}
  </p>

  {error && <p className="mr-5">{error}</p>}
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
  
      <div className="p-4 text-clip flex justify-center bg-gray-200 m-5 rounded-lg text-black">
        <p>{article.body}</p>
      </div>
  
      <div className="p-4 text-clip flex justify-center bg-gray-200 m-5 rounded-lg text-black">
        <p>
        Category: <Link to="/topics/coding" className="text-blue-500">coding</Link>
        </p>
      </div>
  
      <div className="comment-container bg-gray-200  p-4 m-5 rounded-lg text-black">
        <Comments articleId={articleId} />
      </div>
    </div>
  );
};

export default Article;
