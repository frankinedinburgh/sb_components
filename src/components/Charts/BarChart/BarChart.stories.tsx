import { BarChart } from "./BarChart";

export default {
  title: "Charts/BarChart",
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

const stats = [
  { name: "2000", value: 45 },
  { name: "2001", value: 110 },
  { name: "2002", value: 63 },
  { name: "2003", value: 11 },
  { name: "2004", value: 46 },
  { name: "2005", value: 88 },
  { name: "2006", value: 35 },
  { name: "2007", value: 5 },
  { name: "2008", value: 78 },
  { name: "2009", value: 91 },
  { name: "2010", value: 55 },
  { name: "2011", value: 16 },
  { name: "2012", value: 20 },
  { name: "2013", value: 45 },
  { name: "2014", value: 90 },
  { name: "2015", value: 80 },
  { name: "2016", value: 46 },
  { name: "2017", value: 23 },
  { name: "2018", value: 6 },
];

export const Default = Template.bind({});
Default.args = {
  stats,
  title: "Today's reps",
};
