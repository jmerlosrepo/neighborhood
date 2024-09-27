import { useState, useEffect, ChangeEvent } from "react";
import classNames from "classnames";

import { TextAreaProps } from "../../../../types";

import styles from "./TextArea.module.scss";

const TextArea = ({
  className,
  disabled,
  id,
  label,
  name,
  placeholderText,
  rows = 3,
  value,
}: TextAreaProps) => {
  const [inputValue, setInputVale] = useState<string>(value ? value : "");

  useEffect(() => {
    setInputVale(value ? value : "");
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputVale(e.target.value);
  };

  return (
    <div className={classNames(styles.defaultInputStyle, className)}>
      <label htmlFor={id}>
        {label}
        <textarea
          disabled={disabled}
          id={id}
          name={name}
          onChange={handleChange}
          placeholder={placeholderText ? placeholderText : ""}
          rows={rows}
          value={inputValue}
        ></textarea>
      </label>
    </div>
  );
};

export default TextArea;
