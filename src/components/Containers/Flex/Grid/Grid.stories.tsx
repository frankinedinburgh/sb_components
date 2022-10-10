import Grid from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Containers/Flex/Grid",
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

export const Row = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Row.args = {
  children: (
    <Grid row={true}>
      <Grid column={true} sm={12} md={3}>
        <h1>Column 1</h1>
      </Grid>
      <Grid column={true} sm={12} md={3}>
        <h1>Column 2</h1>
      </Grid>
      <Grid column={true} sm={12} md={3}>
        <h1>Column 3</h1>
      </Grid>
      <Grid column={true} sm={12} md={3}>
        <h1>Column 4</h1>
      </Grid>
    </Grid>
  ),
};

export const Column = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Column.args = {
  children: (
    <Grid row={false}>
      <Grid column={false} sm={12} md={4}>
        <h1>Column 1</h1>
      </Grid>
      <Grid column={false} sm={12} md={4}>
        <h1>Column 2</h1>
      </Grid>
      <Grid column={false} sm={12} md={4}>
        <h1>Column 3</h1>
      </Grid>
    </Grid>
  ),
};
