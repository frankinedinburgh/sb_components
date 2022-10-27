import { Workstation } from "./Workstation";

export default {
  title: "UI/Workstation",
  component: Workstation,
  parameters: {
    docs: {
      description: {
        component: "Computer Workstation Reservation component",
      },
    },
  },
};

const Template = (args) => <Workstation {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  deskNumber: 10,
};
