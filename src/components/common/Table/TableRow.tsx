import { ComplexData } from "../../../types";

type TableRowProps = {
  rowData: ComplexData;
  buttons?: React.ReactNode[];
};

const TableRow = ({ rowData, buttons }: TableRowProps) => {
  return (
    <tr>
      {Object.values(rowData).map((value, index) => (
        <td key={index}>{value}</td>
      ))}
      {buttons && buttons.map((button, index) => <td key={index}>{button}</td>)}
    </tr>
  );
};

export default TableRow;
