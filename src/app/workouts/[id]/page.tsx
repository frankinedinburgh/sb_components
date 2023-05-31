import { getWorkoutById } from "src/_pages/api";

export default async function Workout({ params }: { params: { id: string } }) {
  const workout = await getWorkoutById(params.id);
  return <pre>{JSON.stringify(workout, null, 4)}</pre>;
}
