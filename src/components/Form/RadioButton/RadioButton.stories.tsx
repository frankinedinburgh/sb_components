import RadioButton from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/RadioButton",
  component: RadioButton,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <RadioButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  value: "blue",
  name: "colour",
  checked: true,
  onChangeHandler: (value: any) => {
    Basic.args.value = value;
  },
  children: <span>Please select your favourite colour</span>,
};
