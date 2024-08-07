
import { Route, Routes } from "react-router-dom";

import Home from "./home";
import Content from "./content";
import ContentItem from "./content/content-item";
import NotFound from "./not-found";
import Profile from "./profile";

export const Router = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<Home />} />
    <Route path="/content" element={<Content />} />
    <Route path="/content/:contentId" element={<ContentItem />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/404" element={<NotFound />} />
  </Routes>
);