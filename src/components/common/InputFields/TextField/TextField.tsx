import { useState, useEffect, ChangeEvent } from "react";
import classNames from "classnames";

import { TextFieldProps } from "../../../../types";
import { textInputType } from "../../../../enums";

import styles from "./TextField.module.scss";

const TextField = ({
  className,
  disabled = false,
  id,
  inputType,
  isShowClearText = false,
  label,
  maxNumberSpan,
  placeholderText,
  name,
  value,
}: TextFieldProps) => {
  const [inputValue, setInputVale] = useState<string>(value ? value : "");
  const [showText, setShowText] = useState<boolean>(isShowClearText);

  useEffect(() => {
    setInputVale(value ? value : "");
  }, [value]);

  useEffect(() => {
    setShowText(isShowClearText);
  }, [isShowClearText]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVale(e.target.value);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowText(e.target.checked);
  };

  return (
    <div className={classNames(styles.defaultInputStyle, className)}>
      <label htmlFor={id}>
        {label}
        <input
          disabled={disabled}
          id={id}
          name={name}
          onChange={handleChange}
          placeholder={placeholderText ? placeholderText : ""}
          type={!showText ? inputType : "text"}
          value={inputValue}
          min={0}
          max={maxNumberSpan}
        />
      </label>
      {inputType === textInputType.password && (
        <input
          className={classNames({
            [styles.passwordCheckboxOn]: showText,
            [styles.passwordCheckboxOff]: !showText,
          })}
          disabled={disabled}
          type="checkbox"
          checked={showText}
          onChange={handleCheckboxChange}
        />
      )}
    </div>
  );
};

export default TextField;
