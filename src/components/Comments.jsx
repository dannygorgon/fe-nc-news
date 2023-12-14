import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import LoadSpinner from "./LoadSpinner";
import { getCommentsByArticleId, postComment, apiDeleteComment} from "./utils/api";
import SubmitComment from "./SubmitComment";
import { UserContext } from "../../contexts/UserContexts";
import DeleteIcon from '@mui/icons-material/Delete';


function Comments() {
  const { articleId } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);

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

  const handleCommentSubmit = (body) => {
    postComment(articleId, user, body)
      .then((newComment) => {
        setComments((prevComments) => [newComment, ...prevComments]);
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteComment = (comment_id) => {
    apiDeleteComment(comment_id)
      .then(() => {
        setComments((prevComments) => {
          return prevComments.filter((comment) => comment.comment_id !== comment_id);
        });
      })
      .catch((err) => console.error(err));
  }

  if (isLoading) {
    return <LoadSpinner />;
  }

  return (
    <div>
      <h1 className="text-2xl">Comments</h1>
      <SubmitComment onSubmit={handleCommentSubmit} />
      {comments.map((comment) => {
  return (
    <div key={comment.comment_id}>
      <div className="comments p-4 bg-slate-400 m-4">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <p>Author: {comment.author}</p>
          <DeleteIcon style={{cursor: 'pointer'}} onClick={() => handleDeleteComment(comment.comment_id)} />
        </div>
        <p>{comment.body}</p>
      </div>
    </div>
  );
})}
    </div>
  );
}

export default Comments;
