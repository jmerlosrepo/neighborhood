import { FormEvent, ReactNode } from "react";
import { buttonType, textInputType, userType } from "./enums";

export type ButtonProps = {
  className?: string;
  disabled?: boolean;
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
  disabled?: boolean;
  id: string;
  inputType: textInputType;
  isShowClearText?: boolean;
  label: string;
  maxNumberSpan?: number;
  placeholderText?: string;
  name: string;
  value?: string;
};

export type TextAreaProps = {
  className?: string;
  disabled?: boolean;
  id: string;
  label: string;
  name: string;
  placeholderText?: string;
  rows?: number;
  value?: string;
};

export type Option = { id: string; text: string };

export type SelectFieldProps = {
  className?: string;
  disabled?: boolean;
  id: string;
  label: string;
  name: string;
  onSelect?: (value: string) => void;
  options: Option[];
  value?: OPtion;
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
  disabled?: boolean;
  id: string;
  name: string;
  onCancel?: () => void;
  onSubmit: (e: FormEvent) => void;
  title: string;
};

export type User = {
  username: string;
  type: userType;
};

export type News = {
  id: string;
  title: string;
  image?: string;
  description: string;
};

export type LatestNewsProps = {
  news: News[];
};
