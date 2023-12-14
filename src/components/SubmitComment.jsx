import { useState } from "react";

const SubmitComment = ({ onSubmit }) => {
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(false);
    if (!comment) {
      setError("Comment cannot be empty");
      return;
    }
    setError(null);
    try {
      await onSubmit(comment);
      setIsSubmitted(true);
    } catch (err) {
      setError("Failed to submit comment");
    }
    setComment("");
  };

  return (
    <div>
      {isSubmitted && <div style={{ color: "green" }}>Form submitted</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          <textarea
            placeholder="Enter a comment!"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitComment;
