import Grid from "./Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/Grid",
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: "This Grid uses flexbox",
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Grid {...args} />;

export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: (
    <Grid row={true}>
      <Grid column={true} sm={12} md={4}>
        <h1>Column 1</h1>
      </Grid>
      <Grid column={true} sm={12} md={4}>
        <h1>Column 2</h1>
      </Grid>
      <Grid column={true} sm={12} md={4}>
        <h1>Column 3</h1>
      </Grid>
    </Grid>
  ),
};

export const Stretch = Template.bind({});
Stretch.args = {
  alignItems: "stretch",
  column: true,
  expanded: true,
  justify: "space-between",
  lg: 12,
  md: 6,
  row: false,
  sm: 2,
  children: Primary.args.children,
};
