
import { Route, Routes } from "react-router-dom";

import Home from "./home";
import NotFound from "./not-found";
import { ROUTES } from '../shared/lib/routes/routes'

export const Router = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<Home />} />
    <Route path="/404" element={<NotFound />} />
    {ROUTES.map(({ path, element }, index) => (
      <Route key={index} path={path} element={element} />
    ))}
  </Routes>
);