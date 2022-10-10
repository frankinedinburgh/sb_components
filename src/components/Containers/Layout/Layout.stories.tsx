import Layout from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Containers/Layout",
  component: Layout,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Layout {...args} />;

export const Eight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Eight.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </>
  ),
};

export const Four = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Four.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>
  ),
};
