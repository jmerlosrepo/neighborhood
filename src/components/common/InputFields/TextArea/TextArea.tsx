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
    <div
      className={classNames(
        "form-group row",
        styles.defaultInputStyle,
        className
      )}
    >
      <label htmlFor={id}>{label}</label>
      <div className="col-sm-10">
        <textarea
          className="form-control form-control-lg"
          disabled={disabled}
          id={id}
          name={name}
          onChange={handleChange}
          placeholder={placeholderText ? placeholderText : ""}
          rows={rows}
          value={inputValue}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
