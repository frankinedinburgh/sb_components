import { StackedChart } from "./StackedChart";

export default {
  title: "Charts/StackedChart",
  component: StackedChart,
  parameters: {
    docs: {
      description: {
        component:
          "Read more about this approach https://thomaswilburn.github.io/viz-book/css-flex.html",
      },
    },
  },
};

const Template = (args) => <StackedChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  stats: [
    {
      color: "#0D4C92",
      value: 44,
    },
    {
      color: "#59C1BD",
      value: 105,
    },
    {
      color: "#A0E4CB",
      value: 11,
    },
    {
      color: "#CFF5E7",
      value: 60,
    },
  ],
};
