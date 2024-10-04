import { CellSliderProps } from "../../../types";
import Slider from "../InputFields/Slider/Slider";

const CellSLider = ({ colsSpan, onCellSliderChange }: CellSliderProps) => {
  return (
    <td colSpan={colsSpan}>
      <Slider onChange={onCellSliderChange} />
    </td>
  );
};

export default CellSLider;
