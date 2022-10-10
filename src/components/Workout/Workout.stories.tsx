import { Workout } from "./Workout";

export default {
  title: "UI/Workout",
  component: Workout,
};

const Template = (args) => <Workout {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: "2022-10-05",
  comment:
    "20min run (not feeling good on run) Burping and breathing hard GTG: exercise Took 2 sachets of spatone",
  pull: 52,
  push: 37,
  leg: 10,
};

// {
//   "id": 161,
//   "attributes": {
//       "date": "2022-10-01",
//       "comments": "3 x 8min XC in Abbottstown @3:55/km\n2min recovery",
//       "pull_reps": 18,
//       "push_reps": null,
//       "leg_reps": null,
//       "createdAt": "2022-10-01T11:03:54.935Z",
//       "updatedAt": "2022-10-02T07:46:49.622Z",
//       "publishedAt": "2022-10-02T07:46:49.618Z"
//   }
// }
