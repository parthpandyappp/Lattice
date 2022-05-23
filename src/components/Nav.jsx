import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { GrNotification } from "react-icons/gr";
import { BiUser } from "react-icons/bi";

const Nav = () => {
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

        <Link to="/login">
          <button className="bg-amber-200 px-4 py-1">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export { Nav };
