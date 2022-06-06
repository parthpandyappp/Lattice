import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../features/postsSlice";

const NewPost = () => {
  const [char, setChar] = useState(250);
  const [postContent, setPostContent] = useState("");
  const { authToken, authUserLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [textColor, setColor] = useState("");
  const dispatch = useDispatch();

  const handleCharLength = (e) => {
    setPostContent(e.target.value);
    if (char < 0) {
      setChar(0);
    } else {
      setChar(250 - e.target.value.length);
      char <= 10 ? setColor("text-red-600") : setColor("");
    }
  };

  const createNewPost = () => {
    authUserLoading
      ? dispatch(createPost({ authToken, post: postContent }))
      : navigate("/login");
    setPostContent("");
  };

  return (
    <div className="grid grid-cols-8 w-full shadow p-3 rounded mb-12">
      <img
        className="col-span-1 p-1 rounded-full"
        src="https://picsum.photos/50"
        alt="user"
      />
      <div className="col-start-2 col-span-8 p-3">
        <textarea
          name="new-post"
          className="font-bold text-zinc-400 focus:outline-none w-full h-26 bg-amber-50"
          placeholder="What's new today?"
          value={postContent}
          onChange={(e) => handleCharLength(e)}
        ></textarea>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <p className="text-xl">😉</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className={textColor}>{char}</p>
            <button
              className="bg-amber-100 px-8 py-2 rounded font-medium"
              onClick={() => createNewPost()}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewPost };
