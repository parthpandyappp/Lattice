const Signup = () => {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center w-full h-screen">
      <div className="border-2 border-slate-600 w-3/8 p-3 rounded-md">
        <h1 className="text-2xl font-bold">Sign up</h1>
        <div className="flex flex-col mt-8">
          <label htmlFor="fname">Name</label>
          <input
            name="fname"
            type="text"
            className="border border-slate-600 rounded-md py-1 w-5/6"
          />
        </div>
        <div className="flex flex-col mt-5">
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
        <div className="flex flex-col mt-5">
          <label htmlFor="c-password">Confirm Password</label>
          <input
            name="c-password"
            type="password"
            className="border border-slate-600 rounded-md py-1 w-5/6"
          />
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <button className="text-center w-full py-1 bg-amber-100">
            Sign up
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mt-3">
          <p className="flex mt-3 text-base">
            Already have an account?
            <span className="underline cursor-pointer"> Log in</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export { Signup };
