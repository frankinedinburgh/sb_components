import { ComponentMeta, ComponentStory } from "@storybook/react";
import CloseIcon from ".";

const Template: ComponentStory<typeof CloseIcon> = (args) => (
  <CloseIcon {...args} />
);

const meta: ComponentMeta<typeof CloseIcon> = {
  title: "Icons/CloseIcon",
  component: CloseIcon,
  parameters: {
    layout: "fullscreen",
  },
};

const Basic = Template.bind({});

Basic.args = {};

export { meta as default, Basic };
