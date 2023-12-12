import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9090/api',
});

export const getAllArticles = () => {
  return api.get('/articles')
    .then(res => res.data.articles)
    .catch(err => console.error(err));
};