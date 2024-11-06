import { useState } from "react";
import classNames from "classnames";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import NavbarButton from "../../components/common/Buttons/NavbarButton/NavbarButton";

import { userType } from "../../enums";
import { User } from "../../types";

import styles from "./Layout.module.scss";

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [user, setUser] = useState<User>({
    username: "jmerlosg",
    type: userType.manager,
  });

  return (
    <div className={classNames("container-fluid", styles.viewport)}>
      <Navbar className={styles.horizontalNavbar} branding="NEIGHBORHOOD">
        {!isLoggedIn && <NavbarButton text="Landing" to="/" />}

        {isLoggedIn ? (
          <NavbarButton text="Log Out" to="/logout" />
        ) : (
          <NavbarButton text="Log In" to="/login" />
        )}

        {!isLoggedIn && <NavbarButton text="Register" to="/register" />}
      </Navbar>
      <div className={classNames(styles.page)}>
        {isLoggedIn && (
          <div className={classNames("container-fluid", styles.pagePanelLeft)}>
            <Navbar className={styles.verticalNavbar}>
              <NavbarButton text="Dashboard" to="/dashboard" />
              <NavbarButton text="Complex" to="/complex" />
              <NavbarButton text="Unit" to="/unit" />
              <NavbarButton text="Payments" to="/payments" />
              {user.type === userType.manager && (
                <NavbarButton text="Expenses" to="/expenses" />
              )}
              <NavbarButton text="Profile" to="/profile" />
            </Navbar>
          </div>
        )}
        <div className={styles.pagePanelRight}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
