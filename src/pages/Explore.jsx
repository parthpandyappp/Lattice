import { NewPost, PostCard, WhoToFollow } from "../components";
import { useSelector } from "react-redux";

const Explore = () => {
  return (
    <main className="flex flex-col md:flex-row md:space-x-4 my-2 w-full items-center md:w-5/6 mx-auto md:items-start min-h-screen">
      <div className="col-span-2 flex flex-col w-3/4 justify-center">
        <NewPost />
        <PostCard />
        <PostCard />
      </div>
      <WhoToFollow />
    </main>
  );
};

export { Explore };
