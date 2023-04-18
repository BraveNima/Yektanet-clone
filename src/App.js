// import react router dom libaries
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import componets
import { Login, SignIn } from "./components";

//import pages
import { Home, Root } from "./pages";

//css styles
import "./index.css";

const router = createBrowserRouter([
  //root page (home)
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Home />, index: true }],
  },

  // login page
  { path: "/login", element: <Login /> },
  // sign in page
  { path: "/signin", element: <SignIn /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
