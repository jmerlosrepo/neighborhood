import { FormEvent, useState, useEffect } from "react";
import Form from "../../components/common/Form/Form";
import TextField from "../../components/common/InputFields/TextField/TextField";
import { textInputType } from "../../enums";

const Login = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleSubmit = (e: FormEvent<Element>) => {
    const form = e.target as HTMLFormElement;

    const loginUsername = form.elements.namedItem(
      "loginUsername"
    ) as HTMLInputElement;

    const loginPassword = form.elements.namedItem(
      "loginPassword"
    ) as HTMLInputElement;

    setUserData({
      username: loginUsername.value,
      password: loginPassword.value,
    });
  };

  const handleCancel = () => {};

  useEffect(() => {}, [userData]);

  return (
    <Form
      hasCancelButton={true}
      id="loginForm"
      name="loginForm"
      onCancel={handleCancel}
      onSubmit={handleSubmit}
      title="Login"
    >
      <TextField
        id="loginUsername"
        inputType={textInputType.text}
        label="Username"
        name="loginUsername"
      />
      <TextField
        id="loginPassword"
        inputType={textInputType.password}
        label="Password"
        name="loginPassword"
      />
    </Form>
  );
};

export default Login;
