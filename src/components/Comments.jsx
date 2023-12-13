import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import LoadSpinner from "./LoadSpinner";
import { getCommentsByArticleId } from "./utils/api";


function Comments() {
    const { articleId } = useParams(); // Get the articleId from the URL parameters
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(true);
      getCommentsByArticleId(articleId)
        .then((commentsFromApi) => {
          setComments(commentsFromApi);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }, [articleId]);
  
    if (isLoading) {
      return <LoadSpinner />;
    }
  
    return (
      <div>
        <h1 className="text-2xl">Comments</h1>
        {comments.map((comment) => (
              <div key={comment.comment_id}>
                <div className="comments p-4 bg-slate-400 m-4">
                <p>Author: {comment.author}</p>
              <p>{comment.body}</p>
          
              <p>Posted on: {new Date(comment.created_at).toLocaleDateString()}</p>
                </div>
            </div>
        ))}
      </div>
    );
  }
  
  export default Comments;