import backpack from "../assets/backpack.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <img src={backpack} alt="backpack-404" className="w-72" />
      <p className="flex text-xl mt-3">
        You're lost, pack your bag & Go
        <Link to="/">
          <span className="underline underline-offset-4"> Home</span>
        </Link>
      </p>
    </main>
  );
};

export { NotFound };
