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

export const Row = Template.bind({});
Row.args = {
  spacing: 3,
  direction: "row",
  wrap: false,
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>
  ),
};
