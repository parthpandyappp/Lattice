import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../features/usersSlice";

const BookMarks = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl">BookMarks</h1>
    </main>
  );
};

export { BookMarks };
