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
};
