import classNames from "classnames";
import { TableProps } from "../../../types";

import styles from "./Table.module.scss";

const Table = ({ headers, tableData, className }: TableProps) => {
  return (
    <table className={classNames(styles.defaultTable, className && className)}>
      <thead>
        <tr>
          <th colSpan={2}>{"Titulo"}</th>
        </tr>
        <tr>
          {headers.map((header: string) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((tData) => (
          <tr>
            {Object.values(tData).map((value) => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
