import { useEffect } from "react";
import { PostCard } from "../components";
import { getBookMarks } from "../features";
import notfound from "../assets/not-found.svg";
import { useSelector, useDispatch } from "react-redux";

const BookMarks = () => {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const { bookMarks, bookMarksLoading } = useSelector(
    (state) => state.bookmarks
  );

  useEffect(() => {
    bookMarksLoading && dispatch(getBookMarks({ authToken }));
    // eslint-disable-next-line
  }, [dispatch, authToken, bookMarksLoading]);

  return bookMarks.length ? (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">BookMarks</h1>
      <div className="flex flex-col w-3/4 justify-center">
        {bookMarks &&
          bookMarks.map((bookmark) => (
            <PostCard key={bookmark._id} data={bookmark} from="bookmarks" />
          ))}
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
