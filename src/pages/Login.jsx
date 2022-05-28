import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../features/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });
  return (
    <main className="flex flex-col md:flex-row justify-center items-center w-full h-screen">
      <div className="border-2 border-slate-600 w-3/8 p-3 rounded-md">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex flex-col mt-8">
          <label htmlFor="email" className="font-medium">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="border-2 border-slate-600 rounded-md py-1 w-full px-2 bg-amber-50"
            onChange={(e) =>
              setCreds((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="border-2 border-slate-600 rounded-md py-1 w-full  px-2 bg-amber-50"
            onChange={(e) =>
              setCreds((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <button
            className="text-center w-full py-1 bg-amber-100"
            onClick={() => {
              dispatch(
                userLogin({
                  username: creds.username,
                  password: creds.password,
                })
              );
              navigate("/explore");
            }}
          >
            Login
          </button>
          <button
            className="text-center w-full py-1 bg-amber-100"
            onClick={() => {
              dispatch(
                userLogin({ username: "testcool", password: "test123" })
              );
              navigate("/explore");
            }}
          >
            Test credentials
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mt-3">
          <span className="flex items-center gap-2">
            <input type="checkbox" />
            <p className="text-sm">Remember me?</p>
          </span>
          <p className="flex mt-3 text-base">
            Don't have an account?
            <Link to="/signup">
              <span className="underline cursor-pointer"> Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export { Login };
