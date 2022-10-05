import TextInput from ".";

export default {
  title: "Form/TextInput",
  component: TextInput,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextInput {...args} />;

export const Basic = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  name: "firstname",
  value: "Frank",
  className: "form-control",
  onChange: () => console.log("Enter name"),
  placeholder: "",
  label: "First Name: ",
};
