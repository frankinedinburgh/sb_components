import React from "react";
import { Story, Meta } from "@storybook/react";
import HistogramChart, { HistogramChartProps } from "./Histogram";

export default {
  title: "Charts/HistogramChart",
  component: HistogramChart,
} as Meta;

const Template: Story<HistogramChartProps> = (args) => (
  <HistogramChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [5, 10, 15, 7, 20, 8, 7, 9, 34],
  barColor: "#c3c3c3",
  barWidth: 30,
  barSpacing: 1,
};
