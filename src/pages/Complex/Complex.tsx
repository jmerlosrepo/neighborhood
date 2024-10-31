import { useEffect, useState } from "react";

import Form from "../../components/common/Form/Form";
import SelectField from "../../components/common/InputFields/SelectFiled/SelectField";
import TextField from "../../components/common/InputFields/TextField/TextField";
import TextArea from "../../components/common/InputFields/TextArea/TextArea";

import { textInputType, userType } from "../../enums";
import { ComplexData, User } from "../../types";

import styles from "./Complex.module.scss";
import Table from "../../components/common/Table/Table";
import CellButton from "../../components/common/CellButton/CellButton";

const Complex = () => {
  const [disabledForm, setDisabledForm] = useState<boolean>(false);
  const [complexData, setComplexData] = useState<ComplexData[]>([
    {
      city: "Mexico City",
      country: "Mexico",
      description: "Test Data",
      id: "1",
      number: "431",
      state: "Mexico City",
      street: "Plaza Tajin",
      units: 42,
    },
  ]);
  const [user, setUser] = useState<User>({
    username: "jmerlosg",
    type: userType.manager,
  });

  useEffect(() => {
    if (user.type === userType.manager) {
      setDisabledForm(false);
    } else {
      setDisabledForm(true);
    }
  }, [user.type]);

  const handleSubmit = () => {};
  const handleCancel = () => {};
  const handleEditTable = (id: string) => {};
  const handleDeleteTable = (id: string) => {};

  return (
    <div className={styles.page}>
      <Form
        id="complexForm"
        name="complexForm"
        title="Complex"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      >
        <TextField
          disabled={disabledForm}
          id="complexName"
          inputType={textInputType.text}
          label="Complex name"
          name="complexName"
        />
        <SelectField
          disabled={disabledForm}
          id="complexCountry"
          label="Country"
          name="complexCountry"
          options={[{ id: "1", text: "Mexico" }]}
        />
        <SelectField
          disabled={disabledForm}
          id="complexState"
          label="State"
          name="complexState"
          options={[{ id: "1", text: "Mexico City" }]}
        />
        <TextField
          disabled={disabledForm}
          id="complexCity"
          inputType={textInputType.text}
          label="City"
          name="complexCity"
        />
        <TextField
          disabled={disabledForm}
          id="complexStreet"
          inputType={textInputType.text}
          label="Street"
          name="complexStreet"
        />
        <TextField
          disabled={disabledForm}
          id="complexNumber"
          inputType={textInputType.text}
          label="Number"
          name="complexNumber"
        />
        <TextField
          disabled={disabledForm}
          id="complexNumberOfUnits"
          inputType={textInputType.number}
          label="Number of units"
          maxNumberSpan={100}
          name="complexNumberOfUnits"
        />
        <TextArea
          disabled={disabledForm}
          id="complexDescription"
          name="complexDescription"
          label="Description"
        />
      </Form>

      <Table
        headers={[
          "Complex Id",
          "Address",
          "Country",
          "State",
          "City",
          "Units",
          "Description",
        ]}
        data={complexData} // Aquí pasas el array de ComplexData
      />
    </div>
  );
};

export default Complex;
