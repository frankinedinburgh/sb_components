import { Schedule } from "./Schedule";

export default {
  title: "UI/Schedule",
  component: Schedule,
  parameters: {
    docs: {
      description: {
        component: "Display the schedule slot for a given workstation",
      },
    },
  },
};

const onReserve = (slot) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Sucessfully booked slot ${slot.slot}`);
    }, 1500); // simulates loading with the API
  });
};

const Template = (args) => <Schedule {...args} />;

export const Default = Template.bind({});
Default.args = {
  onReserve,
  schedule: [
    {
      id: 0,
      slot: "12:00 - 12:30",
      reserved: true,
    },
    {
      id: 1,
      slot: "12:30 - 13:00",
      reserved: false,
    },
    {
      id: 2,
      slot: "13:30 - 14:00",
      reserved: true,
    },
  ],
};
