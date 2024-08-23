import classNames from "classnames";
import { ButtonProps } from "../../../../types";

import styles from "./FormButton.module.scss";

const FormButton = ({ label, className, onButtonClick }: ButtonProps) => {
  const handleOnClick = () => {
    onButtonClick();
  };

  return (
    <button
      onClick={handleOnClick}
      className={classNames(styles.button, { [className]: className })}
    >
      {label}
    </button>
  );
};

export default FormButton;
