import { Footer } from "./Footer";

export default {
  title: "UI/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>Contact me @digital-doodle</>,
};
