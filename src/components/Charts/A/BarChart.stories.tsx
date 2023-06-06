import { Story } from "@storybook/react";
import BarChart, { IBarChart } from "./BarChart";

export default {
  title: "Charts/A/BarChart",
  component: BarChart,
};

const Template: Story<IBarChart> = (args) => <BarChart {...args} />;

const stats = [
  { name: "Mon", value: 20 },
  { name: "Tue", value: 40 },
  { name: "Wed", value: 35 },
  { name: "Thu", value: 50 },
  { name: "Fri", value: 55 },
  { name: "Sat", value: 40 },
  { name: "Sun", value: 30 },
];

export const Default = Template.bind({});
Default.args = {
  stats,
  title: "Pull ups beginning 8th November",
  barColour: "#c3c3c3",
  barPadding: 20,
  barHeight: 40,
};
