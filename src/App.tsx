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
import Navbar from "./components/Navbar/Navbar";
import NavbarButton from "./components/common/Buttons/NavbarButton/NavbarButton";
import Logout from "./pages/Logout/Logout";

import { userType } from "./enums";
import { User } from "./types";

import styles from "./App.module.scss";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    username: "jmerlosg",
    type: userType.neighbor,
  });

  return (
    <div>
      <Navbar>
        {!isLoggedIn && <NavbarButton text="Landing" to="/" />}
        {isLoggedIn && (
          <>
            <NavbarButton text="Dashboard" to="/dashboard" />
            <NavbarButton text="Complex" to="/complex" />
            <NavbarButton text="Unit" to="/unit" />
            <NavbarButton text="Payments" to="/payments" />
            {user.type === userType.manager && (
              <NavbarButton text="Expenses" to="/expenses" />
            )}
            <NavbarButton text="Profile" to="/profile" />
          </>
        )}
        {isLoggedIn ? (
          <NavbarButton text="Log Out" to="/logout" />
        ) : (
          <NavbarButton text="Log In" to="/login" />
        )}

        <NavbarButton text="Register" to="/register" />
      </Navbar>
      <div className={styles.page}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Logout />} />
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
      </div>
    </div>
  );
};

export default App;
