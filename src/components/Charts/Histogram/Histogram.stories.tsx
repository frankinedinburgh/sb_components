import { Histogram } from "./Histogram";

export default {
  title: "Charts/Histogram",
  component: Histogram,
  parameters: {
    docs: {
      description: {
        component:
          "Read more about this approach https://thomaswilburn.github.io/viz-book/css-flex.html",
      },
    },
  },
};

const Template = (args) => <Histogram {...args} />;

export const Default = Template.bind({});
Default.args = {
  stats: [
    ["40%", "45%"],
    ["50%", "15%"],
    ["60%", "5%"],
    ["92%", "5%"],
    ["30%", "15%"],
    ["10%", "45%"],
  ],
};
