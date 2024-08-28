import classNames from "classnames";

import { Link } from "react-router-dom";

import { NavbarButtonProps } from "../../../../types";

const NavbarButton = ({ text, to, className }: NavbarButtonProps) => {
  return (
    <li className={classNames(className)}>
      <Link to={to}>{text}</Link>
    </li>
  );
};

export default NavbarButton;
