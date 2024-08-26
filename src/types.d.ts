import { textInputType } from "./enums";

export type ButtonProps = {
  className: string;
  label: string;
  onButtonClick: Function;
};

export type FormContainerProps = {
  children: React.ReactNode;
  header: string;
  onFormSubmit: Function;
};

export type TextFieldProps = {
  id: string;
  name: string;
  label: string;
  className: string;
  inputType: textInputType;
  value: string;
  isShowClearText: boolean;
};
