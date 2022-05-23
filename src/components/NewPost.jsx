const NewPost = () => {
  return (
    <div className="grid grid-cols-8 w-full shadow p-3 rounded mb-12">
      <img
        className="col-span-1 p-1 rounded-full"
        src="https://picsum.photos/50"
        alt="user"
      />
      <div className="col-start-2 col-span-8 p-3">
        <textarea
          name="new-post"
          className="font-bold text-zinc-400 focus:outline-none w-full h-26 bg-amber-50"
          placeholder="What's new today?"
        ></textarea>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <p className="text-xl">😉</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="">250</p>
            <button className="bg-amber-100 px-8 py-2 rounded font-medium">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewPost };
