import { ComponentMeta } from "@storybook/react";
import { Workout } from "./Workout";

const response = {
  data: {
    id: 161,
    attributes: {
      date: "2022-10-01",
      comments: "3 x 8min XC in Abbottstown @3:55/km 2min recovery",
      pull_reps: 18,
      push_reps: null,
      leg_reps: null,
      createdAt: "2022-10-01T11:03:54.935Z",
      updatedAt: "2022-10-02T07:46:49.622Z",
      publishedAt: "2022-10-02T07:46:49.618Z",
    },
  },
  meta: {},
};

const Template = (args) => <Workout {...args} />;

export const Default = Template.bind({});
Default.args = {
  workoutId: 161,
  children: <></>,
};

export default {
  title: "UI/Workout",
  component: Workout,
  parameters: {
    mockData: [
      {
        url: `${process.env.apiBaseUrl}/workouts/${Default.args.workoutId}`,
        method: "GET",
        status: 200,
        response: {
          data: response,
        },
      },
    ],
  },
} as ComponentMeta<typeof Workout>;
