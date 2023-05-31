import { getWorkouts } from "src/_pages/api";

export default async function Page() {
  const data = await getWorkouts(1);
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
}
