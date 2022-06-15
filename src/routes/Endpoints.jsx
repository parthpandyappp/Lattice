import { NotFound } from "../pages/NotFound";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  BookMarks,
  Profile,
  Signup,
  Login,
  SinglePost,
} from "../pages";

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/bookmarks" element={<BookMarks />} />
      <Route path="/post/:postId" element={<SinglePost />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { Endpoints as Routes };
