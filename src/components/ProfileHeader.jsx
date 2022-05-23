const ProfileHeader = () => {
  return (
    <div className="w-full md:shadow mb-12">
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://picsum.photos/100"
          className="border-4 border-amber-100 rounded-full"
          alt="profile"
        />
        <div className="text-center">
          <p className="text-sm">@jamestwitch</p>
          <p className="text-medium font-semibold">James Twitch</p>
          <p className="mt-3 text-base">
            Ex-Microsoft | Ex-Twitter, Loves to read & sing.
          </p>
          <div className="flex justify-between mt-5">
            <div className="flex flex-col">
              <p>25</p>
              <p className="font-semibold">Post</p>
            </div>
            <div className="flex flex-col">
              <p>6M</p>
              <p className="font-semibold">Followers</p>
            </div>
            <div className="flex flex-col">
              <p>0</p>
              <p className="font-semibold">Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfileHeader };
