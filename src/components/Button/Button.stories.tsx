import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  children: "Button",
  rounded: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "button",
  primary: false,
  children: "Button",
  rounded: false,
};

export const Large = Template.bind({});
Large.args = {
  type: "reset",
  primary: false,
  size: "large",
  children: "Button",
  rounded: false,
};

export const Small = Template.bind({});
Small.args = {
  type: "submit",
  primary: true,
  size: "small",
  children: <h6>Button</h6>,
  rounded: false,
};
