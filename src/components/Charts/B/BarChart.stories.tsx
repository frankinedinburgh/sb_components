import { BarChart } from "./BarChart";

export default {
  title: "Charts/B/BarChart",
  component: BarChart,
};

const Template = (args) => <BarChart {...args} />;

const stats = [
  { name: "Pull", value: 55 },
  { name: "Push", value: 30 },
  { name: "Legs", value: 35 },
];

export const Default = Template.bind({});
Default.args = {
  stats,
  title: "Today's reps",
  subHeader: "50min slow easy run",
};

export const Second = Template.bind({});
Second.args = {
  stats: [
    { name: "Pull", value: 60 },
    { name: "Push", value: 50 },
    { name: "Legs", value: 125 },
  ],
  title: "Today's reps",
  subHeader: "50min slow easy run",
};

export const SameSpan = Template.bind({});
SameSpan.args = {
  stats: [
    { name: "Pull", value: 30 },
    { name: "Push", value: 30 },
    { name: "Legs", value: 30 },
  ],
  title: "Today's reps",
  subHeader: "50min slow easy run",
};
