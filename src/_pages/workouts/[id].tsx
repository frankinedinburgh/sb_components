import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FC, SyntheticEvent } from "react";
import Button from "src/components/Button";
import Stack from "src/components/Containers/Stack";
import Form from "src/components/Form/Form";
import InputField from "src/components/Form/InputField";
import TextAreaField from "src/components/Form/TextArea";
import { getWorkoutById } from "../api";

interface IWorkoutData {
  id: number;
  attributes: {
    date: string;
    comments: string;
    pull_reps: number | null;
    push_reps: number | null;
    leg_reps: number | null;
  };
}

function useWorkout(workoutId: number) {
  return useQuery<IWorkoutData>({
    queryKey: ["workout", workoutId],
    queryFn: () => getWorkoutById(workoutId),
    keepPreviousData: true,
    staleTime: 5000,
  });
}

const Post: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  let { status, data, error, isFetching, isPreviousData } = useWorkout(id);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      date: { value: string };
      comments: { value: string };
      push: { value: string };
      pull: { value: string };
      legs: { value: string };
    };

    const formData = {
      date: target.date.value,
      comments: target.comments.value,
      push: target.push.value,
      pull: target.pull.value,
      legs: target.legs.value,
    };

    const JSONdata = JSON.stringify(formData);
    const endpoint = "/api/edit/form";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    alert(`Date: ${result.data}`);
  };

  return (
    <main>
      {data && (
        <Form onSubmit={handleSubmit}>
          <Stack direction="column" spacing={3}>
            <form onSubmit={handleSubmit}>
              <Stack direction="column" spacing={3}>
                <div>
                  <label htmlFor="date">Select Date:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={data.data.attributes.date}
                  />
                </div>

                <TextAreaField
                  rows={4}
                  cols={50}
                  name={"comments"}
                  // value={data.data.attributes.comments}
                />
              </Stack>

              <Stack direction="row" spacing={3}>
                <InputField
                  label="Push Reps: "
                  max={400}
                  min={0}
                  name="push"
                  type="number"
                  value={`${data.data.attributes.push_reps}`}
                />
                <InputField
                  label="Pull Reps: "
                  max={400}
                  min={0}
                  name="pull"
                  type="number"
                  value={`${data.data.attributes.pull_reps}`}
                />
                <InputField
                  label="Leg Reps: "
                  min={0}
                  name="legs"
                  type="number"
                  value={`${data.data.attributes.leg_reps}`}
                />
              </Stack>

            <Stack direction="row" spacing={3}>
              <InputField
                label="Push Reps: "
                max={400}
                min={0}
                name="push"
                type="number"
                value={`${workoutData.push_reps}`}
              />
              <InputField
                label="Pull Reps: "
                max={400}
                min={0}
                name="pull"
                type="number"
                value={`${workoutData.pull_reps}`}
              />
              <InputField
                label="Leg Reps: "
                min={0}
                name="legs"
                type="number"
                value={`${workoutData.leg_reps}`}
              />
            </Stack>

            <div>
              <Button type="submit">Submit</Button>
            </div>
          </Stack>
        </Form>
      )}
    </main>
  )
}