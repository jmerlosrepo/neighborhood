import classNames from "classnames";

import { NavbarProps } from "../../types";

const Navbar = ({ children, className }: NavbarProps) => {
  return (
    <nav className={classNames(className)}>
      <ul>{children}</ul>
    </nav>
  );
};

export default Navbar;
