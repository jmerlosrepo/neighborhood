import { FormEvent } from "react";
import { FormProps } from "../../../types";
import FormButton from "../Buttons/FormButton/FormButton";
import { buttonType } from "../../../enums";

const Form = ({
  children,
  disabled,
  hasCancelButton,
  id,
  name,
  onSubmit,
  title,
  onCancel = () => {},
}: FormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form id={id} name={name} onSubmit={handleSubmit}>
      <div>{title}</div>
      {children}
      <div>
        {hasCancelButton && (
          <FormButton
            disabled={disabled}
            label="Cancel"
            onButtonClick={onCancel}
            type={buttonType.button}
          />
        )}
        <FormButton
          disabled={disabled}
          label="Submit"
          type={buttonType.submit}
        />
      </div>
    </form>
  );
};

export default Form;
