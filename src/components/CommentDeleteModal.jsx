import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, toggleModal, postRefresh } from "../features";

const CommentDeleteModal = () => {
  const dispatch = useDispatch();
  const { commentId, postId } = useSelector((state) => state.modal);
  const { authToken } = useSelector((state) => state.auth);

  const handleDelete = () => {
    dispatch(deleteComment({ authToken, postId, commentId }));
    dispatch(toggleModal({ type: "commentDelete", commentId, postId }));
    dispatch(postRefresh());
  };

  return (
    <div className="border-2 border-slate-600 w-5/8 p-3 rounded-md bg-amber-100">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Delete this Comment? Sure?</h1>
        <MdClose
          className="text-lg cursor-pointer ml-3"
          onClick={() => dispatch(toggleModal({ type: "commentDelete" }))}
        />
      </div>

      <div className="flex mt-5 gap-2">
        <button
          className="text-white text-center w-full py-1 bg-red-600 rounded"
          onClick={() => handleDelete()}
        >
          Yes, Delete
        </button>
        <button
          className="text-white text-center w-full py-1 bg-red-600 rounded"
          onClick={() => dispatch(toggleModal({ type: "commentDelete" }))}
        >
          No
        </button>
      </div>
    </div>
  );
};

export { CommentDeleteModal };
