import { toggleModal } from "../features/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProfileUpdateModal } from "./ProfileUpdateModal";

const ProfileHeader = ({ user }) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modal.modalVisible);
  const { authUser } = useSelector((state) => state.auth);
  return (
    <div className="w-full md:shadow mb-12">
      <ProfileUpdateModal show={show} user={user} />
      <div className="flex flex-col items-center justify-center">
        <img
          src={user.avatar ? user.avatar : `https://picsum.photos/100`}
          className="border-4 border-amber-100 rounded-full"
          alt="profile"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm">@{user.username}</p>
          <p className="text-medium font-semibold">{user.firstName}</p>
          <p className="mt-3 text-base md:w-96 text-center">{user.bio}</p>
          <div className="flex justify-center mt-5 space-x-8 items-center">
            <div className="flex flex-col text-center">
              <p>25</p>
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
              onClick={() => dispatch(toggleModal())}
            >
              Update Profile
            </button>
          ) : (
            <button className="text-center font-light w-full py-1 bg-amber-100 rounded-lg my-2">
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProfileHeader };
