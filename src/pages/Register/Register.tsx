import { FormEvent, useState, useEffect } from "react";
import { textInputType } from "../../enums";
import Form from "../../components/common/Form/Form";
import TextField from "../../components/common/InputFields/TextField/TextField";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleCancel = () => {};
  const handleSubmit = (e: FormEvent<Element>) => {
    const form = e.target as HTMLFormElement;

    const registerUsername = form.elements.namedItem(
      "registerUsername"
    ) as HTMLInputElement;

    const registerPassword = form.elements.namedItem(
      "registerPassword"
    ) as HTMLInputElement;

    const registerEmail = form.elements.namedItem(
      "registerEmail"
    ) as HTMLInputElement;

    setUserData({
      username: registerUsername.value,
      password: registerPassword.value,
      email: registerEmail.value,
    });
  };

  useEffect(() => {}, [userData]);

  return (
    <Form
      hasCancelButton={true}
      id="registerForm"
      name="registerForm"
      onCancel={handleCancel}
      onSubmit={handleSubmit}
      title="Register"
    >
      <TextField
        id="registerEmail"
        inputType={textInputType.text}
        label="Email"
        name="registerEmail"
      />
      <TextField
        id="registerUsername"
        inputType={textInputType.text}
        label="Username"
        name="registerUsername"
      />
      <TextField
        id="registerPassword"
        inputType={textInputType.password}
        label="Password"
        name="registerPassword"
      />
      <TextField
        id="registerConfirmPassword"
        inputType={textInputType.password}
        label="Confirm Password"
        name="registerConfirmPassword"
      />
    </Form>
  );
};

export default Register;
