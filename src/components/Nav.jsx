import {useState} from "react"
import { BiUser } from "react-icons/bi";
import { userLogout } from "../features";
import { BsBookmark } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { MdOutlineExplore, MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {HiOutlineMenuAlt1} from "react-icons/hi"

const Nav = () => {
  const { authUser, isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [navToggle, setNavToggle] = useState(false);
  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/");
  };

  const handleNavToggle = () => {
    setNavToggle(prev=>!prev)
  }

  return (
    <nav className="relative flex items-center bg-amber-100 justify-between p-4">
      <Link to="/">
        <h1 className="text-xl cursor-pointer font-bold">❆Lattice</h1>
      </Link>
      <div className="md:flex items-center mr-4 gap-4 hidden">
        <Link to="/explore">
          <MdOutlineExplore className="text-2xl cursor-pointer" />
        </Link>

        <Link to={authUser ? "/bookmarks" : `/login`}>
          <BsBookmark className="text-xl cursor-pointer" />
        </Link>

        <Link to="/notifications">
          <GrNotification className="text-xl cursor-pointer" />
        </Link>

        <Link to={authUser ? `/profile/${authUser.username}` : `/login`}>
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
      {navToggle ? (
      <div className="flex items-center gap-4">
        <div className=" flex flex-col gap-2">
        <Link to="/explore" className="flex">
          <MdOutlineExplore className="text-2xl cursor-pointer" />
          Explore
        </Link>

        <Link to={authUser ? "/bookmarks" : `/login`} className="flex">
          <BsBookmark className="text-xl cursor-pointer" />
          Bookmarks
        </Link>

        <Link to="/notifications" className="flex">
          <GrNotification className="text-xl cursor-pointer" />
          Notifications
        </Link>

        <Link to={authUser ? `/profile/${authUser.username}` : `/login`} className="flex">
          <BiUser className="text-2xl cursor-pointer" />
          Profile
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
        <MdClose className="text-2xl" onClick={handleNavToggle} />
      </div>) :  <HiOutlineMenuAlt1 className="text-2xl block md:hidden" onClick={handleNavToggle} />}
    </nav>
  );
};

export { Nav };
