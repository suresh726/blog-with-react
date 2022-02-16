import React, { useState } from 'react';

const AddCommentForm = ({articleName, setArticleInfo}) => {
  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'POST',
      body: JSON.stringify({username, text: commentText}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername('');
    setCommentText('');
  };
  return (
    <div className="container">
      <h3 className="text-3xl my-4">Add a Comment</h3>
      <div className="flex flex-col justify-center">
        <div class="mb-3 xl:w-96">
          <label for="username" class="form-label inline-block mb-2 text-gray-700">Name</label>
          <input 
            name="username" type="text" value={username}
            onChange={event => setUsername(event.target.value)}
            className="form-control border border-solid border-gray-300 rounded"
          />
        </div>

        <div class="mb-3 xl:w-96">
          <label for="commentText" class="form-label inline-block mb-2 text-gray-700">Comment</label>
          <textarea 
            name="commentText" rows={4} cols={50} value={commentText}
            onChange={event => setCommentText(event.target.value)}
            className="form-control border border-solid border-gray-300 rounded"
          />
        </div>

        <button
          onClick={() => addComment()} 
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add Comment
        </button>
      </div>
      
    </div>
  );
}

export default AddCommentForm;