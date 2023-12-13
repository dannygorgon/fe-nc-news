import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9090/api",
});

export const getAllArticles = () => {
  return api
    .get("/articles")
    .then((res) => res.data.articles)
    .catch((err) => console.error(err));
};

export const getArticleById = (articleId) => {
  return api
    .get(`/articles/${articleId}`)
    .then((res) => res.data.article)
    .catch((err) => console.error(err));
};

export const getCommentsByArticleId = (articleId) => {
  return api
    .get(`/articles/${articleId}/comments`)
    .then((res) => res.data.comments)
    .catch((err) => console.error(err));
};

export const patchArticleVotes = (articleId, increment) => {
  return api
    .patch(`/articles/${articleId}`, { inc_votes: increment })
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const postComment = (articleId, username, body) => {
  if (!articleId || !username || !body) {
    console.error('Invalid arguments', { articleId, username, body });
    return Promise.reject(new Error('Invalid arguments'));
  }

  return api
  .post(`/articles/${articleId}/comments`, { username, body })
  .then((res) => res.data.comment)
  .catch((err) => console.error(err));
}