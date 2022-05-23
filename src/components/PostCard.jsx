import { IoIosArrowUp } from "react-icons/io";
import { BiComment } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
const PostCard = () => {
  return (
    <div className="grid grid-cols-8 w-full shadow p-3 rounded mb-3">
      <img
        className="col-span-1 p-1 rounded-full"
        src="https://picsum.photos/70"
        alt="user"
      />
      <div className="col-start-2 col-span-8 p-1">
        <p className="font-bold text-sm md:text-base">James Twitch</p>
        <p className="text-xs md:text-sm">
          Ex-Microsoft | Ex-Twitter, Loves to read & sing.
        </p>
        <p className="mt-2 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          perferendis architecto id recusandae, ea delectus a facilis quisquam
          vero fugit culpa et explicabo rem libero, minima sapiente. Officia,
          odit numquam.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <IoIosArrowUp className="cursor-pointer text-3xl text-green-500" />
          <BiComment className="cursor-pointer text-2xl" />
          <BsBookmark className="text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export { PostCard };
