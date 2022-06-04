import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features/usersSlice";
import { Link } from "react-router-dom";

const WhoToFollow = () => {
  const { users } = useSelector((state) => state.users);
  const { authUser, authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const people = users
    .filter((user) => user.username !== authUser.username)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  useEffect(() => {
    dispatch(getAllUsers({ authToken }));
    // eslint-disable-next-line
  }, []);

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
                <Link to={`/profile/${user.username}`}>
                  <p
                    key={user._id}
                    className="flex gap-1 text-sm items-center font-medium"
                  >
                    <img
                      src="https://picsum.photos/35"
                      className="rounded-full"
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
