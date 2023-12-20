import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import SingleArticle from "./components/pages/SingleArticle";
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
          <Route path="/articles/:articleId" element={<SingleArticle />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/topics/:topicSlug" element={<ArticlesPage />} />
          <Route path="*" element={<div>Error: This page does not exist</div>} /> {/* Catch-all route */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;