import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import landing from "../assets/landing.png";
import { getAllUsers } from "../features/usersSlice";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const { users } = useSelector((state) => state.users);
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const reSignUp = async () => {
    try {
      const { username, password, firstName } = JSON.parse(
        localStorage.getItem("lattice-user")
      );
      await axios({
        method: "POST",
        url: "/api/auth/signup",
        data: {
          username: username,
          password: password,
          firstName: firstName,
          avatar: "",
          bio: "",
        },
      });
      dispatch(getAllUsers({ authToken }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("lattice-user") && users.length === 2) {
      reSignUp();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <main className="flex flex-col md:flex-row justify-center items-center w-full min-h-screen">
      <div className="flex justify-center w-1/2">
        <img src={landing} className="w-96 object-cover" alt="landing" />
      </div>

      <div className="flex flex-col items-center justify-center w-3/5">
        <div className="flex justify-items-start flex-col">
          <h1 className="text-3xl md:text-5xl text-center font-bold">
            ❆Lattice
          </h1>
          <p className="justify-self-start text-base mt-3 text-center md:text-left">
            A virtual co-ordinate space to connect and share with your peers
            about your daily classy experiences or anything which you want to
            share or ask in the form of micro-blogs.
          </p>

          <p className="justify-self-start text-base mt-3 text-center md:text-left">
            Form your own mesh community at Lattice❄
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center mt-14 gap-3">
            <Link to="/explore">
              <button className="bg-amber-100 px-6 py-3 rounded font-semibold">
                Get Started
              </button>
            </Link>
            <button className="border border-slate-600 px-6 py-2 rounded flex items-center justify-center font-semibold">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                alt="github"
              />
              GitHub
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Home };
