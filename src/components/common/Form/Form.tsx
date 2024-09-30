import classNames from "classnames";
import { FormEvent } from "react";
import { FormProps } from "../../../types";
import FormButton from "../Buttons/FormButton/FormButton";
import { buttonType } from "../../../enums";

import styles from "./Form.module.scss";

const Form = ({
  children,
  disabled,
  id,
  name,
  onSubmit,
  title,
  onCancel,
}: FormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form
      className="container-fluid"
      id={id}
      name={name}
      onSubmit={handleSubmit}
    >
      <div>{title}</div>
      {children}

      <div
        className={classNames(
          "btn-group btn-group-lg",
          styles.buttonSectionSpacing
        )}
        role="group"
      >
        {onCancel && (
          <FormButton
            className="btn btn-secondary"
            disabled={disabled}
            label="Cancel"
            onButtonClick={onCancel}
            type={buttonType.button}
          />
        )}
        <FormButton
          className="btn btn-primary"
          disabled={disabled}
          label="Submit"
          type={buttonType.submit}
        />
      </div>
    </form>
  );
};

export default Form;
