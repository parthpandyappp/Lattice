import { PostCard, ProfileHeader, WhoToFollow } from "../components";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <main className="flex flex-col md:flex-row md:space-x-4 my-2 w-5/6 mx-auto items-center justify-center md:items-start min-h-screen">
      <div className="col-span-2 flex flex-col w-3/4 justify-center items-center">
        <ProfileHeader user={user} />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      <WhoToFollow />
    </main>
  );
};

export { Profile };
