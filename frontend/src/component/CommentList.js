import React from "react";

const CommentList = ({ comments }) => {
  return (
    <>
      <h3 className="text-3xl my-4">Commments</h3>
      {comments.map((comment, key) => (
        <section className="p-2 md:p-2 text-center md:text-left shadow-lg rounded-md">
        <div className="flex justify-center">
          <div className="max-w-3xl">
            <div className="block p-6 rounded-lg shadow-lg bg-white m-4">
              <div className="md:flex md:flex-row">
                <div
                  className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                    className="rounded-full shadow-md"
                    alt="woman avatar"
                  />
                </div>
                <div className="md:ml-6">
                  <p className="text-gray-500 font-light mb-6">
                    {comment.text}
                  </p>
                  <p className="font-semibold text-xl mb-2 text-gray-800">{comment.username}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ))}
    </>
  );
};

export default CommentList;