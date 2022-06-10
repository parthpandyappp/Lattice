import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BiComment } from "react-icons/bi";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../features/usersSlice";
import { Link } from "react-router-dom";
import { toggleModal } from "../features/modalSlice";
import { PrimeModal } from "./PrimeModal";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { likePost, dislikePost } from "../features/postsSlice";
import {
  addToBookmarks,
  getBookMarks,
  removeFromBookmarks,
} from "../features/bookMarksSlice";

const PostCard = ({ data, from }) => {
  const dispatch = useDispatch();
  const { authUser, authToken } = useSelector((state) => state.auth);
  const { postsLoading } = useSelector((state) => state.posts);
  const { users, usersLoading } = useSelector((state) => state.users);
  const { bookMarks } = useSelector((state) => state.bookMarks);

  const user = users.filter((user) => user.username === data.username);
  const isLiked =
    authUser &&
    data.likes.likedBy.some((user) => authUser.username === user.username);

  const isDisliked =
    authUser &&
    data.likes.dislikedBy.some((user) => authUser.username === user.username);

  const isBookMarked = bookMarks.some((bookmark) => bookmark._id === data._id);

  useEffect(() => {
    dispatch(getAllUsers({ authToken }));
    dispatch(getBookMarks({ authToken }));
  }, [dispatch, data.username, authToken]);

  return (
    postsLoading &&
    usersLoading && (
      <div className="grid grid-cols-8 w-full shadow p-3 rounded mb-3">
        <PrimeModal postData={data.content} />

        <img
          className="col-span-1 p-1 rounded-full w-20"
          src={user[0].avatar ? user[0].avatar : `https://picsum.photos/70`}
          alt="user"
        />
        <div className="col-start-2 col-span-8 p-1">
          <div className="flex justify-between items-center">
            <Link to={`/profile/${data.username}`}>
              {" "}
              <p className="font-bold text-sm md:text-base">{data.username}</p>
            </Link>
            {from && from === "profile" && (
              <div className="flex space-x-2">
                <AiOutlineEdit
                  className="text-2xl"
                  onClick={() =>
                    dispatch(
                      toggleModal({ type: "PostUpdate", postId: data._id })
                    )
                  }
                />
                <AiOutlineDelete
                  className="text-2xl text-red-600"
                  onClick={() =>
                    dispatch(
                      toggleModal({ type: "DeletePost", postId: data._id })
                    )
                  }
                />
              </div>
            )}
          </div>

          <p className="text-xs md:text-sm">{user[0].bio}</p>
          <p className="mt-2 text-sm md:text-base">{data.content}</p>
          <div className="flex items-center gap-3 mt-3">
            {!isLiked && !isDisliked && (
              <div className="flex gap-1 items-center">
                <p className="text-normal text-gray">{data.likes.likeCount}</p>
                <IoIosArrowUp
                  className="cursor-pointer text-3xl text-gray-500"
                  onClick={() =>
                    dispatch(likePost({ authToken, postId: data._id }))
                  }
                />
                <p className="text-normal text-gray">
                  {data.likes.dislikedBy.length}
                </p>
                <IoIosArrowDown
                  className="cursor-pointer text-3xl text-gray-500"
                  onClick={() =>
                    dispatch(dislikePost({ authToken, postId: data._id }))
                  }
                />
              </div>
            )}
            {isLiked && (
              <div className="flex gap-1  items-center">
                <p className="text-normal text-green-300 ">
                  {data.likes.likeCount}
                </p>
                <IoIosArrowUp className="cursor-pointer text-3xl text-green-500" />
                <p className="text-normal text-gray">
                  {data.likes.dislikedBy.length}
                </p>
                <IoIosArrowDown
                  className="cursor-pointer text-3xl text-gray-500"
                  onClick={() =>
                    dispatch(dislikePost({ authToken, postId: data._id }))
                  }
                />
              </div>
            )}
            {isDisliked && (
              <div className="flex gap-1  items-center">
                <p className="text-normal text-gray">{data.likes.likeCount}</p>
                <IoIosArrowUp
                  className="cursor-pointer text-3xl text-gray-500"
                  onClick={() =>
                    dispatch(likePost({ authToken, postId: data._id }))
                  }
                />
                <p className="text-lg text-red-400">
                  {data.likes.dislikedBy.length}
                </p>
                <IoIosArrowDown className="cursor-pointer text-3xl text-red-500" />
              </div>
            )}
            <BiComment className="cursor-pointer text-2xl" />
            {isBookMarked ? (
              <BsFillBookmarkFill
                className="text-xl cursor-pointer"
                onClick={() =>
                  dispatch(removeFromBookmarks({ authToken, postId: data._id }))
                }
              />
            ) : (
              <BsBookmark
                className="text-xl cursor-pointer"
                onClick={() =>
                  dispatch(addToBookmarks({ authToken, postId: data._id }))
                }
              />
            )}
          </div>
        </div>
      </div>
    )
  );
};

export { PostCard };
