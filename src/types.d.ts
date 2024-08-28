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
  className: string;
  id: string;
  inputType: textInputType;
  isShowClearText: boolean;
  label: string;
  name: string;
  value: string;
};

export type NavbarProps = {
  children: React.ReactNode;
  className: string;
};

export type NavbarButtonProps = {
  className: string;
  to: string;
  text: string;
};
