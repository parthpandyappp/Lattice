import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex bg-amber-100 justify-between p-4">
      <Link to="/">
        <h1 className="text-xl cursor-pointer font-bold">❆Lattice</h1>
      </Link>
      <div className="flex mr-4 gap-4 invisible md:visible">
        <img
          className="cursor-pointer"
          src="https://img.icons8.com/ios/30/000000/compass--v1.png"
          alt="nav-icons"
        />
        <img
          className="cursor-pointer"
          src="https://img.icons8.com/material-outlined/30/000000/bookmark-ribbon--v1.png"
          alt="nav-icons"
        />
        <img
          className="cursor-pointer"
          src="https://img.icons8.com/ios/30/000000/appointment-reminders--v1.png"
          alt="nav-icons"
        />
        <Link to="/profile">
          <img
            className="cursor-pointer"
            src="https://img.icons8.com/wired/30/000000/circled-user.png"
            alt="nav-icons"
          />
        </Link>
        <Link to="/login">
          <button className="bg-amber-200 px-4 py-1">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export { Nav };
