import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../features/modalSlice";
import { editPost } from "../features/postsSlice";

const PostUpdateModal = ({ postData }) => {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const { postId } = useSelector((state) => state.modal);

  const [post, setPost] = useState(postData);

  const handleUpdate = () => {
    dispatch(editPost({ authToken, postId, post }));
    dispatch(toggleModal({ type: "PostUpdate" }));
  };

  return (
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
        <input
          name="post"
          type="text"
          value={post}
          className="border-2 border-slate-600 rounded-md py-1 w-full px-2 bg-amber-50"
          onChange={(e) => setPost(e.target.value)}
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
  );
};

export { PostUpdateModal };
