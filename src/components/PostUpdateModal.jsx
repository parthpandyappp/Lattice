import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost, toggleModal, getPost } from "../features";

const PostUpdateModal = () => {
  const dispatch = useDispatch();
  const { postId } = useSelector((state) => state.modal);
  const { authToken } = useSelector((state) => state.auth);
  const { post, postLoading } = useSelector((state) => state.posts);
  const [postContent, setPostContent] = useState(post.content);

  const handleUpdate = () => {
    dispatch(editPost({ authToken, postId, post: postContent }));
    dispatch(toggleModal({ type: "PostUpdate" }));
  };

  useEffect(() => {
    setPostContent(post.content);
    dispatch(getPost({ authToken, postId }));
    // eslint-disable-next-line
  }, [post.content]);

  return (
    postLoading && (
      <div className="border-2 border-slate-600 w-5/8 p-3 rounded-md bg-amber-100">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Post Details</h1>
          <MdClose
            className="text-lg cursor-pointer"
            onClick={() => dispatch(toggleModal({ type: "PostUpdate" }))}
          />
        </div>

        <div className="flex flex-col mt-8">
          <label htmlFor="email" className="font-medium">
            Your post
          </label>
          <textarea
            name="post"
            type="text"
            value={postContent}
            className="border-2 border-slate-600 rounded-md py-1 w-full px-2 bg-amber-50"
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-5 gap-2">
          <button
            className="text-center w-full py-1 bg-amber-200"
            onClick={() => handleUpdate()}
          >
            Update
          </button>
        </div>
      </div>
    )
  );
};

export { PostUpdateModal };
