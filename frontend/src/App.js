import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import Navbar from './Navbar';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container mt-4 mx-auto font-thin">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} exact/>
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/articles-list" element={<ArticleListPage />} />
              <Route path="/article/:articleName" element={<ArticlePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      );
  }
}
export default App;
