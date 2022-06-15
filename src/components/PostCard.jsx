import { useEffect } from "react";
import { PrimeModal } from "./PrimeModal";
import { BiComment } from "react-icons/bi";
import mockuser from "../assets/mockuser.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import {
  likePost,
  dislikePost,
  getAllUsers,
  toggleModal,
  addToBookmarks,
  getBookMarks,
  removeFromBookmarks,
} from "../features";

const PostCard = ({ data, from }) => {
  const dispatch = useDispatch();

  const { postsLoading } = useSelector((state) => state.posts);
  const { authUser, authToken } = useSelector((state) => state.auth);
  const { users, usersLoading } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const { bookMarks, bookMarksLoading } = useSelector(
    (state) => state.bookmarks
  );

  const user = users.filter((user) => user.username === data.username);
  const isLiked =
    authUser && data.likes.likedBy.some((uid) => authUser._id === uid);

  const isDisliked =
    authUser && data.likes.dislikedBy.some((uid) => authUser._id === uid);

  const isBookMarked = bookMarks.some((bookmark) => bookmark._id === data._id);

  useEffect(() => {
    dispatch(getAllUsers({ authToken }));
    bookMarksLoading && dispatch(getBookMarks({ authToken }));
    // eslint-disable-next-line
  }, [dispatch, data.username, authToken]);

  return (
    postsLoading &&
    usersLoading && (
      <div className="grid grid-cols-8 w-full shadow p-3 rounded mb-3">
        <PrimeModal />

        <img
          className="col-span-1 p-1 rounded-full w-8 h-8 md:w-20 md:h-20 object-fit"
          src={
            authUser?.username === user[0].username
              ? authUser?.avatar
                ? authUser.avatar
                : mockuser
              : user[0].avatar
              ? user[0].avatar
              : mockuser
          }
          alt="user"
        />
        <div className="col-start-2 col-span-8 p-1">
          <div className="flex justify-between items-center">
            <Link to={`/profile/${data.username}`}>
              {" "}
              <p className="font-bold text-sm md:text-base">{data.username}</p>
            </Link>
            {from &&
              from === "profile" &&
              data.username === authUser?.username && (
                <div className="flex space-x-2">
                  <AiOutlineEdit
                    className="md:text-2xl"
                    onClick={() =>
                      dispatch(
                        toggleModal({ type: "PostUpdate", postId: data._id })
                      )
                    }
                  />
                  <AiOutlineDelete
                    className="md:text-2xl text-red-600"
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

          <p className="mt-2 text-sm w-44 break-normal text-center md:text-left md:w-full md:text-base">
            {data.content}
          </p>

          <div className="flex justify-between items-center gap-3 mt-3">
            <div className="flex items-center gap-3">
              {from !== "bookmarks" && (
                <>
                  {!isLiked && !isDisliked && (
                    <div className="flex gap-1 items-center">
                      <p className="text-normal text-gray">
                        {data.likes.likeCount}
                      </p>
                      <IoIosArrowUp
                        className="cursor-pointer text-3xl text-gray-500"
                        onClick={
                          authUser
                            ? () =>
                                dispatch(
                                  likePost({ authToken, postId: data._id })
                                )
                            : () => navigate("/login")
                        }
                      />
                      <p className="text-normal text-gray">
                        {data.likes.dislikedBy.length}
                      </p>
                      <IoIosArrowDown
                        className="cursor-pointer text-3xl text-gray-500"
                        onClick={
                          authUser
                            ? () =>
                                dispatch(
                                  dislikePost({ authToken, postId: data._id })
                                )
                            : () => navigate("/login")
                        }
                      />
                    </div>
                  )}
                  {isLiked && !isDisliked && (
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
                        onClick={
                          authUser
                            ? () =>
                                dispatch(
                                  dislikePost({ authToken, postId: data._id })
                                )
                            : () => navigate("/login")
                        }
                      />
                    </div>
                  )}
                  {isDisliked && !isLiked && (
                    <div className="flex gap-1  items-center">
                      <p className="text-normal text-gray">
                        {data.likes.likeCount}
                      </p>
                      <IoIosArrowUp
                        className="cursor-pointer text-3xl text-gray-500"
                        onClick={
                          authUser
                            ? () =>
                                dispatch(
                                  likePost({ authToken, postId: data._id })
                                )
                            : () => navigate("/login")
                        }
                      />
                      <p className="text-lg text-red-400">
                        {data.likes.dislikedBy.length}
                      </p>
                      <IoIosArrowDown className="cursor-pointer text-3xl text-red-500" />
                    </div>
                  )}
                </>
              )}
              <Link to={authUser ? `/post/${data._id}` : `/login`}>
                <BiComment className="cursor-pointer text-xl" />
              </Link>
            </div>

            {isBookMarked ? (
              <BsFillBookmarkFill
                className="text-xl cursor-pointer"
                onClick={
                  authUser
                    ? () =>
                        dispatch(
                          removeFromBookmarks({ authToken, postId: data._id })
                        )
                    : () => navigate("/login")
                }
              />
            ) : (
              <BsBookmark
                className="text-xl cursor-pointer"
                onClick={
                  authUser
                    ? () =>
                        dispatch(
                          addToBookmarks({ authToken, postId: data._id })
                        )
                    : () => navigate("/login")
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
