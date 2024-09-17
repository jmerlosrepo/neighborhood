import { FormEvent, ReactNode } from "react";
import { buttonType, textInputType } from "./enums";

export type ButtonProps = {
  className?: string;
  label: string;
  onButtonClick?: () => void;
  type: buttonType;
};

export type FormContainerProps = {
  children: React.ReactNode;
  header: string;
  onFormSubmit: (e: FormEvent) => void;
};

export type TextFieldProps = {
  className?: string;
  id: string;
  inputType: textInputType;
  isShowClearText: boolean;
  label: string;
  name: string;
  value: string;
};

export type NavbarProps = {
  children: React.ReactNode;
  className?: string;
};

export type NavbarButtonProps = {
  className?: string;
  text: string;
  to: string;
};

export type TableProps = {
  className?: string;
  headers: string[];
  tableData: { [value: string]: string }[];
};

export type SliderProps = {
  onChange?: (checked: boolean) => void;
};

export type FormProps = {
  children: ReactNode;
  hasCancelButton?: boolean;
  id: string;
  name: string;
  onCancel?: () => void;
  onSubmit: (e: FormEvent) => void;
  title: string;
};
