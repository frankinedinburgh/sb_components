import { Workout } from "../../Workout/Workout";
import Grid from "./";

export default {
  title: "Containers/Grid",
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: "This Grid uses css grid e.g: display: grid",
      },
    },
  },
};

const Template = (args) => <Grid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <Workout />
      <Workout />
      <Workout />
      <Workout />
      <Workout />
    </>
  ),
};
