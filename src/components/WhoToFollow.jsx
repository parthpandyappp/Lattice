const WhoToFollow = () => {
  return (
    <div className="flex flex-col gap-5 shadow w-3/4 md:w-1/4 rounded justify-center p-3">
      <p className="text-center font-bold underline underline-offset-1">
        Who to follow
      </p>
      <div className="flex flex-col gap-4 flex-start items-center content-start">
        <div className="flex flex-col gap-3 text-left">
          <p className="flex gap-1 text-sm items-center font-medium">
            <img
              src="https://picsum.photos/35"
              className="rounded-full"
              alt="user-profile"
            />
            @parthpandyappp
          </p>
          <p className="flex gap-1 text-sm items-center font-medium">
            <img
              src="https://picsum.photos/35"
              className="rounded-full"
              alt="user-profile"
            />
            @herkuch
          </p>
          <p className="flex gap-1 text-sm items-center font-medium">
            <img
              src="https://picsum.photos/35"
              className="rounded-full"
              alt="user-profile"
            />
            @logan1x
          </p>
        </div>
      </div>
    </div>
  );
};

export { WhoToFollow };
