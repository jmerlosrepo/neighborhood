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
