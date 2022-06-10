import { getBookMarks } from "../features/bookMarksSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { PostCard } from "../components";
import notfound from "../assets/not-found.svg";

const BookMarks = () => {
  const { bookMarks } = useSelector((state) => state.bookMarks);
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookMarks({ authToken }));
  }, []);

  return BookMarks.length ? (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">BookMarks</h1>
      <div className="flex flex-col w-3/4 justify-center">
        {bookMarks && bookMarks.map((bookmark) => <PostCard data={bookmark} />)}
      </div>
    </main>
  ) : (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img className="w-32" src={notfound} alt="no-posts" />
      <p className="text-lg font-semibold">Nothing bookmarked yet</p>
    </div>
  );
};

export { BookMarks };
