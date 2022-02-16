import React from 'react';
import ArticleList from '../component/ArticleList';
import articles from '../data/article-list';

const ArticleListPage = () => {
  return (
    <>
    <h1 className="mx-auto text-5xl mb-5">Articles</h1>
    <ArticleList articles={articles} />
    </>
  );
}

export default ArticleListPage;