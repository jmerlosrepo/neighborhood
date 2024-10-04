import FormButton from "../Buttons/FormButton/FormButton";
import { buttonType } from "../../../enums";
import { CellButtonProps } from "../../../types";

const CellButton = ({
  className,
  colsSpan,
  disabled,
  label,
  onCellButtonClick,
}: CellButtonProps) => {
  return (
    <td colSpan={colsSpan}>
      <FormButton
        className={className}
        disabled={disabled}
        label={label}
        type={buttonType.button}
        onButtonClick={onCellButtonClick}
      />
    </td>
  );
};

export default CellButton;
