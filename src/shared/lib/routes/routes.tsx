import Home from "../../../pages/home";
import First from "../../../pages/home/first";
import Second from "../../../pages/home/first/second";
import Third from "../../../pages/home/first/second/third";

export const ROUTES = [
  { path: "/", element: <Home />, name: "Home" },
  { path: "/first", element: <First />, name: "First" },
  { path: "/first/second", element: <Second />, name: "Second" },
  { path: "/first/second/third", element: <Third />, name: "Third" },
];