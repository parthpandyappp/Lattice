import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewPost, PostCard, WhoToFollow } from "../components";
import { getAllUsers } from "../features/usersSlice";

const Explore = () => {
  const dispatch = useDispatch();
  const { authToken, authUserLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    authToken !== null && dispatch(getAllUsers({ authToken }));
    // eslint-disable-next-line
  }, [authUserLoading]);
  return (
    <main className="flex flex-col md:flex-row md:space-x-4 my-2 w-full items-center md:w-5/6 mx-auto md:items-start min-h-screen">
      <div className="col-span-2 flex flex-col w-3/4 justify-center">
        <NewPost />
        <PostCard />
        <PostCard />
      </div>
      {authUserLoading && <WhoToFollow />}
    </main>
  );
};

export { Explore };
