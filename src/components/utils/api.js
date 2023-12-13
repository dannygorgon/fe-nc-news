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