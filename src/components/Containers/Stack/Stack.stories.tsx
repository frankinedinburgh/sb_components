import Stack from ".";

export default {
  title: "Containers/Stack",
  component: Stack,
};

const Template = (args) => <Stack {...args} />;

export const Column = Template.bind({});
Column.args = {
  spacing: 3,
  direction: "column",
  wrap: true,
  children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
    <div
      style={{ backgroundColor: "var(--color-gray)", height: "max-content" }}
    >
      {row}
    </div>
  )),
};

export const Row = Template.bind({});
Row.args = {
  spacing: 3,
  direction: "row",
  wrap: false,
  children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
    <div
      style={{ backgroundColor: "var(--color-gray)", height: "max-content" }}
    >
      {row}
    </div>
  )),
};
