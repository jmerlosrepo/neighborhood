import { useState, useEffect } from "react";
import classNames from "classnames";

import { TextFieldProps } from "../../../../types";
import { textInputType } from "../../../../enums";

import styles from "./TextField.module.scss";

const TextField = ({
  className,
  id,
  inputType,
  isShowClearText,
  label,
  name,
  value,
}: TextFieldProps) => {
  const [inputValue, setInputVale] = useState<string>(value);
  const [showText, setShowText] = useState<boolean>(false);

  useEffect(() => {
    setInputVale(value);
  }, [value]);

  useEffect(() => {
    setShowText(isShowClearText);
  }, [isShowClearText]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVale(e.target.value);
  };

  return (
    <div
      className={classNames(styles.defaultInputStyle, {
        [className]: className,
      })}
    >
      <label htmlFor={id}>
        {label}
        <input
          type={inputType}
          id={id}
          name={name}
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      {inputType === textInputType.password && (
        <input
          className={classNames({
            [styles.passwordCheckboxOn]: showText,
            [styles.passwordCheckboxOff]: !showText,
          })}
          type="checkbox"
          checked={showText}
        />
      )}
    </div>
  );
};

export default TextField;
