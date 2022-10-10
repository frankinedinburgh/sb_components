import InputField from ".";

export default {
  title: "Form/InputField",
  component: InputField,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <InputField {...args} />;

export const Text = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  name: "firstname",
  value: "Frank",
  className: "form-control",
  onChange: () => console.log("Enter name"),
  placeholder: "",
  label: "First Name: ",
};

export const Number = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Number.args = {
  name: "age",
  type: "number",
  className: "form-control",
  onChange: () => console.log("Enter age"),
  min: 0,
  max: 120,
  label: "Age: ",
};
