
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home';
import Article from './components/pages/Article';
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/articles/:articleId" element={<Article />} />
      </Routes>
    </Router>
  )
}

export default App;