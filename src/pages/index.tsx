import { createBrowserRouter } from "react-router-dom";

import AuthRedirect from "./AuthRedirect/AuthRedirect";
import AuthorizedUsers from "./AuthorizedUsers/AuthorizedUsers";
import Dashboard from "./Dashboard/Dashboard";
import Error from "./Error/Error";
import Landing from "./Landing/Landing";
import Layout from "./Layout/Layout";
import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import Register from "./Register/Register";
import Users from "./Users/Users";
import Complex from "./Complex/Complex";
import Unit from "./Unit/Unit";
import Payments from "./Payments/Payments";
import Expenses from "./Expenses/Expenses";
import Profile from "./Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/login",
        element: (
          <AuthRedirect>
            <Login />
          </AuthRedirect>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        element: <AuthorizedUsers />,
        children: [
          {
            path: "/logout",
            element: <Logout />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/complex",
            element: <Complex />,
          },
          {
            path: "/unit",
            element: <Unit />,
          },
          {
            path: "/expenses",
            element: <Expenses />,
          },
          {
            path: "/payments",
            element: <Payments />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

export default router;
