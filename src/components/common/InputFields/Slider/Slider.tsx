import { useState } from "react";
import styles from "./Slider.module.scss";
import { SliderProps } from "../../../../types";

const Slider = ({ onChange }: SliderProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
    onChange?.(checked);
  };

  return (
    <label className={styles.slider}>
      <input
        checked={checked}
        onChange={handleChange}
        className={styles.sliderInput}
        type="checkbox"
      />
      <span className={styles.sliderTrack}></span>
      <span className={styles.sliderThumb}></span>
    </label>
  );
};

export default Slider;
