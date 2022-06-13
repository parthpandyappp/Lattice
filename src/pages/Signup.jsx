import { useState } from "react";
import { userSignup } from "../features";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [creds, setCreds] = useState({
    username: "",
    password: "",
    firstName: "",
    email: "",
  });

  return (
    <main className="flex flex-col md:flex-row justify-center items-center w-full h-screen">
      <div className="border-2 border-slate-600 w-3/8 p-3 rounded-md">
        <h1 className="text-2xl font-bold">Sign up</h1>
        <div className="flex flex-col mt-8">
          <label htmlFor="fname" className="font-medium">
            Display Name
          </label>
          <input
            name="fname"
            type="text"
            className="border-2 border-slate-600 rounded-md py-1 w-full px-2 bg-amber-50"
            onChange={(e) =>
              setCreds((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="email" className="font-medium">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="border-2 border-slate-600 rounded-md py-1 w-full  px-2 bg-amber-50"
            onChange={(e) =>
              setCreds((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="border-2 border-slate-600 rounded-md py-1 w-full  px-2 bg-amber-50"
            onChange={(e) =>
              setCreds((prev) => ({ ...prev, email: e.target.value }))
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
        <div className="flex flex-col mt-5">
          <label htmlFor="c-password" className="font-medium">
            Confirm Password
          </label>
          <input
            name="c-password"
            type="password"
            className="border-2 border-slate-600 rounded-md py-1 w-full  px-2 bg-amber-50"
          />
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <button
            className="text-center w-full py-1 bg-amber-100"
            onClick={() => {
              dispatch(
                userSignup({
                  username: creds.username,
                  password: creds.password,
                  firstName: creds.firstName,
                })
              );
              navigate("/explore");
            }}
          >
            Sign up
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mt-3">
          <p className="flex mt-3 text-base">
            Already have an account?
            <Link to="/login">
              <span className="underline cursor-pointer"> Log in</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export { Signup };
