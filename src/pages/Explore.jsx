import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewPost, PostCard, WhoToFollow } from "../components";
import { getAllUsers } from "../features/usersSlice";
import { getPosts } from "../features/postsSlice";
import { BiLoader } from "react-icons/bi";

const Explore = () => {
  const dispatch = useDispatch();
  const { authToken, authUserLoading } = useSelector((state) => state.auth);
  const { posts, postsLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    authToken !== null && dispatch(getAllUsers({ authToken }));
    // eslint-disable-next-line
  }, [authUserLoading]);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <main className="flex flex-col md:flex-row md:space-x-4 my-2 w-full items-center md:w-5/6 mx-auto md:items-start min-h-screen">
      <div className="col-span-2 flex flex-col w-3/4 justify-center">
        <NewPost />
        {postsLoading ? (
          <>
            {posts.map((post) => (
              <PostCard key={post._id} data={post} />
            ))}
          </>
        ) : (
          <div className="flex items-center justify-center min-h-screen">
            <p className="text-lg font-semibold">Loading</p>
            <BiLoader className="text-3xl" />
          </div>
        )}
      </div>
      {authUserLoading && <WhoToFollow />}
    </main>
  );
};

export { Explore };
