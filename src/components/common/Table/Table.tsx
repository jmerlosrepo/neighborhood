import TableRow from "./TableRow"; // Importa tu TableRow aquí
import { ComplexData } from "../../../types";

type TableProps = {
  data: ComplexData[];
  headers: string[];
};

const Table = ({ data, headers }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((complexInfo) => (
          <TableRow
            key={complexInfo.id}
            rowData={complexInfo} // Aquí pasas cada objeto `ComplexData` como `rowData`
            buttons={[
              <button
                key="edit"
                onClick={() => console.log("Edit", complexInfo.id)}
              >
                Edit
              </button>,
              <button
                key="delete"
                onClick={() => console.log("Delete", complexInfo.id)}
              >
                Delete
              </button>,
            ]}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
