import Form from "../../components/common/Form/Form";
import SelectField from "../../components/common/InputFields/SelectFiled/SelectField";
import TextField from "../../components/common/InputFields/TextField/TextField";
import { textInputType } from "../../enums";

const Profile = () => {
  const handleSubmit = () => {};
  const handleCancel = () => {};

  return (
    <Form
      id="profileForm"
      name="profileForm"
      title="Profile"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    >
      <SelectField
        id="profileComplex"
        label="Complex"
        name="profileComplex"
        options={[{ id: "1", text: "Plaza Tajin" }]}
      />
      <SelectField
        id="profileUnit"
        label="Unit"
        name="profileUnit"
        options={[{ id: "1", text: "431" }]}
      />
      <TextField
        id="profileFirstName"
        inputType={textInputType.text}
        label="First name"
        name="profileFirstName"
      />
      <TextField
        id="profileLastName"
        inputType={textInputType.text}
        label="Last name"
        name="profileLastName"
      />
      <TextField
        id="profileUsername"
        inputType={textInputType.text}
        label="Username"
        name="profileUsername"
      />
      <TextField
        id="profileEmail"
        inputType={textInputType.email}
        label="Email"
        name="profileEmail"
      />
      <TextField
        id="profilePhone1"
        inputType={textInputType.text}
        label="Phone 1"
        name="profilePhone1"
      />
      <TextField
        id="profilePhone2"
        inputType={textInputType.text}
        label="Phone 2"
        name="profilePhone2"
      />
    </Form>
  );
};

export default Profile;
