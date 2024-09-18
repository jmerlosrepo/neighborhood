import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import Complex from "./pages/Complex/Complex";
import Expenses from "./pages/Expenses/Expenses";
import Payments from "./pages/Payments/Payments";
import Profile from "./pages/Profile/Profile";
import Unit from "./pages/Unit/Unit";

import { userType } from "./enums";
import { User } from "./types";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    username: "jmerlosg",
    type: userType.manager,
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/users"
          element={
            isLoggedIn && user.type === userType.manager ? (
              <Users />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/complex"
          element={isLoggedIn ? <Complex /> : <Navigate to="/login" />}
        />
        <Route
          path="/unit"
          element={isLoggedIn ? <Unit /> : <Navigate to="/login" />}
        />
        <Route
          path="/expenses"
          element={isLoggedIn ? <Expenses /> : <Navigate to="/login" />}
        />
        <Route
          path="/payments"
          element={isLoggedIn ? <Payments /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default App;
