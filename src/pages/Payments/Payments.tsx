import Form from "../../components/common/Form/Form";
import SelectField from "../../components/common/InputFields/SelectFiled/SelectField";
import TextArea from "../../components/common/InputFields/TextArea/TextArea";
import TextField from "../../components/common/InputFields/TextField/TextField";
import { textInputType } from "../../enums";

const Payments = () => {
  const handleSubmit = () => {};
  const handleCancel = () => {};

  return (
    <Form
      id="paymentsForm"
      name="paymentsForm"
      title="Payments"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    >
      <SelectField
        id="paymentsComplex"
        label="Complex"
        name="paymentsComplex"
        options={[{ id: "1", text: "Plaza Tajin" }]}
      />
      <SelectField
        id="paymentsUnit"
        label="Unit"
        name="paymentsUnit"
        options={[{ id: "1", text: "431" }]}
      />
      <TextField
        disabled={true}
        id="paymentsNeighbor"
        inputType={textInputType.text}
        label="Neighbor"
        name="paymentsNeighbor"
      />
      <TextField
        id="paymentsAmount"
        inputType={textInputType.number}
        label="Amount"
        maxNumberSpan={100000}
        name="paymentsAmount"
      />
      <TextField
        id="paymentsDate"
        inputType={textInputType.date}
        label="Date"
        name="paymentsDate"
      />
      <TextArea
        id="paymentsDescription"
        name="paymentsDescription"
        label="Description"
      />
    </Form>
  );
};

export default Payments;
