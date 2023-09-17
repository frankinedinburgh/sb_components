import { Meta, Story } from "@storybook/react";
import Navbar, { INavigationBarProps } from "./Navbar";

export default {
  title: "UI/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: Story<INavigationBarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { id: "home-link", url: "/home", label: "Home", active: true },
    { id: "about-link", url: "/about", label: "About" },
    { id: "services-link", url: "/services", label: "Services" },
    { id: "contact-link", url: "/contact", label: "Contact" },
  ],
  isLoggedIn: false,
};
