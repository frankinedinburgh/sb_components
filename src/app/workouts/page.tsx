import { getWorkouts } from "src/_pages/api";

export default async function Workouts() {
  const data = await getWorkouts(1);
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
}
