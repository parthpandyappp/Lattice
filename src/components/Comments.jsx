import { useEffect } from "react";
import mockuser from "../assets/mockuser.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import {
  getAllUsers,
  postRefresh,
  toggleModal,
  upVotePostComment,
  downVotePostComment,
} from "../features";
// import { getComments } from "../features/postsSlice";

const Comments = ({ comment, postId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authToken, authUser } = useSelector((state) => state.auth);
  const { users, usersLoading } = useSelector((state) => state.users);
  const { postsLoading, postRefreshToggle } = useSelector(
    (state) => state.posts
  );

  const user = users.filter((user) => user.username === comment.username);

  const isLiked =
    authUser && comment.votes.upvotedBy.some((uid) => authUser._id === uid);

  const isDisliked =
    authUser && comment.votes.downvotedBy.some((uid) => authUser._id === uid);

  useEffect(() => {
    dispatch(getAllUsers({ authToken }));
  }, [dispatch, postRefreshToggle, authToken]);

  return (
    usersLoading &&
    postsLoading && (
      <div className="flex flex-col gap-1 px-6">
        <div className="flex justify-between md:w-1/4">
          <div className="flex items-center gap-3">
            <img
              className="col-span-1 p-1 rounded-full w-8 h-8 object-fit"
              src={
                authUser?.username === user[0]?.username
                  ? authUser?.avatar
                    ? authUser.avatar
                    : mockuser
                  : user[0]?.avatar
                  ? user[0].avatar
                  : mockuser
              }
              alt="user"
            />
            <Link to={`/profile/${comment.username}`}>
              {" "}
              <p className="font-bold text-sm md:text-base">
                {comment.username}
              </p>
            </Link>
          </div>
          {authUser.username === user[0]?.username && (
            <div className="flex space-x-2">
              <AiOutlineEdit
                className="md:text-2xl"
                onClick={() =>
                  dispatch(
                    toggleModal({
                      type: "commentUpdate",
                      postId,
                      commentId: comment._id,
                    })
                  )
                }
              />
              <AiOutlineDelete
                className="md:text-2xl text-red-600"
                onClick={() =>
                  dispatch(
                    toggleModal({
                      type: "commentDelete",
                      postId,
                      commentId: comment._id,
                    })
                  )
                }
              />
            </div>
          )}
        </div>
        <div>
          <p className="text-base">{comment.text}</p>

          {!isLiked && !isDisliked && (
            <div className="flex gap-1 items-center">
              <p className="text-normal text-gray">
                {comment && comment.votes.upvotedBy.length}
              </p>
              <IoIosArrowUp
                className="cursor-pointer text-3xl text-gray-500"
                onClick={
                  authUser
                    ? () => {
                        dispatch(
                          upVotePostComment({
                            authToken,
                            postId,
                            commentId: comment._id,
                          })
                        );
                        dispatch(postRefresh());
                      }
                    : () => navigate("/login")
                }
              />
              <p className="text-normal text-gray">
                {comment && comment.votes.downvotedBy.length}
              </p>
              <IoIosArrowDown
                className="cursor-pointer text-3xl text-gray-500"
                onClick={
                  authUser
                    ? () => {
                        dispatch(
                          downVotePostComment({
                            authToken,
                            postId,
                            commentId: comment._id,
                          })
                        );
                        dispatch(postRefresh());
                      }
                    : () => navigate("/login")
                }
              />
            </div>
          )}
          {isLiked && !isDisliked && (
            <div className="flex gap-1  items-center">
              <p className="text-normal text-green-300 ">
                {comment && comment.votes.upvotedBy.length}
              </p>
              <IoIosArrowUp className="cursor-pointer text-3xl text-green-500" />
              <p className="text-normal text-gray">
                {comment.votes.downVotedBy && comment.votes.downVotedBy.length}
              </p>
              <IoIosArrowDown
                className="cursor-pointer text-3xl text-gray-500"
                onClick={
                  authUser
                    ? () => {
                        dispatch(
                          downVotePostComment({
                            authToken,
                            postId,
                            commentId: comment._id,
                          })
                        );
                        dispatch(postRefresh());
                      }
                    : () => navigate("/login")
                }
              />
            </div>
          )}
          {isDisliked && !isLiked && (
            <div className="flex gap-1  items-center">
              <p className="text-normal text-gray">
                {comment && comment.votes.upvotedBy.length}
              </p>
              <IoIosArrowUp
                className="cursor-pointer text-3xl text-gray-500"
                onClick={
                  authUser
                    ? () => {
                        dispatch(
                          upVotePostComment({
                            authToken,
                            postId,
                            commentId: comment._id,
                          })
                        );
                        dispatch(postRefresh());
                      }
                    : () => navigate("/login")
                }
              />
              <p className="text-lg text-red-400">
                {comment && comment.votes.downvotedBy.length}
              </p>
              <IoIosArrowDown className="cursor-pointer text-3xl text-red-500" />
            </div>
          )}
        </div>
      </div>
    )
  );
};

export { Comments };
