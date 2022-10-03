import Grid from "./Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/Grid",
  component: Grid,
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
