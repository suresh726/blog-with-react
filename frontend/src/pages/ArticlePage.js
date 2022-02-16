import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import articles from '../data/article-list';
import ArticleList from '../component/ArticleList';
import CommentList from '../component/CommentList';
import NotFoundPage from './NotFoundPage';
import UpvoteSection from '../component/UpvoteSection';
import AddCommentForm from '../component/AddCommentForm';

const ArticlePage = () => {
  const {articleName} = useParams();
  const article = articles.find(article => article.name === articleName);
  const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});

  useEffect(() => {
    const fetchArticle = async () => {
      const result = await fetch(`/api/articles/${articleName}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchArticle();
  }, [articleName])

  if(!article) {
    return <NotFoundPage />;
  }

  const otherArticles = articles.filter(article => article.name !== articleName);

  return (
    <>
    <h1 className="mx-auto text-5xl mb-1">{article.title}</h1>
    <UpvoteSection
      articleName={articleName}
      upvotes={articleInfo.upvotes}
      setArticleInfo={setArticleInfo}
    />
    {article.content.map((paragraph, key) => (
      <p key={key}>{paragraph}</p>
    ))}
    <hr class="my-6 border-gray-300" />
    <AddCommentForm
      articleName={articleName}
      setArticleInfo={setArticleInfo}
    />
    
    <hr class="my-6 border-gray-300" />
    <CommentList comments={articleInfo.comments} />
    
    <hr class="my-6 border-gray-300" />
    <h3 className="text-3xl my-4">Related Articles</h3>
    <ArticleList articles={otherArticles} />
    </>
  );
}

export default ArticlePage;