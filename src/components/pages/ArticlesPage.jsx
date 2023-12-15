import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";


const ArticlesPage = () => {
    const [articles, setArticles] = useState([]);
    const { topicSlug } = useParams();

    useEffect(() => {
        getArticlesByTopic(topicSlug)
            .then((data) => {
                setArticles(data.articles);
            })
            .catch((error) => {
                console.error("Failed to fetch articles", error);
            });
    }, [topicSlug]);

    return ( 
        <div>
      <h1>Articles</h1>
      {articles.map((article) => (
        <div key={article.article_id}>
          <h2>
            <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
          </h2>
          <p>{article.body}</p>
        </div>
      ))}
    </div>
     );
}
 
export default ArticlesPage;