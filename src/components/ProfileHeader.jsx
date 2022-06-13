import { useEffect } from "react";
import { PrimeModal } from "./PrimeModal";
import mockuser from "../assets/mockuser.png";
import { useDispatch, useSelector } from "react-redux";
import {
  postFollowUser,
  postUnFollowUser,
  toggleModal,
  getPosts,
} from "../features";

const ProfileHeader = ({ userProfile, posts }) => {
  const user = userProfile;
  const dispatch = useDispatch();

  const { authUser, authToken } = useSelector((state) => state.auth);

  const isFollowing = user.followers.some(
    (el) => el.username === authUser.username
  );

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full md:shadow mb-12">
      <PrimeModal />
      <div className="flex flex-col items-center justify-center">
        <img
          src={
            authUser.username === user.username
              ? authUser?.avatar
                ? authUser.avatar
                : mockuser
              : user.avatar
              ? user.avatar
              : mockuser
          }
          className="border-4 border-amber-100 w-20 h-20 object-cover rounded-full"
          alt="profile"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm">@{user.username}</p>
          <p className="text-medium font-semibold">{user.firstName}</p>
          <p className="mt-3 text-base md:w-96 text-center">{user.bio}</p>
          <a
            className="mt-3 text-base md:w-96 text-center text-blue-400"
            href={user.plink}
            target="_blank"
            rel="noreferrer"
          >
            {user.plink}
          </a>
          <div className="flex justify-center mt-5 space-x-8 items-center">
            <div className="flex flex-col text-center">
              <p>{posts.length}</p>
              <p className="font-semibold">Post</p>
            </div>
            <div className="flex flex-col text-center">
              <p>{user.followers.length}</p>
              <p className="font-semibold">Followers</p>
            </div>
            <div className="flex flex-col text-center">
              <p>{user.following.length}</p>
              <p className="font-semibold">Following</p>
            </div>
          </div>
          {authUser.username === user.username ? (
            <button
              className="text-center font-light w-full py-1 bg-amber-100 rounded-lg my-2"
              onClick={() => dispatch(toggleModal({ type: "ProfileUpdate" }))}
            >
              Update Profile
            </button>
          ) : !isFollowing ? (
            <button
              className="text-center font-light w-full py-1 bg-amber-100 rounded-lg my-2"
              onClick={() =>
                dispatch(postFollowUser({ authToken, fuid: user._id }))
              }
            >
              Follow
            </button>
          ) : (
            <button
              className="text-center font-light w-full py-1 bg-amber-100 rounded-lg my-2"
              onClick={() =>
                dispatch(postUnFollowUser({ authToken, fuid: user._id }))
              }
            >
              Unfollow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProfileHeader };
