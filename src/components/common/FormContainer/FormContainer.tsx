import { useState } from "react";
import { FormContainerProps } from "../../../types";

const FormContainer = ({
  children,
  header,
  onFormSubmit,
}: FormContainerProps) => {
  const [dataObj, setDataObj] = useState<Record<string, any>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElements = e.currentTarget.elements as HTMLFormControlsCollection;

    const formData: Record<string, any> = { ...dataObj };

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements.item(i) as HTMLInputElement;
      if (element.name) {
        formData[element.name] = element.value;
      }
    }

    setDataObj(formData);
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>{header}</div>
      {children}
    </form>
  );
};

export default FormContainer;
