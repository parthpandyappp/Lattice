import { PrimeModal } from "./PrimeModal";
import { toggleModal } from "../features/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);
  const {userProfile} = useSelector((state) => state.userProfile);
  const user = userProfile

  return (
    <div className="w-full md:shadow mb-12">
      <PrimeModal />
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
              onClick={() => dispatch(toggleModal({type:"ProfileUpdate"}))}
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
