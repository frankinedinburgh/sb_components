import { getExercises } from "src/_pages/api";

export default async function Exercises() {
  const data = await getExercises(1);
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
}
