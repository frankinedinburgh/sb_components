import { BarChart } from "./BarChart";

export default {
  title: "Charts/F/BarChart",
  component: BarChart,
  parameters: {
    docs: {
      description: {
        component:
          "Read more about this approach https://css-tricks.com/css-charts-grid-custom-properties/",
      },
    },
  },
};

const Template = (args) => <BarChart {...args} />;

export const Default = Template.bind({});
Default.args = {};
