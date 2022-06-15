import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editComment, toggleModal, postRefresh } from "../features";

const CommentUpdateModal = () => {
  const dispatch = useDispatch();
  const { commentId, postId } = useSelector((state) => state.modal);
  const { authToken } = useSelector((state) => state.auth);
  const { posts, postsLoading } = useSelector((state) => state.posts);
  const post = posts.filter((post) => post._id === postId)[0];
  const comment = post.comments.filter(
    (comment) => comment._id === commentId
  )[0];
  const [commentContent, setCommentContent] = useState(comment?.text);

  const handleUpdate = () => {
    dispatch(
      editComment({ authToken, postId, commentId, comment: commentContent })
    );
    dispatch(toggleModal({ type: "commentUpdate", commentId }));
    dispatch(postRefresh());
  };

  return (
    postsLoading && (
      <div className="border-2 border-slate-600 w-5/8 p-3 rounded-md bg-amber-100">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Comment Details</h1>
          <MdClose
            className="text-lg cursor-pointer"
            onClick={() =>
              dispatch(toggleModal({ type: "commentUpdate", commentId }))
            }
          />
        </div>

        <div className="flex flex-col mt-8">
          <label htmlFor="email" className="font-medium">
            Your Comment
          </label>
          <textarea
            name="post"
            type="text"
            value={commentContent}
            className="border-2 border-slate-600 rounded-md py-1 w-full px-2 bg-amber-50"
            onChange={(e) => setCommentContent(e.target.value)}
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

export { CommentUpdateModal };
