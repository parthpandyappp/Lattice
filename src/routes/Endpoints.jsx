import { Routes, Route } from "react-router-dom";
import { Home, Explore, BookMarks, Profile } from "../pages";
import { NotFound } from "../pages/NotFound";
const Endpoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/bookmarks" element={<BookMarks />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { Endpoints as Routes };
