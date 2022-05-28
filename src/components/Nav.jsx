import { BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { userLogout } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/");
  };
  return (
    <nav className="flex bg-amber-100 justify-between p-4">
      <Link to="/">
        <h1 className="text-xl cursor-pointer font-bold">❆Lattice</h1>
      </Link>
      <div className="flex items-center mr-4 gap-4 invisible md:visible">
        <Link to="/explore">
          <MdOutlineExplore className="text-2xl cursor-pointer" />
        </Link>

        <Link to="/bookmarks">
          <BsBookmark className="text-xl cursor-pointer" />
        </Link>

        <Link to="/notifications">
          <GrNotification className="text-xl cursor-pointer" />
        </Link>

        <Link to="/profile">
          <BiUser className="text-2xl cursor-pointer" />
        </Link>

        {isAuth ? (
          <button
            className="bg-red-400 px-4 py-1"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-amber-200 px-4 py-1">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export { Nav };
