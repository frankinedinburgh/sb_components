import { Navbar } from "./Navbar";

export default {
  title: "UI/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Navbar {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const SubMenu = Template.bind({});
SubMenu.args = {
  hasSubMenu: true,
};
