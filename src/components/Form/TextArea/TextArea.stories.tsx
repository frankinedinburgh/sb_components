import TextAreaField from ".";

export default {
  title: "Form/TextAreaField",
  component: TextAreaField,
};

const Template = (args) => <TextAreaField {...args} />;

export const Text = Template.bind({});

Text.args = {
  name: "Comments",
  rows: 3,
  col: 40,
};
