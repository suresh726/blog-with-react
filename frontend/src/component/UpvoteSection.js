import React from 'react';
import { BiUpvote }  from 'react-icons/bi'

const UpvoteSection = ({articleName, upvotes, setArticleInfo}) => {

  const handleUpVote = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: 'post'
    });

    const body = await result.json();
    setArticleInfo(body);
  }

  return (
    <div className="flex flex-row justify-items-center items-center mb-6">

      <p className="text-center">Upvote Count: {upvotes}</p>
      <button
        onClick={() => handleUpVote()}
        className="inline-flex align-top items-center ml-4 px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        <BiUpvote />
        Add Upvote
      </button>
    </div>
  );
}

export default UpvoteSection;