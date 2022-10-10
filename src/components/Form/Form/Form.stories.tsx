import Form from ".";
import InputField from "../InputField";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/Form",
  component: Form,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Form {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: (
    <>
      <InputField
        name="exercise"
        value="exercise"
        placeholder="exercise"
        label="Select an exercise"
      />
      <InputField
        name="comment"
        value="comment"
        placeholder="comment"
        label="Any comments ..."
      />
      <InputField
        type="number"
        name="reps"
        label="Number of reps"
        min={10}
        max={100}
        placeholder="reps"
      />
    </>
  ),
};
