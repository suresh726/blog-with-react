import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  return (
    <>
      {articles.map((article, key) => (
      <div key={key} className="p-6 mb-4 shadow-lg rounded-lg bg-gray-100 text-gray-700">
        <h2 class="font-semibold text-3xl mb-5">{article.title}</h2>
        <p>{article.content[0].substring(0, 300)}...</p>
        <Link key={key} to={`/article/${article.name}`}>
          <span className="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Show more
          </span>
        </Link>
      </div>
    ))}
    </>
  );
};

export default ArticleList;