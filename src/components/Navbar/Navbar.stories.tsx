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
Basic.args = {
  links: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "News",
      link: "/news",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "About",
      link: "/about",
    },
  ],
};
