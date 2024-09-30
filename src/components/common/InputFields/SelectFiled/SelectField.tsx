import { useState, ChangeEvent } from "react";
import classNames from "classnames";

import { Option, SelectFieldProps } from "../../../../types";

import styles from "./SelectFiled.module.scss";

const SelectField = ({
  className,
  disabled,
  id,
  label,
  name,
  onSelect,
  options,
  value,
}: SelectFieldProps) => {
  const [selectedOption, setSelectedOption] = useState<Option>(
    value ? value : { id: "0", text: "" }
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    onSelect?.(selectedId);
    const selectedText =
      options.find((option) => option.id === selectedId)?.text || "";
    setSelectedOption({ id: selectedId, text: selectedText });
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
        <select
          className="form-control form-control-lg"
          disabled={disabled}
          id={id}
          name={name}
          onChange={handleChange}
          value={selectedOption.id}
        >
          {options?.length > 0 ? (
            options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.text}
              </option>
            ))
          ) : (
            <option disabled>No options available</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default SelectField;
