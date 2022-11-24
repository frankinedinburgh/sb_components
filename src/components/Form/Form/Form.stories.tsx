import Form from ".";
import Button from "../../Button";
import Stack from "../../Containers/Stack";
import InputField from "../InputField";
import TextAreaField from "../TextArea";

export default {
  title: "Form/Form",
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  onSubmit: (evt) => console.log(JSON.stringify(evt.target)),
  children: (
    <Stack direction="column" spacing={3}>
      <Stack direction="column" spacing={3}>
        <div>
          <label htmlFor="date">Select Date:</label>
          <input type="date" id="date" name="date" />
        </div>

        <TextAreaField rows={4} cols={50} name={"comments"} />
      </Stack>
      <Stack direction="row" spacing={3}>
        <InputField
          label="Push Reps: "
          max={400}
          min={0}
          name="push"
          type="number"
        />
        <InputField
          label="Pull Reps: "
          max={400}
          min={0}
          name="pull"
          type="number"
        />
        <InputField label="Leg Reps: " min={0} name="legs" type="number" />
      </Stack>

      <div>
        <Button type="submit">Submit</Button>
      </div>
    </Stack>
  ),
};
