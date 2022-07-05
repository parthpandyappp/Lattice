import { BiLoader } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Comments, PostCard } from "../components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getComments, getPosts, postComment, postRefresh } from "../features";

const SinglePost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [commentData, setCommentData] = useState(null);
  const { authToken } = useSelector((state) => state.auth);
  const { posts, postsLoading, postRefreshToggle } = useSelector(
    (state) => state.posts
  );

  let post = posts.filter((post) => post._id === postId)[0];
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments({ authToken, postId }));
    // eslint-disable-next-line
  }, [postId, dispatch, postRefreshToggle]);

  const handleCommentPost = () => {
    dispatch(postComment({ authToken, postId, comment: commentData }));
    dispatch(postRefresh());
  };

  return postsLoading && post ? (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col w-3/4 justify-center">
        <PostCard data={post} />
      </div>
      <div className="shadow md:w-3/4 space-y-4 mb-5">
        <h3 className="font-semibold p-3 underline underline-offset-2">
          Comments
        </h3>
        <div className="flex gap-2 px-1 items-center">
          <input
            type="text"
            className="border-b-4 border-amber-100 w-2/4 md:w-1/4 px-2 bg-amber-50 focus:outline-none"
            placeholder="Add a comment"
            onChange={(e) => setCommentData(e.target.value)}
          />
          <button
            className="bg-amber-100 px-6 py-1 rounded"
            onClick={() => handleCommentPost()}
          >
            Comment
          </button>
        </div>

        {post &&
          post.comments
            .slice()
            .reverse()
            .map((el, index) => (
              <Comments key={index} comment={el} postId={postId} />
            ))}
      </div>
    </main>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg font-semibold">Loading</p>
      <BiLoader className="text-3xl" />
    </div>
  );
};

export { SinglePost };
