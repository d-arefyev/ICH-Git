import "./App.css";
import Display from "./components/Display";
import PostsList from "./components/Posts";
import LoginPage from "./pages/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Display />,
  },
  {
    path: "/posts",
    element: (
      <>
        <Display />
        <PostsList />
      </>
    ),
  },
  {
    path: "map",
    element: <div>Map Page</div>,
  },
  {
    path: "*",
    element: <div>Not Found page</div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
