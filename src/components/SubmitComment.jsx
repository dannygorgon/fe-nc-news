import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
  <div className="flex flex-col items-center justify-center space-y-4">
    {isSubmitted && <div className="text-green-500">Form submitted</div>}
    {error && <div className="text-red-500">{error}</div>}
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextField 
        multiline 
        maxRows={4} 
        variant="outlined" 
        className="w-96"
        placeholder="Enter a comment!"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="flex justify-center">
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  </div>
);
};

export default SubmitComment;
