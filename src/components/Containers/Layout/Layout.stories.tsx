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
  children: [1, 2, 3, 4, 5, 6, 7, 8].map((child) => (
    <div
      style={{
        backgroundColor: "var(--color-gray)",
        width: "max(100px, 30%)",
        margin: "min(10px, 1%)",
        textAlign: "center",
        lineHeight: "75px",
        fontSize: "30px",
      }}
    >
      {child}
    </div>
  )),
};

export const Four = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Four.args = {
  children: [1, 2, 3, 4].map((child) => (
    <div
      style={{
        backgroundColor: "var(--color-gray)",
        width: "max(100px, 30%)",
        margin: "min(10px, 1%)",
        textAlign: "center",
        lineHeight: "75px",
        fontSize: "30px",
      }}
    >
      {child}
    </div>
  )),
};
