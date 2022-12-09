import { PieChart } from "./PieChart";

export default {
  title: "Charts/PieChart",
  component: PieChart,
  parameters: {
    docs: {
      description: {
        component:
          "Read more about this approach https://css-tricks.com/how-to-make-a-line-chart-with-css/",
      },
    },
  },
};

const Template = (args) => <PieChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  percentage: 10,
  colour: "red",
  padding: 10,
  rounded: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  percentage: 80,
  colour: "red",
  padding: 5,
  rounded: false,
};
