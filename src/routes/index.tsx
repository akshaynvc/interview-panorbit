import {
  Route,
  BrowserRouter as Router,
  Routes,
  RouteProps,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import HomePage from "../pages/home.page";
import Loader from "../components/base/loader";

const Profile = lazy(() => import("../pages/profile.page"));
const Posts = lazy(() => import("../pages/posts.page"));
const Gallery = lazy(() => import("../pages/gallery.page"));
const Todo = lazy(() => import("../pages/todo.page"));

const appRoutes: RouteProps[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
];

const Navigation = () => (
  <Router>
    <Routes>
      {appRoutes?.map((route: RouteProps) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<Suspense fallback={<Loader />}>{route.element}</Suspense>}
          />
        );
      })}
    </Routes>
  </Router>
);

export default Navigation;
