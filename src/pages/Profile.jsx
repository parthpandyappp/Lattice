import { useEffect } from "react";
import { BiLoader } from "react-icons/bi";
import notfound from "../assets/not-found.svg";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, getUserProfile } from "../features";
import { PostCard, ProfileHeader, WhoToFollow } from "../components";

const Profile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const { authToken, authUser } = useSelector((state) => state.auth);
  const { posts, postsLoading } = useSelector((state) => state.posts);
  const { userProfile, userProfileLoading } = useSelector(
    (state) => state.userProfile
  );

  const filteredPosts = posts.filter(
    (post) => post.username === userProfile.username
  );

  useEffect(() => {
    dispatch(getUserProfile({ authToken, username }));
    dispatch(getAllUsers({ authToken }));
    // eslint-disable-next-line
  }, [username]);

  return userProfileLoading ? (
    <div className="relative">
      <main className="flex flex-col md:flex-row md:space-x-4 my-2 w-5/6 mx-auto items-center justify-center md:items-start min-h-screen">
        <div className="col-span-2 flex flex-col w-3/4 justify-center items-center">
          <ProfileHeader userProfile={userProfile} posts={filteredPosts} />
          {postsLoading &&
            filteredPosts
              .slice()
              .reverse()
              .map((post) => (
                <PostCard key={post._id} data={post} from="profile" />
              ))}

          {filteredPosts.length === 0 && (
            <div className="flex flex-col items-center justify-center">
              <img className="w-24" src={notfound} alt="no-posts" />
              {authUser.username === username ? (
                <p className="font-light mt-5">
                  Nothing posted yet.{" "}
                  <Link
                    to="/explore"
                    className="italic underline underline-offset-2 mr-1"
                  >
                    Post
                  </Link>{" "}
                  now?
                </p>
              ) : (
                <p className="font-light mt-5">Nothing posted yet. </p>
              )}
            </div>
          )}
        </div>

        <WhoToFollow />
      </main>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg font-semibold">Loading</p>
      <BiLoader className="text-3xl" />
    </div>
  );
};

export { Profile };
