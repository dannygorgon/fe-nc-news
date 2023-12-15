import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Article from "./components/pages/SingleArticle";
import { UserProvider } from "../contexts/UserContexts";
import Header from "./components/Header";
import ProfilePage from "./components/ProfilePage";
import TopicsPage from "./components/pages/TopicsPage";
import ArticlesPage from "./components/pages/ArticlesPage";


function App() {
  return (
    <UserProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:articleId" element={<Article />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/topics" element={<TopicsPage />} />
      <Route path="/articles/:topic" element={<ArticlesPage />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
