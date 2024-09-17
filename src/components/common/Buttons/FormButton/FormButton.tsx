import classNames from "classnames";
import { ButtonProps } from "../../../../types";

import styles from "./FormButton.module.scss";

const FormButton = ({
  label,
  className,
  onButtonClick = () => {},
  type,
}: ButtonProps) => {
  const handleOnClick = () => {
    onButtonClick();
  };

  return (
    <button
      type={type}
      onClick={handleOnClick}
      className={classNames(styles.button, className && className)}
    >
      {label}
    </button>
  );
};

export default FormButton;
