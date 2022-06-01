import { useEffect } from "react";
import { PostCard, ProfileHeader, WhoToFollow } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../features/userProfileSlice";
import {getAllUsers} from "../features/usersSlice";
import {BiLoader} from "react-icons/bi"

const Profile = () => {
  const { authUser, authToken } = useSelector((state) => state.auth);
  const { userProfile, userProfileLoading } = useSelector((state) => state.userProfile);
  const { username } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUserProfile({ authToken, username }));
    dispatch(getAllUsers({ authToken }));
  }, []);


  return userProfileLoading ? (
    <div className="relative">

      <main className="flex flex-col md:flex-row md:space-x-4 my-2 w-5/6 mx-auto items-center justify-center md:items-start min-h-screen">
        <div className="col-span-2 flex flex-col w-3/4 justify-center items-center">
          <ProfileHeader user={userProfile} />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

        <WhoToFollow />
      </main>
    </div>
  ): <div className="flex items-center justify-center min-h-screen"><p className="text-lg font-semibold">Loading</p><BiLoader className="text-3xl" /></div>;
};

export { Profile };
