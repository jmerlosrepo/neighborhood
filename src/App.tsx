import Form from "./components/common/Form/Form";

const App = () => {
  return (
    <Form
      id="Form1"
      name="Form1"
      title="From Test"
      hasCancelButton={false}
      onSubmit={() => {}}
    >
      {"HELLO"}
    </Form>
  );
};

export default App;
