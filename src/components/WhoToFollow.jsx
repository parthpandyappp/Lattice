import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features/usersSlice";
import { Link } from "react-router-dom";

const WhoToFollow = () => {
  const { users } = useSelector((state) => state.users);
  const { authUser, authToken, authUserLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const people =
    authUserLoading &&
    users
      .filter((user) => user.username !== authUser.username)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

  useEffect(() => {
    authToken && dispatch(getAllUsers({ authToken }));
    // eslint-disable-next-line
  }, [authUserLoading]);

  return (
    <div className="flex flex-col gap-5 shadow w-3/4 md:w-1/4 rounded justify-center p-3">
      <p className="text-center font-bold underline underline-offset-1">
        Who to follow
      </p>
      <div className="flex flex-col gap-4 flex-start items-center content-start">
        <div className="flex flex-col gap-3 text-left">
          {people &&
            people.map((user) => {
              return (
                <Link key={user._id} to={`/profile/${user.username}`}>
                  <p className="flex gap-1 text-sm items-center font-medium">
                    <img
                      src={user.avatar}
                      className="rounded-full w-12"
                      alt="user-profile"
                    />
                    @{user.username}
                  </p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export { WhoToFollow };
