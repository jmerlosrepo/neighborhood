import classNames from "classnames";
import { ButtonProps } from "../../../../types";

import styles from "./FormButton.module.scss";

const FormButton = ({
  className,
  disabled,
  label,
  onButtonClick = () => {},
  type,
}: ButtonProps) => {
  const handleOnClick = () => {
    onButtonClick();
  };

  return (
    <button
      className={classNames(styles.button, className && className)}
      disabled={disabled}
      onClick={handleOnClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default FormButton;
