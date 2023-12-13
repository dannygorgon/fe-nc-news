import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Article from "./components/pages/Article";
import { UserProvider } from "../contexts/UserContexts";
import Header from "./components/Header";

function App() {
  return (
    <UserProvider>
      <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:articleId" element={<Article />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
