import { Link } from "react-router-dom";
const Login = () => {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center w-full h-screen">
      <div className="border-2 border-slate-600 w-3/8 p-3 rounded-md">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex flex-col mt-8">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            className="border border-slate-600 rounded-md py-1 w-5/6"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className="border border-slate-600 rounded-md py-1 w-5/6"
          />
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <button className="text-center w-full py-1 bg-amber-100">
            Login
          </button>
          <button className="text-center w-full py-1 bg-amber-100">
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
