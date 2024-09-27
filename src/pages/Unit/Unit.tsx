import { useState, useEffect } from "react";
import { User } from "../../types";
import { textInputType, userType } from "../../enums";

import Form from "../../components/common/Form/Form";
import TextField from "../../components/common/InputFields/TextField/TextField";
import TextArea from "../../components/common/InputFields/TextArea/TextArea";
import SelectField from "../../components/common/InputFields/SelectFiled/SelectField";

const Unit = () => {
  const [disabledForm, setDisabledForm] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    username: "jmerlosg",
    type: userType.manager,
  });

  useEffect(() => {
    if (user.type === userType.manager) {
      setDisabledForm(true);
    } else {
      setDisabledForm(false);
    }
  }, [user.type]);

  const handleSubmit = () => {};

  const handleCancel = () => {};
  console.log("#### disabledForm", disabledForm);
  return (
    <Form
      hasCancelButton={true}
      disabled={disabledForm}
      id="unitForm"
      name="unitForm"
      onCancel={handleCancel}
      onSubmit={handleSubmit}
      title="Unit"
    >
      <SelectField
        disabled={disabledForm}
        id="unitComplex"
        label="Complex"
        name="initComplex"
        options={[{ id: "1", text: "Plaza Tajin" }]}
      />
      <TextField
        disabled={disabledForm}
        id="unitNumber"
        inputType={textInputType.text}
        label="Unit number"
        name="unitNumber"
      />
      <TextArea
        disabled={disabledForm}
        id="unitDescription"
        name="unitDescription"
        label="Description"
      />
    </Form>
  );
};

export default Unit;
