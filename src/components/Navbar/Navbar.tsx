import classNames from "classnames";

import { NavbarProps } from "../../types";

import styles from "./Navbar.module.scss";

const Navbar = ({ children, className, branding }: NavbarProps) => {
  return (
    <nav className={classNames(className)}>
      <div className={styles.branding}></div>
      <ul>{children}</ul>
    </nav>
  );
};

export default Navbar;
