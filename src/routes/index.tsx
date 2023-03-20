import {
  Route,
  BrowserRouter as Router,
  Routes,
  RouteProps,
} from "react-router-dom";
import HomePage from "../pages/homePage";
import ProfilePage from "../pages/profilePage";
import PostsPage from "../pages/postsPage";
import GalleryPage from "../pages/galleryPage";
import TodoPage from "../pages/todoPage";



const appRoutes: RouteProps[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile/:id",
    element: <ProfilePage />,
  },
  {
    path: "/posts/:id",
    element: <PostsPage />,
  },
  {
    path: "/gallery/:id",
    element: <GalleryPage />,
  },
  {
    path: "/todo/:id",
    element: <TodoPage />,
  },
];

const Navigation = () => (
  <Router>
    <Routes>
      {appRoutes?.map((route: RouteProps) => {
        return (
          <Route
            key={route.path}
            {...route}
          />
        );
      })}
    </Routes>
  </Router>
);

export default Navigation;
