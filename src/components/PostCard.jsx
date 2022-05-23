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
        <div className="flex gap-3 mt-3">
          <img
            className="cursor-pointer"
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/30/000000/external-up-arrows-those-icons-lineal-those-icons.png"
            alt="util-icons"
          />
          <img
            className="cursor-pointer"
            src="https://img.icons8.com/ios/30/000000/topic.png"
            alt="util-icons"
          />
          <img
            className="cursor-pointer"
            src="https://img.icons8.com/external-phatplus-lineal-phatplus/30/000000/external-bookmarks-essential-phatplus-lineal-phatplus.png"
            alt="util-icons"
          />
        </div>
      </div>
    </div>
  );
};

export { PostCard };
