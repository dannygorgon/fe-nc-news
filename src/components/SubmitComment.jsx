import { useState } from "react";

const SubmitComment = ({ onSubmit }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(comment)
    console.log(comment);
    setComment(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment:
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitComment;